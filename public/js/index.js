// small devices - open navigation

const navBtn = document.querySelector('.header__navBtn');
const nav = document.querySelector('nav');

navBtn.addEventListener('click', () => {
  nav.classList.toggle('menu--open');
});

nav.addEventListener('click', (e) => {
  if (e.target.attributes[0].name === 'href')
    nav.classList.remove('menu--open');
});

// form submit

const form = document.querySelector('form');

form.addEventListener('submit', (e) => e.preventDefault());
