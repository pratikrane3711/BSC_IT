// Simple animations & interactions

// Animate input placeholder on focus
const searchInput = document.querySelector("main input");

searchInput.addEventListener("focus", () => {
    searchInput.setAttribute("placeholder", "Type your favorite food...");
});

searchInput.addEventListener("blur", () => {
    searchInput.setAttribute("placeholder", "Search for a restaurant or a dish");
});

// Smooth header reveal on scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.backgroundColor = "#b3202f"; // darker red on scroll
    } else {
        header.style.backgroundColor = "#e23744";
    }
});

// Simple entrance animation for text
window.addEventListener("DOMContentLoaded", () => {
    const text = document.querySelector("main p");
    text.style.opacity = 0;
    text.style.transform = "translateY(20px)";
    
    setTimeout(() => {
        text.style.transition = "all 1s ease";
        text.style.opacity = 1;
        text.style.transform = "translateY(0)";
    }, 300);
});

