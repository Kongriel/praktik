document.addEventListener("DOMContentLoaded", function () {
  const heartsContainers = document.querySelectorAll(".hjerter");

  const observerOptions = {
    rootMargin: "0px",
    threshold: 0.6,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const hearts = entry.target.querySelectorAll("i.bxs-heart, i.bx-heart");
        hearts.forEach((heart, index) => {
          setTimeout(() => {
            heart.classList.add("active");
          }, index * 250);
        });
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  heartsContainers.forEach((container) => {
    observer.observe(container);
  });
});

const root = document.documentElement;
const btn = document.querySelector(".btn1");

let currentTheme = localStorage.getItem("theme");

// Check if the stored theme is not one of the defined themes, set it to default
if (!["dark"].includes(currentTheme)) {
  currentTheme = "default";
}

function applyTheme() {
  root.dataset.theme = currentTheme;
  localStorage.setItem("theme", currentTheme);
}

function toggleTheme() {
  if (currentTheme === "dark") {
    currentTheme = "default";
  } else {
    currentTheme = "dark";
  }

  applyTheme();
}

// Add event listener to the button to toggle themes
btn.addEventListener("click", toggleTheme);

applyTheme();

btn.addEventListener("click", toggleTheme);

/* burgermenu */
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
/* burgermenu */

let scrollListener = null;

function handleScroll() {
  const scrollPosition = window.scrollY;
  const firstHeroTitlePart = document.querySelector(".home-content");
  const secondHeroTitlePart = document.querySelector(".home-img");

  firstHeroTitlePart.classList.toggle("move-left", scrollPosition > 100);
  secondHeroTitlePart.classList.toggle("move-right", scrollPosition > 100);
}

function attachScrollListener() {
  scrollListener = window.addEventListener("scroll", handleScroll);
}

function detachScrollListener() {
  if (scrollListener !== null) {
    window.removeEventListener("scroll", handleScroll);
    scrollListener = null;
  }
}

function handleResize() {
  if (window.innerWidth <= 1200) {
    detachScrollListener();
  } else {
    attachScrollListener();
  }
}

// Initial setup
handleResize();

// Listen for window resize events
window.addEventListener("resize", handleResize);

/* scrollable */
document.addEventListener("DOMContentLoaded", function () {
  let sections = document.querySelectorAll("section");
  let navlinks = document.querySelectorAll("header nav a");

  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navlinks.forEach((link) => {
          link.classList.remove("active");
        });
        document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
      }
    });

    /* navbar */
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);

    /* fjern burgermenu */
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  };
});

function adjustVolume(volume) {
  var iframe = document.getElementById("videoFrame");
  var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
  var video = innerDoc.querySelector("video");
  if (video) {
    video.volume = volume; // Set volume (0.0 to 1.0)
  }
}

// Call the adjustVolume function with desired volume level
adjustVolume(0.1);

/* scrollreveal */

ScrollReveal({
  ///reset: true,
  distance: "130px",
  durationn: 2000,
  delay: 250,
});

ScrollReveal().reveal(".home-content1, .heading", { origin: "top" });
ScrollReveal().reveal(".contact, .home-content h1, .btn, .timeline-icon", { origin: "bottom" });
ScrollReveal().reveal(" .about-img, .container1 ", { origin: "left" });
ScrollReveal().reveal(".videocontainer", { origin: "right" });

/* skiftende tekst */
const typed = new Typed(".skift-tekst", {
  strings: ["a student", "majoring in Frontend", "seeking an internship!"],
  typeSpeed: 100,
  backSpeed: 75,
  backDelay: 1000,
  loop: true,
});
