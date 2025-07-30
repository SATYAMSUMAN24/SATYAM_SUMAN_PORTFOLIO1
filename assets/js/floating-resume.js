
class FloatingResumeWidget {
    constructor() {
        this.widget = null;
        this.isExpanded = false;
        this.resumeUrl = 'assets/docs/Satyam_Suman_Resume.pdf';
        this.resumeUrl = 'assets/docs/Satyam_Suman_Data_Analyst_Resume.pdf';
        this.downloadCount = localStorage.getItem('resumeDownloadCount') || 0;
        this.init();
    }

    init() {
        this.createWidget();
        this.attachEventListeners();
        this.addPulseEffect();
        this.initSmoothScrolling();
        this.updateDownloadCounter();
    }

    createWidget() {
        const widget = document.createElement('div');
        widget.className = 'floating-resume-widget';
        widget.innerHTML = `
            <div class="floating-resume-minimized">
                <i class="fas fa-file-download"></i>
                <span class="download-badge" id="downloadBadge">${this.downloadCount}</span>
            </div>
            <div class="floating-resume-expanded">
                <div class="floating-resume-header">
                    <h4 class="floating-resume-title">Resume</h4>
                    <button class="floating-resume-close">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="floating-resume-content">
                    <div class="floating-resume-avatar">
                        <i class="fas fa-user-circle"></i>
                    </div>
                    <div class="floating-resume-name">Satyam Suman</div>
                    <div class="floating-resume-role">Full Stack Developer & Data Analyst</div>
                    <div class="floating-resume-stats">
                        <div class="stat-item">
                            <span class="stat-number">${this.downloadCount}</span>
                            <span class="stat-label">Downloads</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">7.37</span>
                            <span class="stat-label">CGPA</span>
                        </div>
                    </div>
                    <div class="floating-resume-buttons">
                        <a href="${this.resumeUrl}" download="Satyam_Suman_Resume.pdf" class="floating-resume-btn floating-resume-btn-primary" id="downloadBtn">
                            <i class="fas fa-download"></i> Download PDF
                        </a>
                        <button onclick="window.floatingResume.previewResume()" class="floating-resume-btn floating-resume-btn-secondary">
                            <i class="fas fa-eye"></i> Quick Preview
                        </button>
                        <button onclick="window.floatingResume.shareResume()" class="floating-resume-btn floating-resume-btn-tertiary">
                            <i class="fas fa-share-alt"></i> Share
                        </button>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(widget);
        this.widget = widget;
    }

    attachEventListeners() {
        // Toggle widget on click
        const minimized = this.widget.querySelector('.floating-resume-minimized');
        minimized.addEventListener('click', (e) => {
            e.stopPropagation();
            this.expandWidget();
        });

        // Close button
        const closeBtn = this.widget.querySelector('.floating-resume-close');
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.minimizeWidget();
        });

        // Click outside to close
        document.addEventListener('click', (e) => {
            if (this.isExpanded && !this.widget.contains(e.target)) {
                this.minimizeWidget();
            }
        });

        // Escape key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isExpanded) {
                this.minimizeWidget();
            }
        });

        // Track downloads
        const downloadBtn = this.widget.querySelector('#downloadBtn');
        if (downloadBtn) {
            downloadBtn.addEventListener('click', () => {
                this.trackDownload('direct_download');
            });
        }
    }

    expandWidget() {
        this.widget.classList.add('expanded');
        this.widget.classList.remove('pulse');
        this.isExpanded = true;
        
        // Add animation
        const expanded = this.widget.querySelector('.floating-resume-expanded');
        expanded.style.opacity = '0';
        expanded.style.transform = 'scale(0.8)';
        
        setTimeout(() => {
            expanded.style.transition = 'all 0.3s ease';
            expanded.style.opacity = '1';
            expanded.style.transform = 'scale(1)';
        }, 10);
    }

    minimizeWidget() {
        const expanded = this.widget.querySelector('.floating-resume-expanded');
        expanded.style.transition = 'all 0.3s ease';
        expanded.style.opacity = '0';
        expanded.style.transform = 'scale(0.8)';
        
        setTimeout(() => {
            this.widget.classList.remove('expanded');
            this.isExpanded = false;
            expanded.style.transition = '';
            expanded.style.opacity = '';
            expanded.style.transform = '';
        }, 300);
    }

    addPulseEffect() {
        // Add pulse effect after 3 seconds
        setTimeout(() => {
            if (!this.isExpanded) {
                this.widget.classList.add('pulse');
            }
        }, 3000);

        // Remove pulse on hover
        this.widget.addEventListener('mouseenter', () => {
            this.widget.classList.remove('pulse');
        });
    }

    

    previewResume() {
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: fadeIn 0.3s ease;
        `;

        modal.innerHTML = `
            <div style="
                background: white;
                border-radius: 10px;
                padding: 20px;
                max-width: 90%;
                max-height: 90%;
                position: relative;
            ">
                <button onclick="this.closest('.modal').remove()" style="
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    background: #bb86fc;
                    color: white;
                    border: none;
                    border-radius: 50%;
                    width: 30px;
                    height: 30px;
                    cursor: pointer;
                    font-size: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                ">×</button>
                <iframe src="${this.resumeUrl}" style="
                    width: 800px;
                    height: 600px;
                    max-width: 100%;
                    max-height: 100%;
                    border: none;
                    border-radius: 5px;
                "></iframe>
            </div>
        `;

        modal.className = 'modal';
        document.body.appendChild(modal);

        // Close on background click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });

        this.trackDownload('preview');
    }

    

