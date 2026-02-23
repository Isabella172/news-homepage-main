const menuBtn = document.querySelector(".menu-icon");
const closeBtn = document.querySelector(".close-icon");
const mobileNav = document.querySelector(".mobile-nav");
const overlay = document.querySelector(".overlay");

menuBtn.addEventListener("click", () => {
  mobileNav.classList.add("active");
  overlay.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  mobileNav.classList.remove("active");
  overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
  mobileNav.classList.remove("active");
  overlay.classList.remove("active");
});