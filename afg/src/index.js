let menu = document.querySelector('.menu-meida__block');

let burger = document.querySelector('.menu-media__burger');
burger.addEventListener('click', () => {

    menu.insertAdjacentHTML('beforeend', getMenu());

    if(menu.classList.contains('display-block')) {
        menu.classList.remove('display-block');
    }
    else {
        menu.classList.add('display-block');
    }

});

  function getMenu() {
    return `
        <nav class="menu-meida">
            <ul class="menu-meida__list">
                <li class="menu__item"><a href="#">Главная</a></li>
                <li><a href="#">О компании</a></li>
                <li><a href="#">Оценка</a></li>
                <li><a href="#">Сделки M&A </a></li>
                <li class="menu__item-two"><a href="#">Бухгалтерские услуги</a></li>
                <li><a href="#">Контакты</a></li>
            </ul>
        </nav>
    `;  
}










