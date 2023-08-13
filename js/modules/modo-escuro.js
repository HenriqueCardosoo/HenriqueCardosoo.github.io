export default function initModoEscuro() {}

const modoEscuro = document.querySelector('.checkbox');
const body = document.body;

modoEscuro.addEventListener('click', () => {
  body.classList.toggle('modo-dark');
  console.log('modoEscuro');

  const darkMode = body.classList.contains('modo-dark');
  localStorage.setItem('modoEscuro', darkMode.toString());
});

window.addEventListener('load', () => {
  const salvarModo = localStorage.getItem('modoEscuro');
  if (salvarModo === 'true') {
    body.classList.add('modo-dark');
  }
});
