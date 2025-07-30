AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Education Website",
    cardImage: "assets/images/project-page/quiz.jpg",
    description: "Interactive e-learning platform with video lectures, quizzes, and progress tracking system built with modern web technologies.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://e-learning-website-rho.vercel.app/",
    Githublink: "https://github.com/SATYAMSUMAN24/E-Learning_Website",
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    hostingPlatform: "Vercel"
  },
  {
    title: "News Book Application",
    cardImage: "assets/images/project-page/book.png",
    description: "Real-time news application with category filtering, search functionality, and API integration built with React.js for modern news consumption.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://1-news-book-react.vercel.app/",
    Githublink: "https://github.com/SATYAMSUMAN24/1News_Book_React",
    skills: ["React.js", "News API", "JavaScript", "Bootstrap"],
    hostingPlatform: "Vercel"
  },
  {
    title: "Portfolio Website",
    cardImage: "assets/images/project-page/p.png",
    description: "Modern responsive portfolio website showcasing projects, skills, and experience with interactive animations and AI assistant integration.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/html5-40-1175193.png",
    Previewlink: "https://satyamsumanportfolio.vercel.app",
    Githublink: "https://github.com/SATYAMSUMAN24?tab=repositories",
    skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    hostingPlatform: "Vercel"
  },
  {
    title: "WEGO-Tour-and-Travel-Website Public",
    cardImage: "assets/images/project-page/we.png",
    description: "Full-featured task management application with drag-and-drop functionality, user authentication, and real-time updates for productivity enhancement.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://wego-tour-and-travel-website.vercel.app/",
    Githublink: "https://github.com/SATYAMSUMAN24/WEGO-Tour-and-Travel-Website",
    skills: ["React.js", "JavaScript", "Node.js"],
    hostingPlatform: "Vercel"
  },
  {
    title: "Solar System",
    cardImage: "assets/images/project-page/solar.png",
    description: "Interactive Solar system with Planets, and detailed explanations of each planet's characteristics and features.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/javascript-1-225993.png",
    Previewlink: "https://solar-system-theta-ten.vercel.app/",
    Githublink: "https://github.com/SATYAMSUMAN24/Solar-System",
    skills: ["JavaScript", " React js", "Html", "CSS3"],
    hostingPlatform: "Vercel"
  },
  {
    title: "Tech Solution Website- Kalolytics Solutions",
    cardImage: "assets/images/project-page/k.png",
    description: "Responsive and professional website for Kalolytics Solution featuring animated service sections, contact form, interactive UI, and modern design using HTML, CSS, and JavaScript.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://kalolytic-solution23.vercel.app/",
    Githublink: "https://github.com/SATYAMSUMAN24/Kalolytic-Solution23",
    skills: ["HTML", "CSS", "JS", "Newsletter", "Emailjs", "Bootstrap"],
    hostingPlatform: "Vercel"
  },
  {
    title: "React Schedular",
    cardImage: "assets/images/project-page/r.png",
    description: "Dynamic React Scheduler application for managing events, appointments, and tasks with real-time updates, calendar views, and responsive UI.",
    tagimg: "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    Previewlink: "https://data-viz-dashboard.herokuapp.com",
    Githublink: "https://github.com/SATYAMSUMAN24/React-Schedule",
    skills: ["React", "Javascript", "Google calender Api", "Replit ai"],
    hostingPlatform: "Vercel"
  },
  {
    title: "Music Player- Kala_music_Player",
    cardImage: "assets/images/project-page/music.png",
    description: "Feature-rich music website for Kala Music with audio streaming, artist profiles, playlist creation, responsive design, and an interactive user interface built using modern web technologies.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://music-kala-my-music-website12.vercel.app/",
    Githublink: "https://github.com/SATYAMSUMAN24/Music-kala_my_music_website12",
    skills: ["React.js", "Firebase", "Socket.io", "Material-UI"],
    hostingPlatform: "Vercel"
  },
  {
    title: "Recipe Finder App",
    cardImage: "assets/images/project-page/recipe.jpg",
    description: "Modern recipe discovery application with ingredient-based search, nutritional information, and meal planning features for cooking enthusiasts. We are working on it featch api",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/javascript-1-225993.png",
    Previewlink: "https://recipe-finder-app.vercel.app",
    Githublink: "https://github.com/SATYAMSUMAN24?tab=repositories",
    skills: ["JavaScript", "HTML", "Local Storage", "CSS Grid"],
    hostingPlatform: "Vercel"
  },
  
  {
    title: "Bihar Election Analysis",
    cardImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop",
    description: "Dash board and Analysis of voting. We are working on it",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/javascript-1-225993.png",
    Previewlink: "https://blockchain-voting.vercel.app",
    Githublink: "https://github.com/SATYAMSUMAN24/Lok_sahaba_2024_election_python",
    skills: ["Python", "Web3.js", "Power Bi", "Seaborn"],
    hostingPlatform: "Vercel"
  }
];

// Function to get hosting platform icon
function getHostingIcon(platform) {
  const icons = {
    'Vercel': 'https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png',
    'Netlify': 'https://www.netlify.com/img/press/logos/logomark.svg',
    'Heroku': 'https://brand.heroku.com/static/media/heroku-logo-solid-white.svg',
    'GitHub Pages': 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
  };
  return icons[platform] || 'https://cdn.iconscout.com/icon/free/png-512/web-hosting-5-474771.png';
}

// Generate project cards
document.addEventListener('DOMContentLoaded', function() {
  const projectContainer = document.querySelector('.projectcards');
  if (!projectContainer) return;

  projectContainer.innerHTML = projects.map(project => `
    <div class="col-lg-4 col-md-6 mb-4 project-card-container">
      <div class="project-card h-100" data-aos="fade-up">
        <div class="project-image-container">
          <img src="${project.cardImage}" class="project-image" alt="${project.title}">
          <div class="project-overlay">
            <div class="project-tech-icon">
              <img src="${project.tagimg}" alt="Technology" class="tech-icon">
            </div>
          </div>
        </div>

        <div class="project-content">
          <div class="project-header">
            <h5 class="project-title">${project.title}</h5>
            <div class="hosting-badge">
              <img src="${getHostingIcon(project.hostingPlatform)}" alt="${project.hostingPlatform}" class="hosting-icon">
              <span class="hosting-text">${project.hostingPlatform}</span>
            </div>
          </div>

          <p class="project-description">${project.description}</p>

          <div class="project-tech mb-3">
            ${project.skills.map(skill => `<span class="tech-badge">${skill}</span>`).join('')}
          </div>

          <div class="project-actions">
            <a href="${project.Previewlink}" target="_blank" class="btn btn-primary">
              <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
            <a href="${project.Githublink}" target="_blank" class="btn btn-outline-secondary">
              <i class="fab fa-github"></i> GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  `).join('');
});

function myFunction() {
  // Declare variables
  var input, i, projectCard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  projectCard = document.getElementsByClassName("project-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("project-title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < projectCard.length; i++) {
    if (
      title[i] && title[i].innerHTML.toUpperCase().includes(input)
    ) {
      projectCard[i].style.display = "";
      card[i].style.display = "";
    } else {
      projectCard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}