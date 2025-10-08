
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      link.classList.add("active");
      setTimeout(() => link.classList.remove("active"), 2000);
    });
  });
});
