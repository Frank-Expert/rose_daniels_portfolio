// SCROLL REVEAL (REAL UX UPGRADE)

const nav = document.querySelector(".navbar nav");
const hamburger = document.querySelector(".hamburger");

// toggle menu
hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    nav.classList.toggle("nav-open");
});

// close on outside click
document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
        nav.classList.remove("nav-open");
    }
});

// close when clicking nav links
document.querySelectorAll(".navbar nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("nav-open");
    });
});



//
const sections = document.querySelectorAll("section:not(.hero)");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

// 🔥 FORCE FIRST VIEW (important fix)


// HERO PARALLAX
const heroBg = document.querySelector(".hero-bg");

window.addEventListener("mousemove", (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    heroBg.style.transform = `translate(${x * 40}px, ${y * 40}px)`;
});







// TESTIMONIAL ROTATION

// =====================
// TESTIMONIAL ROTATION (FINAL CLEAN VERSION)
// =====================

const testimonialData = [
    {
        text: "Rose exceeded expectations with polished and professional work.",
        name: "Alicia Cook",
        role: "CEO, Your Step Sister LLC",
        img: "testmonies/ceo-magic-touch.jpg"
    },
    {
        text: "She reduced my workload and improved my workflow significantly. Highly reliable VA.",
        name: "Peter Ndegwa",
        role: "CEO, Safaricom PLC",
        img: "testmonies/ceo-peter-ndegwa.jpg"
    },
    {
        text: "Fast, detail-oriented, and very easy to work with. Delivered beyond expectations.",
        name: "Colt Arden",
        role: "Operations Manager",
        img: "testmonies/happy-ceo-at-desk.webp"
    }
];

let testimonialIndex = 0;

const tText = document.getElementById("testimonial-text");
const tName = document.getElementById("testimonial-name");
const tRole = document.getElementById("testimonial-role");
const tImg  = document.getElementById("testimonial-img");

function rotateTestimonial() {

    const current = testimonialData[testimonialIndex];

    if (!tText || !tName || !tRole || !tImg) return;

    tText.style.opacity = 0;
    tName.style.opacity = 0;
    tRole.style.opacity = 0;
    tImg.style.opacity = 0;

    setTimeout(() => {

        tText.innerText = current.text;
        tName.innerText = current.name;
        tRole.innerText = current.role;
        tImg.src = current.img;

        tText.style.opacity = 1;
        tName.style.opacity = 1;
        tRole.style.opacity = 1;
        tImg.style.opacity = 1;

        testimonialIndex = (testimonialIndex + 1) % testimonialData.length;

    }, 400);
}

setInterval(rotateTestimonial, 5000);