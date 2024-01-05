export default function navBar() {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  const bodyMenu = document.querySelector('body');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
    bodyMenu.classList.toggle('menuOpen');
  });
}
