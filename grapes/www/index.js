window.onscroll = function () {
    let logo = document.querySelector('.header__logo');

    if (window.pageYOffset < 2) {
        logo.style.background = '#000';
    } else {
        logo.style.background = 'none';
    }
}

window.addEventListener('scroll', parallax);

function parallax() {
    document.querySelectorAll('.grape').forEach((item) => {
        let ItemPos = parseFloat(getComputedStyle(item).top);
        item.style.top = (window.pageYOffset + ItemPos) / 5 + 'px';
    });
}

document.addEventListener('mousemove', maus);

function maus(event) {

    document.querySelectorAll('.grape').forEach((item) => {
        item.style.transform = `translateY(${event.clientY / 5}px)`;
        item.style.transform = `translateY(${getComputedStyle(item).top / 5}px)`;
    });
}


window.addEventListener('scroll', parallaxGlassOne);

function parallaxGlassOne() {
    document.querySelector('.section__three-glass-one').style.top = window.pageYOffset / 7 + 'px';
}


window.addEventListener('scroll', parallaxGlassTwo);

function parallaxGlassTwo() {
    document.querySelector('.section__three-glass-two').style.top = window.pageYOffset / 9 + 'px';
}


let callme = document.querySelector('.header__call-me');
callme.addEventListener('click', callMe);

function callMe() {
    let popUp = document.querySelector('.pop-up');
    popUp.classList.toggle('display-none');
}

let closePopup = document.querySelector('.pop-up__img');
closePopup.addEventListener('click', () => {
    let popUp = document.querySelector('.pop-up');
    popUp.classList.add('display-none');
});


let content = document.querySelector('.content');
let menuCommon = document.querySelector('.menu__common');
let isRenderedBurger = false;

let headerBurger = document.querySelector('.header__burger');
headerBurger.addEventListener('click', () => {

    content.style.position = 'absolute';
    if (isRenderedBurger === true) {
        return;
    }

    isRenderedBurger = true;

    menuCommon.insertAdjacentHTML('beforebegin', burger());

    let menu = document.querySelector('.menu');
    let close = document.querySelector('.menu__img');
    close.addEventListener('click', () => {
        menu.classList.add('display-none');

    });

    function burger() {
        return `
            <div class="menu">
            <div class="menu__img">
                <img src="../../www/img/Vector.png" alt="">
            </div>

            <div class="menu__logo">
                <a class="menu__main-link" href="#"><span>W</span>inehis.</a>
            </div>

            <ul class="menu__link-common">
                <li><a href="#">About us</a></li>
                <li><a href="#">History</a></li>
                <li><a href="#">Region & Wine</a></li>
                <li><a href="#">Our products</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Contacts</a></li>
            </ul>

            <div class="menu__social">
                <ul>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Youtube</a></li>
                </ul>
            </div>
        </div>
        `;
    }
});

headerBurger.addEventListener('click', () => {
    let menu = document.querySelector('.menu');

    if (menu.classList.contains('display-none')) {
        menu.classList.remove('display-none')
    }
});