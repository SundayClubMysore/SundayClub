// =======================================
// LOADER
// =======================================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 1200);

});

// =======================================
// NAVBAR
// =======================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

// =======================================
// SCROLL REVEAL
// =======================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(
".story-heading, .story-content, .quote-content, .experience-card, .gallery-header, .item, .film-content, .film-video, .join-content, .contact-left, .contact-right"
).forEach(item => {

    item.classList.add("fade-up");

    observer.observe(item);

});

// =======================================
// ACTIVE MENU
// =======================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.style.color = "white";

        if (link.getAttribute("href") === "#" + current) {

            link.style.color = "#D3B173";

        }

    });

});

// =======================================
// SCROLL PROGRESS BAR
// =======================================

const progress = document.createElement("div");

progress.id = "progressBar";

document.body.appendChild(progress);

progress.style.position = "fixed";
progress.style.left = "0";
progress.style.top = "0";
progress.style.height = "4px";
progress.style.width = "0";
progress.style.background = "#D3B173";
progress.style.zIndex = "999999";

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const percentage = (scrollTop / scrollHeight) * 100;

    progress.style.width = percentage + "%";

});

// =======================================
// SMOOTH BUTTON HOVER
// =======================================

document.querySelectorAll(".primary-btn,.secondary-btn,.join-content a")
.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-5px)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0px)";

});

});