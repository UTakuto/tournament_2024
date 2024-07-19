const hamburger = document.querySelector(".hamburger");
const menuBtn = document.querySelector(".menuBtn");

menuBtn.addEventListener("click", () => {
    hamburger.classList.toggle("active");
});
