export default function initDivLinks() {
  const linkProjetos = document.querySelector('.rs6');
  linkProjetos.addEventListener('click', () => {
    window.location.href = 'https://glamour925.vercel.app/';
  });

  const iPhone = document.querySelector('.iphone');
  iPhone.addEventListener('click', () => {
    window.location.href = 'https://henriquecardosoo.github.io/apple.github.io/';
  });

  const timer = document.querySelector('.timer');
  timer.addEventListener('click', () => {
    window.location.href = 'https://henriquecardosoo.github.io/timer.github.io/';
  });
}
