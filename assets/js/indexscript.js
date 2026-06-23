// Welcome message
window.addEventListener("load", () => {
    console.log("Welcome to Learnify!");
});

// Navigation click effect
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        console.log(`Opening ${link.textContent} page...`);
    });
});

// Update copyright year automatically
const footerYear = document.getElementById("year");

if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
}