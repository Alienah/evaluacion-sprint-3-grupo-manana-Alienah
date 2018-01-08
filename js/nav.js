var page = document.querySelector('.page');
var menuOpen = document.querySelector('.navigator__open-button');
var menuClose = document.querySelector('.navigator__close-button');
var menuSelector = document.querySelector('.menu');

function openNavigationMenu(){
	page.classList.add('page__menu-visible');
};

function closeNavigationMenu(){
	page.classList.remove('page__menu-visible');
};

menuOpen.addEventListener('click', openNavigationMenu);
menuClose.addEventListener('click', closeNavigationMenu);
menuSelector.addEventListener('click', closeNavigationMenu);