
class AIAssistant {
    constructor() {
        // Prevent multiple instances
        if (window.aiAssistantInstance) {
            return window.aiAssistantInstance;
        }
        
        this.isOpen = false;
        this.messages = [];
        this.isInitialized = false;
        this.responses = this.initializeResponses();
        this.init();
        
        // Store instance globally
        window.aiAssistantInstance = this;
    }

    init() {
        // Prevent multiple initializations
        if (this.isInitialized) return;
        
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.createAssistantUI();
                this.bindEvents();
                this.loadWelcomeMessage();
                this.isInitialized = true;
            });
        } else {
            this.createAssistantUI();
            this.bindEvents();
            this.loadWelcomeMessage();
            this.isInitialized = true;
        }
    }

    createAssistantUI() {
        // Check if UI already exists
        if (document.getElementById('aiAssistant')) {
            return;
        }

        const assistantHTML = `
            <div id="aiAssistant" class="ai-assistant">
                <button class="ai-toggle-btn" id="aiToggle" aria-label="Toggle AI Assistant">
                    <i class="fas fa-robot"></i>
                </button>
                <div class="ai-chat-window" id="aiChatWindow">
                    <div class="ai-header">
                        <h4>AI Assistant</h4>
                        <button class="ai-close-btn" id="aiClose" aria-label="Close AI Assistant">×</button>
                    </div>
                    <div class="ai-messages" id="aiMessages"></div>
                    <div class="ai-suggestions" id="aiSuggestions">
                        <div class="ai-suggestion" data-query="skills">What are your skills?</div>
                        <div class="ai-suggestion" data-query="projects">Tell me about your projects</div>
                        <div class="ai-suggestion" data-query="education">Your education background?</div>
                        <div class="ai-suggestion" data-query="contact">How to contact you?</div>
                    </div>
                    <div class="ai-input-area">
                        <input type="text" id="aiInput" class="ai-input" placeholder="Ask me anything about Satyam..." autocomplete="off">
                        <button id="aiSend" class="ai-send-btn" aria-label="Send message">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;

        // Try to use container first, fallback to body
        const container = document.getElementById('ai-assistant-container') || document.body;
        container.insertAdjacentHTML('beforeend', assistantHTML);
    }

    bindEvents() {
        // Use setTimeout to ensure DOM elements are available
        setTimeout(() => {
            const toggle = document.getElementById('aiToggle');
            const close = document.getElementById('aiClose');
            const send = document.getElementById('aiSend');
            const input = document.getElementById('aiInput');
            const suggestions = document.querySelectorAll('.ai-suggestion');

            if (toggle) {
                toggle.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.toggleChat();
                });
            }

            if (close) {
                close.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.closeChat();
                });
            }

            if (send) {
                send.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.sendMessage();
                });
            }

            if (input) {
                input.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        this.sendMessage();
                    }
                });

                input.addEventListener('focus', () => {
                    // Scroll into view on mobile
                    if (window.innerWidth <= 768) {
                        setTimeout(() => {
                            input.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }, 300);
                    }
                });
            }

            // Add suggestion click handlers
            suggestions.forEach(suggestion => {
                suggestion.addEventListener('click', () => {
                    const query = suggestion.getAttribute('data-query');
                    const text = suggestion.textContent;
                    this.handleSuggestionClick(text);
                });
            });

            // Close chat when clicking outside
            document.addEventListener('click', (e) => {
                const chatWindow = document.getElementById('aiChatWindow');
                const toggleBtn = document.getElementById('aiToggle');
                
                if (this.isOpen && chatWindow && !chatWindow.contains(e.target) && !toggleBtn.contains(e.target)) {
                    this.closeChat();
                }
            });

        }, 100);
    }

    toggleChat() {
        this.isOpen = !this.isOpen;
        const chatWindow = document.getElementById('aiChatWindow');
        const suggestions = document.getElementById('aiSuggestions');
        
        if (chatWindow) {
            if (this.isOpen) {
                chatWindow.style.display = 'flex';
                setTimeout(() => {
                    chatWindow.classList.add('active');
                    this.scrollToBottom();
                    // Show suggestions if no messages yet
                    if (this.messages.length <= 1 && suggestions) {
                        suggestions.style.display = 'flex';
                    }
                }, 10);
            } else {
                chatWindow.classList.remove('active');
                setTimeout(() => {
                    chatWindow.style.display = 'none';
                }, 300);
            }
        }
    }

    closeChat() {
        this.isOpen = false;
        const chatWindow = document.getElementById('aiChatWindow');
        if (chatWindow) {
            chatWindow.classList.remove('active');
            setTimeout(() => {
                chatWindow.style.display = 'none';
            }, 300);
        }
    }

    scrollToBottom() {
        const messagesContainer = document.getElementById('aiMessages');
        if (messagesContainer) {
            setTimeout(() => {
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }, 100);
        }
    }

    loadWelcomeMessage() {
        const welcomeMessage = "Hi! 👋 I'm Satyam's AI assistant. I can help you learn more about his skills, projects, education, and experience. What would you like to know?";
        this.addMessage(welcomeMessage, 'assistant');
    }

    addMessage(message, sender) {
        const messagesContainer = document.getElementById('aiMessages');
        if (!messagesContainer) return;

        const messageDiv = document.createElement('div');
        messageDiv.className = `ai-message ${sender}`;
        
        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        messageContent.innerHTML = message.replace(/\n/g, '<br>');
        
        messageDiv.appendChild(messageContent);
        messagesContainer.appendChild(messageDiv);
        
        this.messages.push({ message, sender });
        this.scrollToBottom();
    }

    handleSuggestionClick(text) {
        const input = document.getElementById('aiInput');
        const suggestions = document.getElementById('aiSuggestions');
        
        if (input) {
            input.value = text;
            this.sendMessage();
        }
        
        if (suggestions) {
            suggestions.style.display = 'none';
        }
    }

    async sendMessage() {
        const input = document.getElementById('aiInput');
        const sendBtn = document.getElementById('aiSend');
        const suggestions = document.getElementById('aiSuggestions');
        
        if (!input) return;

        const message = input.value.trim();
        if (!message) return;

        // Hide suggestions after first message
        if (suggestions) {
            suggestions.style.display = 'none';
        }

        // Disable input while processing
        if (sendBtn) sendBtn.disabled = true;
        input.disabled = true;

        this.addMessage(message, 'user');
        input.value = '';

        this.showTypingIndicator();

        try {
            const response = await this.getLocalResponse(message);
            this.hideTypingIndicator();
            this.addMessage(response, 'assistant');
        } catch (error) {
            console.error('AI Assistant Error:', error);
            this.hideTypingIndicator();
            this.addMessage('Sorry, I encountered an error. Please try again.', 'assistant');
        } finally {
            // Re-enable input
            if (sendBtn) sendBtn.disabled = false;
            input.disabled = false;
            input.focus();
        }
    }

    showTypingIndicator() {
        const messagesContainer = document.getElementById('aiMessages');
        if (!messagesContainer) return;

        // Remove existing indicator if any
        this.hideTypingIndicator();

        const indicator = document.createElement('div');
        indicator.className = 'ai-typing';
        indicator.id = 'typingIndicator';
        indicator.innerHTML = `
            <span>AI is typing</span>
            <div class="typing-dots">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        `;
        messagesContainer.appendChild(indicator);
        this.scrollToBottom();
    }

    hideTypingIndicator() {
        const indicator = document.getElementById('typingIndicator');
        if (indicator) indicator.remove();
    }

    initializeResponses() {
        return {
            skills: "Satyam is proficient in:\n• Programming: Java, Python, JavaScript\n• Frontend: React.js, HTML/CSS, Bootstrap\n• Backend: Spring Boot, Node.js\n• Database: MySQL, PostgreSQL\n• Tools: Git, Power BI, Excel\n• Data Analysis: Pandas, NumPy, Matplotlib\n\nHe's passionate about full-stack development and data analysis!",
            
            education: "🎓 Education Background:\n• B.Tech Computer Science - Gandhi Engineering College (2021-2025)\n• CGPA: 7.37\n• Certifications:\n  - Java Full Stack (Apna College)\n  - Data Science with Python (Code with Harry)\n  - Data Analysis with Excel (Coursera)\n  - Soft Skills (TCS iON)",
            
            projects: "🚀 Featured Projects:\n• Education Website - React.js based learning platform\n• News Book Application - Full-stack news aggregator\n• Bihar Election Data Analysis - Python data analysis\n• Sales Dashboard - Power BI visualization\n• Student Performance Analysis - ML-based insights\n\nCheck out the Projects section for detailed information!",
            
            experience: "💼 Experience Highlights:\n• Full-stack web development\n• Data analysis and visualization\n• 🥈 2nd Prize - Tech Debate Competition\n• 🛠️ TechFest 2024 - Volunteer & Project Exhibitor\n• Open source contributions\n• Various hackathon participations",
            
            contact: "📧 Contact Information:\n• Email: satyamsuman2003@gmail.com\n• Phone: +91 9905927761\n• LinkedIn: linkedin.com/in/satyamsuman2003\n• GitHub: github.com/SATYAMSUMAN24\n• Twitter: twitter.com/satyamsuman24\n• Instagram: instagram.com/satyamsuman6349\n\nFeel free to reach out anytime! 😊",
            
            about: "👋 About Satyam:\nI'm a passionate Computer Science student specializing in full-stack development and data analysis. Currently pursuing B.Tech from Gandhi Engineering College with expertise in Java, Python, React.js, and modern web technologies. I love solving complex problems and building impactful solutions!"
        };
    }

    async getLocalResponse(message) {
        // Simulate typing delay
        await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));

        const lowerMessage = message.toLowerCase();

        // Enhanced keyword matching
        if (this.containsKeywords(lowerMessage, ['skill', 'technology', 'tech', 'programming', 'language'])) {
            return this.responses.skills;
        } else if (this.containsKeywords(lowerMessage, ['education', 'study', 'college', 'degree', 'certification'])) {
            return this.responses.education;
        } else if (this.containsKeywords(lowerMessage, ['project', 'work', 'portfolio', 'application', 'website'])) {
            return this.responses.projects;
        } else if (this.containsKeywords(lowerMessage, ['experience', 'job', 'career', 'achievement', 'competition'])) {
            return this.responses.experience;
        } else if (this.containsKeywords(lowerMessage, ['contact', 'email', 'phone', 'reach', 'connect', 'social'])) {
            return this.responses.contact;
        } else if (this.containsKeywords(lowerMessage, ['about', 'who', 'tell me', 'yourself', 'satyam'])) {
            return this.responses.about;
        } else if (this.containsKeywords(lowerMessage, ['hello', 'hi', 'hey', 'greetings'])) {
            return "Hello! 👋 I'm Satyam's AI assistant. I'm here to help you learn about his background, skills, and projects. You can ask me about:\n\n• Technical skills and expertise\n• Educational background\n• Projects and portfolio\n• Work experience\n• Contact information\n\nWhat would you like to know?";
        } else if (this.containsKeywords(lowerMessage, ['thank', 'thanks', 'appreciate'])) {
            return "You're welcome! 😊 I'm happy to help. Is there anything else you'd like to know about Satyam's background or work?";
        } else if (this.containsKeywords(lowerMessage, ['resume', 'cv', 'download'])) {
            return "📄 You can view and download Satyam's resume from the floating download button on the right side of the page, or check the home page for the resume section with QR code for mobile download!";
        } else {
            return "That's an interesting question! 🤔 I can help you with information about:\n\n• 💻 Technical Skills & Technologies\n• 🎓 Education & Certifications  \n• 🚀 Projects & Portfolio\n• 💼 Experience & Achievements\n• 📧 Contact Information\n• 👨‍💻 About Satyam\n\nWhat specific topic would you like to explore?";
        }
    }

    containsKeywords(text, keywords) {
        return keywords.some(keyword => text.includes(keyword));
    }
}

// Auto-initialize when script loads
(function() {
    if (typeof window !== 'undefined') {
        window.AIAssistant = AIAssistant;
        
        function initAIAssistant() {
            if (!window.aiAssistantInstance) {
                if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', () => {
                        setTimeout(() => new AIAssistant(), 200);
                    });
                } else {
                    setTimeout(() => new AIAssistant(), 200);
                }
            }
        }
        
        initAIAssistant();
        
        // Handle window resize for mobile responsiveness
        window.addEventListener('resize', debounce(() => {
            const chatWindow = document.getElementById('aiChatWindow');
            if (chatWindow && window.innerWidth <= 768) {
                const messagesContainer = document.getElementById('aiMessages');
                if (messagesContainer) {
                    messagesContainer.scrollTop = messagesContainer.scrollHeight;
                }
            }
        }, 250));
    }
})();

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
