const navButton = document.querySelector(".primary-navigation__button");
const nav = document.querySelector(".primary-navigation");
const logo = document.querySelector(".logo");
const mainElement = document.querySelector("#main");

navButton.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visible");
  if (visibility === "false") {
    nav.setAttribute("data-visible", true);
    navButton.setAttribute("aria-expanded", true);
    logo.classList.add("blur");
    mainElement.classList.add("blur");
  } else {
    nav.setAttribute("data-visible", false);
    navButton.setAttribute("aria-expanded", false);
    logo.classList.remove("blur");
    mainElement.classList.remove("blur");
  }
});
