let closeMenu = document.querySelector('.menu-media__close button');
let headerMenu = document.querySelector('.header__menu-media');
let menuMedia = document.querySelector('.menu-media');
menuMedia.addEventListener('click', getDropdownMenus);

function getDropdownMenus(event) {
    event.preventDefault();

    if( !event.target.classList.contains('menu-media__link')) return;

    let item = event.target.closest('.menu-media__item').querySelector('.menu-media__submenu');
    item.classList.toggle('hidden');

    let polygon = event.target.closest('.menu-media__item').querySelector('.menu-media__polygon');
    polygon.classList.toggle('menu-media__polygon-transform');
}

closeMenu.addEventListener('click', () => {
    menuMedia.classList.toggle('hidden');
});

headerMenu.addEventListener('click', () => {
    menuMedia.classList.toggle('hidden');
});
