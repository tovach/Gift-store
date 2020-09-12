const siteNav = document.querySelector(".site-nav");
const siteNavList = document.querySelector(".site-nav__list");
const burger = document.querySelector(".nav-bar__burger");

burger.addEventListener("click", () => {
  siteNav.classList.toggle("site-nav--active");
  siteNavList.classList.toggle("site-nav__list--active");
  burger.classList.toggle("nav-bar__burger--active");
});
