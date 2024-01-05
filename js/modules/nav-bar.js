export default function navBar() {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  const body = document.body;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
    body.classList.toggle('menuOpen');
  });
}
