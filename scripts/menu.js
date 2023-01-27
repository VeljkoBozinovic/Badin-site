let elWrapper = document.querySelector(".wrapper ");
let elMenu = document.querySelector(".menu");
let elNav = document.querySelector(".nav-closed");
let elClose = document.querySelector("#close-menu");

elMenu.onmouseover = function () {
  elWrapper.classList.add("menu-hovered");
};

elMenu.onmouseout = function () {
  elWrapper.classList.remove("menu-hovered");
};

elMenu.addEventListener("click", () => {
  elWrapper.classList.add("wrapperOpened");
  elNav.classList.add("nav");
  elNav.classList.remove("nav-closed");
  document.documentElement.style.setProperty("overflow", "unset");
  document.body.style.setProperty("overflow", "hidden");
});

elClose.addEventListener("click", () => {
  elWrapper.classList.remove("wrapperOpened");
  elNav.classList.remove("nav");
  elNav.classList.add("nav-closed");
  document.documentElement.style.setProperty("overflow-x", "hidden");
  document.body.style.setProperty("overflow-x", "hidden");
});

const elHeader = document.querySelector("#header");
const elExpertise = document.querySelector("#expertise");

addEventListener("DOMContentLoaded", () => {
  const observerMenu = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        elMenu.classList.toggle("changeColor", entry.isIntersecting);
      });
    },
    { rootMargin: "-50%" }
  );

  observerMenu.observe(elExpertise);
  observerMenu.observe(elHeader);
});
