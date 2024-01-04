export default function initModoEscuro() {
  const body = document.body;
  const label = document.querySelector('.label');
  const icon = document.getElementById('icon');

  label.addEventListener('click', function () {
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
    body.classList.toggle('modo-dark');

    const darkMode = body.classList.contains('modo-dark');
    localStorage.setItem('modoEscuro', darkMode.toString());

    updateIcon();
  });

  window.addEventListener('load', () => {
    updateIcon();
  });

  function updateIcon() {
    const savedMode = localStorage.getItem('modoEscuro');

    if (savedMode === 'true') {
      body.classList.add('modo-dark');
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      body.classList.remove('modo-dark');
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  }
}
