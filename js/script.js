import { observer } from "./components/observer.js";

const section = document.querySelector(".skills");
const projectSection = document.querySelector(".projects");
section.classList.remove("slide-animation");
projectSection.classList.remove("slide-animation");

observer.observe(section);
observer.observe(projectSection);

const navMenu = document.querySelector("#navMenu");
const navItems = document.querySelector("#navbarSupportedContent");

navMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  if (navItems.classList.contains("show")) {
    navItems.classList.toggle("show");
  } else {
    setTimeout(() => {
      navItems.classList.toggle("show");
    }, "1500");
  }
});
