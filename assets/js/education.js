AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Data Science Code With Harry",
    cardImage: "assets/images/education-page/code.png",
    moocLink: "https://www.codewithharry.com/courses/the-ultimate-job-ready-data-science-course",
  },
  {
    title: "Python - Code With Harry",
    cardImage: "assets/images/education-page/python.png",
    moocLink: "https://www.codewithharry.com/courses/complete-python-bootcamp-learn-python-from-scratch",
  },
  {
    title: "Machine Learning",
    cardImage: "assets/images/education-page/1M.avif",
    moocLink: "https://www.codewithharry.com/courses/the-ultimate-job-ready-data-science-course",
  },
  {
    title: "Introduction to HTML 5",
    cardImage: "assets/images/education-page/WEB.jpeg",
    moocLink: "https://www.udacity.com/course/intro-to-html-and-css--ud001",
  },
  {
    title: "Introduction to CSS 3",
    cardImage: "assets/images/education-page/WEB.jpeg",
    moocLink: "https://www.udacity.com/course/intro-to-html-and-css--ud001",
  },
  {
    title: "Javascript",
    cardImage: "assets/images/education-page/WEB.jpeg",
    moocLink:"https://www.youtube.com/@ApnaCollegeOfficial",
  },
  {
    title: "Bootstrap 4 - Apna College",
    cardImage: "assets/images/education-page/BOOT.jpeg",
    moocLink: "https://www.youtube.com/@ApnaCollegeOfficial",
  },
  {
    title: "Intro to React",
    cardImage: "assets/images/education-page/hq720.jpg",
    moocLink: "https://www.youtube.com/watch?v=RGKi6LSPDLU&t=4008s",
  },
  {
    title: "NodeJS, Express and MongoDB- Hitesh Choudhary",
    cardImage: "assets/images/education-page/mon.jpeg",
    moocLink: "",
  },
  {
    title: "Replit Ai",
    cardImage: "assets/images/education-page/REP12.jpeg",
    moocLink: "https://www.youtube.com/watch?v=63baP9l21F0&t=349s",
  },
  {
    title: "Data Structures & Algorithms Apna College",
    cardImage: "assets/images/education-page/dsa.jpeg",
    moocLink:
      "https://www.udacity.com/course/data-structures-and-algorithms-nanodegree--nd256",
  },
  {
    title: "Data Structures & Algorithms Apna College",
    cardImage: "assets/images/education-page/dsa.jpeg",
    moocLink:
      "https://www.udacity.com/course/data-structures-and-algorithms-nanodegree--nd256",
  },
];

const experience = [
  {
    img: "assets/images/education-page/c1.png",
  },
  {
    img: "assets/images/education-page/c1.png",
  },
  {
    img: "assets/images/education-page/c1.png",
  },
  {
    img: "assets/images/education-page/c1.png",
  },
  {
    img: "assets/images/education-page/c1.png",
  },
];

let currentItem = 0;

const img = document.getElementById("image");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("DOMContentLoaded", function () {
  showExperience();
});

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
    const item = experience[currentItem];
    img.src = item.img;
    currentItem++;
  }, 3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Google Developer Essentials",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "VM Migration",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "G Suite Essentials",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
      (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

/* Timeline Section*/

$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
});
