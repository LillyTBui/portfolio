import { observer } from "./components/observer.js";

const projectSection = document.querySelector(".projects");
projectSection.classList.remove("slide-animation");
observer.observe(projectSection);
