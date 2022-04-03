export const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.isIntersecting);
      entry.target.classList.add("slide-animation");
      observer.unobserve(entry.target);
      return;
    }
  });
});
