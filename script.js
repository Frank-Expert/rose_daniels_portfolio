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





//YEAR
document.addEventListener("DOMContentLoaded", () => {
    const year = document.getElementById("year");
    if (year) {
        year.textContent = new Date().getFullYear();
    }
});



// TESTIMONIAL ROTATION

// =====================
// TESTIMONIAL ROTATION (FINAL CLEAN VERSION)
// =====================

const testimonialData = [
    {
        text: "Hiring Rose Daniel as a virtual assistant was my first experience in this space, and she set the bar incredibly high. The finished work was polished, professional, and gave me real confidence in scaling my business.",
        name: "Alicia C.",
        role: "CEO, Your Step Sister LLC",
        img: "testmonies/ceo-magic-touch.jpg"
    },
    {
        text: "Working with Rose was a game-changer. As my online store grew, she handled admin tasks, emails, and order organization so smoothly that I finally had breathing room to focus on growth.",
        name: "Danny Spenza",
        role: "CEO, UrbanFit Clothing",
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

    // fade out + slide
    [tText, tName, tRole, tImg].forEach(el => {
        el.style.opacity = 0;
        el.style.transform = "translateY(10px)";
    });

    setTimeout(() => {
        tText.innerText = current.text;
        tName.innerText = current.name;
        tRole.innerText = current.role;
        tImg.src = current.img;

        // fade in
        [tText, tName, tRole, tImg].forEach(el => {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        });

        testimonialIndex = (testimonialIndex + 1) % testimonialData.length;

    }, 400);
}


setInterval(rotateTestimonial, 5000);