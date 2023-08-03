export default function initModoEscuro() {}

const modoEscuro = document.querySelector('.checkbox');
const body = document.body;

modoEscuro.addEventListener('click', () => {
  body.classList.toggle('modo-dark');
  console.log('modoEscuro');
});
