function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();
}

function showNavOnScroll() {
  if (scrollY == 0) navigation.classList.remove("scroll");
  else navigation.classList.add("scroll");
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 400) backToTopButton.classList.add("show");
  else backToTopButton.classList.remove("show");
}

function openMenu() {
  document.body.classList.add("menu-expanded");
}
function closeMenu() {
  document.body.classList.remove("menu-expanded");
}

ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 500,
}).reveal(
  "#home, #home img, #home .stats, #services, #services header, #services .card, #about, #about header, #about .content"
);
