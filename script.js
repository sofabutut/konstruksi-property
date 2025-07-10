// script.js
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

// Toggle mobile menu
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

// Smooth scroll
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      nav.classList.remove("active");
    }
  });
});
