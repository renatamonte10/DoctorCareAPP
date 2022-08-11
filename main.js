window.addEventListener("scroll", onScroll);
var navigation2 = document.getElementById("navigation");
var backToTopButton2 = document.getElementById("backToTopButton");

onScroll();
function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();

  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(services);
  activateMenuAtCurrentSection(about);
  activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2;

  //verificar se a seção passou da linha
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;

  //se o topo da seção chegou ou passou da linha
  const sectionTopReachOfPassedTargetLine = targetLine >= sectionTop;

  //onde termina a seção
  const sectionEndsAt = sectionTop + sectionHeight;

  //o final da seção passou da linha alvo
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

  //limites da seção
  const sectionBoundaries =
    sectionTopReachOfPassedTargetLine && !sectionEndPassedTargetLine;

  const menuElement = document.querySelector(
    `.menu a[href*=${section.getAttribute("id")}]`
  );

  menuElement.classList.remove("active");
  if (sectionBoundaries) {
    console.log("ESTOU NA SEÇÃO HOME");
    menuElement.classList.add("active");
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation2.classList.add("scroll");
  } else {
    navigation2.classList.remove("scroll");
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton2.classList.add("show");
  } else {
    backToTopButton2.classList.remove("show");
  }
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
