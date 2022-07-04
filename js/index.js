import { observer } from "./components/observer.js";

const section = document.querySelector(".skills");
const projectSection = document.querySelector(".projects");
section.classList.remove("slide-animation");
projectSection.classList.remove("slide-animation");

observer.observe(section);
observer.observe(projectSection);

/* remove loader after animation is done */
const loader = document.querySelector(".loading-logo");
const lastLetter = document.getElementById("B");
const header = document.querySelector("header");
const main = document.querySelectorAll("main > :not(.loading-logo");

header.classList.add("hideElement");
main.forEach((element) => {
  element.classList.add("hideElement");
});

lastLetter.addEventListener("animationend", function () {
  loader.style.opacity = "0";
  loader.style.transition = "opacity 0.8s ease-out";
  setTimeout(function () {
    loader.style.display = "none";
  }, 1000);

  header.classList.remove("hideElement");
  main.forEach((element) => {
    element.classList.remove("hideElement");
  });
});
