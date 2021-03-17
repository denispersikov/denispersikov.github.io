let menumediatablet = document.querySelector('.menu__media-tablet');
menumediatablet.addEventListener('click', menu);

function menu() {
    let tabletblock = document.querySelector('.menu__media-tablet-block');
    tabletblock.classList.toggle('hidden');
}
