const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__menu");

navToggle.addEventListener("click", () =>{
    navMenu.classList.toggle("nav__menu_visible");
});
