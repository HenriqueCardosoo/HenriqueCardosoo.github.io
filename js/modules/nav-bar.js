export default function navBar() {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  const body = document.body;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
    body.classList.toggle('menuOpen');
  });

  function closeMenu() {
    hamburger.classList.remove('active');
    nav.classList.remove('active');
    body.classList.remove('menuOpen');
  }

  const navLinks = document.querySelectorAll('.nav-list a');

  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault;

      closeMenu();
    });
  });
}
