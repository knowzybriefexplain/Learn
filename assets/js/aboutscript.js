// Welcome message in browser console
console.log("Welcome to Learnify About Us Page!");

// Highlight section when clicked
const sections = document.querySelectorAll("section");

sections.forEach(section => {
    section.addEventListener("click", () => {
        section.style.border = "2px solid #2563eb";

        setTimeout(() => {
            section.style.border = "none";
        }, 1000);
    });
});

// Display current year automatically
const footer = document.querySelector("footer p:last-child");

if (footer) {
    footer.innerHTML =
        `&copy; ${new Date().getFullYear()} Learnify. All Rights Reserved.`;
}

// Create Back to Top button
// const btn = document.createElement("button");

// btn.textContent = "↑ Top";
// btn.style.position = "fixed";
// btn.style.bottom = "20px";
// btn.style.right = "20px";
// btn.style.padding = "10px";
// btn.style.cursor = "pointer";

// document.body.appendChild(btn);

// btn.addEventListener("click", () => {
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     });
// });

const btn = document.createElement("button");

btn.textContent = "↑";
btn.classList.add("back-to-top");

document.body.appendChild(btn);

btn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});