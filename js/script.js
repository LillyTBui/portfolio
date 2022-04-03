import { observer } from "./components/observer.js";

const section = document.querySelector(".skills");
const projectSection = document.querySelector(".projects");
section.classList.remove("slide-animation");
projectSection.classList.remove("slide-animation");

observer.observe(section);
observer.observe(projectSection);
