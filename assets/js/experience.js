AOS.init();

const experiences = [
  {
    title: "Fronted Developer Intern",
    company: "Kalolytics Solutions",
    duration: "June 2025 - Current",
    location: "Noida, UP",
    description: "Developed responsive web applications using HTML, CSS, JavaScript, React.js, and REST APIs and also handled MySQL database. Collaborated with senior developers on real-world projects and gained hands-on experience with modern web development practices.",
    technologies: ["HTML", "CSS", "React.js", "JavaScript", "CSS3", "Git", "REST APIs","Mysql"],
    achievements: [
      "Built 3 interactive web applications from scratch",
      "Improved website performance by 25%",
      "Collaborated with a team of 5 developers"
    ],
    certificateLink: "https://drive.google.com/file/d/1iVhzP_lB84r4Z_gcXduHykpSGRafIb0Q/view?usp=sharing",
    logo: "assets/images/experience-page/logo.png"
  },
  {
    title: "Data Analysis Project Lead",
    company: "University Research Lab",
    duration: "January 2024 - May 2024",
    location: "Gandhi Engineering College",
    description: "Led a team in analyzing Bihar Election data using Python, Pandas, and data visualization tools. Created comprehensive reports and dashboards for academic research purposes.",
    technologies: ["Python", "Pandas", "Matplotlib", "Excel", "Power BI"],
    achievements: [
      "Analyzed 10,000+ data points",
      "Created 15+ interactive visualizations",
      "Presented findings to faculty panel"
    ],
    certificateLink: "https://drive.google.com/file/d/1iVhzP_lB84r4Z_gcXduHykpSGRafIb0Q/view?usp=sharing",
    logo: "assets/images/experience-page/2.jpg"
  },
  {
    title: "Frontend Developer",
    company: "Yhills pvt ltd",
    duration: "July 2023 - Sept 2023",
    location: "Jaipur, Rajasthan",
    description: "Contributed to the development of education platform's user interface. Implemented responsive design principles and optimized user experience across multiple devices.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery"],
    achievements: [
      "Increased user engagement by 30%",
      "Reduced page load time by 40%",
      "Implemented mobile-first design approach"
    ],
    certificateLink: "https://drive.google.com/file/d/1ZXMpk4gmswJvBX7IEKH1u_UBdUEXJMiM/view?usp=sharing",
    logo: "assets/images/experience-page/logo2.png"
  }
];

const volunteerships = [
  {
    title: "TechFest 2024 Volunteer",
    organization: "Gandhi Engineering College",
    duration: "March 2024",
    description: "Organized technical events, managed participant registration, and showcased student projects. Contributed to the successful execution of the college's annual technical festival.",
    certificateLink: "https://google.com",
    logo: "assets/images/experience-page/d1.jpeg"
  },
  {
    title: "Coding Workshop Mentor",
    organization: "Tech Community Bhubaneswar",
    duration: "February 2024",
    description: "Mentored junior students in web development basics, conducted hands-on coding sessions, and provided guidance on project development and career paths.",
    certificateLink: "https://google.com",
    logo: "assets/images/experience-page/5.jpg"
  }
];

const hackathons = [
  {
    title: "Tech Feast  Hackathon 2024",
    organization: "Gandhi Engineering college",
    duration: "November 2024",
    position: "Finalist",
    description: "Developed a E Learning Plateform using and web technologies and database. Our team reached the final round among 200+ participating teams.",
    technologies: ["Html","css","React.js", "Node.js", "MongoDB"],
    certificateLink: "https://drive.google.com/file/d/1MO2pcQ5hYcNmy5iT5LTHQxlAqpifIMwT/view?usp=sharing",
    logo: "assets/images/experience-page/d1.jpeg"
  }
];

// Generate experience cards
document.addEventListener('DOMContentLoaded', function() {
  generateExperienceCards();
  generateVolunteershipCards();
  generateHackathonCards();
});

function generateExperienceCards() {
  const container = document.querySelector('.experience-cards');
  if (!container) return;

  container.innerHTML = experiences.map((exp, index) => `
    <li class="card" data-aos="fade-right" data-aos-delay="${index * 100}">
      <div class="card-body">
        <div class="experience-header">
          <div class="company-logo">
            <img src="${exp.logo}" alt="${exp.company}" class="company-img">
          </div>
          <div class="experience-info">
            <h5 class="experience-title">${exp.title}</h5>
            <h6 class="company-name">${exp.company}</h6>
            <div class="experience-meta">
              <span class="duration"><i class="fas fa-calendar"></i> ${exp.duration}</span>
              <span class="location"><i class="fas fa-map-marker-alt"></i> ${exp.location}</span>
            </div>
          </div>
          <div class="certificate-section">
            <a href="${exp.certificateLink}" target="_blank" class="certificate-btn" title="View Certificate">
              <img src="https://www.google.com/favicon.ico" alt="Google Certificate" class="google-logo">
              <span>Certificate</span>
            </a>
          </div>
        </div>

        <p class="experience-description">${exp.description}</p>

        <div class="technologies">
          <h6>Technologies Used:</h6>
          <div class="tech-tags">
            ${exp.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
          </div>
        </div>

        <div class="achievements">
          <h6>Key Achievements:</h6>
          <ul class="achievement-list">
            ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
          </ul>
        </div>
      </div>
    </li>
  `).join('');
}

function generateVolunteershipCards() {
  const container = document.querySelector('.volunteership');
  if (!container) return;

  container.innerHTML = volunteerships.map((vol, index) => `
    <li class="card" data-aos="fade-left" data-aos-delay="${index * 100}">
      <div class="card-body">
        <div class="volunteer-header">
          <div class="volunteer-logo">
            <img src="${vol.logo}" alt="${vol.organization}" class="volunteer-img">
          </div>
          <div class="volunteer-info">
            <h5 class="volunteer-title">${vol.title}</h5>
            <h6 class="organization-name">${vol.organization}</h6>
            <span class="volunteer-duration"><i class="fas fa-calendar"></i> ${vol.duration}</span>
          </div>
          <div class="certificate-section">
            <a href="${vol.certificateLink}" target="_blank" class="certificate-btn" title="View Certificate">
              <img src="https://www.google.com/favicon.ico" alt="Google Certificate" class="google-logo">
              <span>Certificate</span>
            </a>
          </div>
        </div>

        <p class="volunteer-description">${vol.description}</p>
      </div>
    </li>
  `).join('');
}

function generateHackathonCards() {
  const container = document.querySelector('.hackathon-section');
  if (!container) return;

  container.innerHTML = hackathons.map((hack, index) => `
    <div class="blog-slider__item swiper-slide">
      <div class="blog-slider__img">
        <img src="${hack.logo}" alt="${hack.title}">
      </div>
      <div class="blog-slider__content">
        <div class="hackathon-header">
          <div class="hackathon-info">
            <h4 class="blog-slider__title">${hack.title}</h4>
            <div class="hackathon-meta">
              <span class="organization">${hack.organization}</span>
              <span class="position-badge">${hack.position}</span>
            </div>
            <span class="hackathon-duration">${hack.duration}</span>
          </div>
          <div class="certificate-section">
            <a href="${hack.certificateLink}" target="_blank" class="certificate-btn" title="View Certificate">
              <img src="https://www.google.com/favicon.ico" alt="Google Certificate" class="google-logo">
              <span>Certificate</span>
            </a>
          </div>
        </div>

        <p class="blog-slider__text">${hack.description}</p>

        <div class="hackathon-technologies">
          <div class="tech-tags">
            ${hack.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
          </div>
        </div>
      </div>
    </div>
  `).join('');
}