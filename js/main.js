const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('nav__links--open');
  hamburger.classList.toggle('nav__hamburger--open');
});

document.querySelectorAll('.nav__links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('nav__links--open');
    hamburger.classList.remove('nav__hamburger--open');
  });
});
