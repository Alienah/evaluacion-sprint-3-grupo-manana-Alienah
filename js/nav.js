var page = document.querySelector('.page');
var body = document.querySelector('body');
var menuOpen = document.querySelector('.navigator__open-button');
var menuClose = document.querySelector('.navigator__close-button');
var menuSelector = document.querySelector('.menu');

function openNavigationMenu(){
	body.classList.add('page__menu-visible');
};

function closeNavigationMenu(){
	body.classList.remove('page__menu-visible');
};

menuOpen.addEventListener('click', openNavigationMenu);
menuClose.addEventListener('click', closeNavigationMenu);
menuSelector.addEventListener('click', closeNavigationMenu);
