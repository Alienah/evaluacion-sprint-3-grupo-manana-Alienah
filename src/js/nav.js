const body = document.querySelector('body');
const menuOpen = document.querySelector('.navigator__open-button');
const menuClose = document.querySelector('.navigator__close-button');
const menuSelector = document.querySelector('.menu');

function openNavigationMenu(){
  body.classList.add('page__menu-visible');
}

function closeNavigationMenu(){
  body.classList.remove('page__menu-visible');
}

menuOpen.addEventListener('click', openNavigationMenu);
menuClose.addEventListener('click', closeNavigationMenu);
menuSelector.addEventListener('click', closeNavigationMenu);