    showFeedback(message) {
        const feedback = document.createElement('div');
        feedback.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #4CAF50;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            z-index: 10001;
            animation: slideIn 0.3s ease;
        `;
        feedback.textContent = message;
        
        document.body.appendChild(feedback);
        
        setTimeout(() => {
            feedback.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => feedback.remove(), 300);
        }, 3000);
    }

    updateDownloadCounter() {
        const badge = document.getElementById('downloadBadge');
        if (badge) {
            badge.textContent = this.downloadCount;
        }
    }

    shareResume() {
        if (navigator.share) {
            navigator.share({
                title: 'Satyam Suman - Resume',
                text: 'Check out Satyam Suman\'s resume - Full Stack Developer & Data Analyst',
                url: window.location.origin + '/' + this.resumeUrl
            });
        } else {
            // Fallback for browsers that don't support Web Share API
            navigator.clipboard.writeText(window.location.origin + '/' + this.resumeUrl).then(() => {
                this.showFeedback('Resume link copied to clipboard!');
            });
        }
        this.trackDownload('share');
    }

    trackDownload(method) {
        this.downloadCount++;
        localStorage.setItem('resumeDownloadCount', this.downloadCount);
        this.updateDownloadCounter();
        
        // Analytics tracking
        if (typeof gtag !== 'undefined') {
            gtag('event', 'resume_download', {
                method: method,
                page_title: document.title,
                download_count: this.downloadCount
            });
        }
        
        this.showFeedback(`Resume ${method === 'share' ? 'shared' : 'downloaded'} successfully!`);
        console.log(`Resume ${method} - Total downloads: ${this.downloadCount}`);
    }

    initSmoothScrolling() {
        // Enhanced smooth scrolling for all anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Smooth scroll to top functionality
        const scrollToTopBtn = document.getElementById('btnScrollToTop');
        if (scrollToTopBtn) {
            scrollToTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }
}

// CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Initialize when DOM is loaded
let floatingResume;
document.addEventListener('DOMContentLoaded', function() {
    if (!window.floatingResume) {
        window.floatingResume = new FloatingResumeWidget();
        floatingResume = window.floatingResume;
    }
});
