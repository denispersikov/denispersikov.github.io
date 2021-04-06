let content = document.querySelector('.new-arrivals');
let basketMain = document.querySelector('.basket');
let basketContent = document.querySelector('.basket__common');
let headerIndex = document.querySelector('.header__index'); 
let indexCommon = document.querySelector('.header__index-common');
let headerBasket = document.querySelector('.header__icon-block--index');
let basketClose = document.querySelector('.basket__close');
let basketHeading = document.querySelector('.basket__heading-text');

let basket = [];

content.addEventListener('click', addProduct);

function addProduct(event) {
    if (!event.target.classList.contains('new-arrivals__button')) return;
    
    let product = {
        id: +event.target.closest('.new-arrivals__item').querySelector('.new-arrivals__id').innerHTML,
        img: event.target.closest('.new-arrivals__item').querySelector('.new-arrivals__img-main').src,
        title: event.target.closest('.new-arrivals__item').querySelector('.new-arrivals__heading').innerHTML,
        price: event.target.closest('.new-arrivals__item').querySelector('.new-arrivals__price').innerHTML
    }

    basket.push(product);
    render();
}

function render() {
    basketContent.innerHTML = '';
    basket.forEach((item, index) => {
        indexCommon.classList.remove('hidden');
        headerIndex.innerHTML = index+1;
  
        let templBask = templeteBasket(item, index);
        basketRender(templBask);
    });
}
render();

function templeteBasket(item) {
    return `
    <div class="basket__item">
        <span class="basket__id hidden">${item.id}</span>
        <div class="basket__img-title">
            <img class="basket__img-main" src="${item.img}" alt="">
            <p class="basket__title">${item.title}</p>
        </div>
        <div class="basket__price-currency">
            <p class="basket__price">${item.price}</p>
            <span class="basket__currency">гр</span>
        </div>

        <div class="basket__button-quantity">
            <div class="basket__button">
                <button><img class="basket__button-minus" src="img/basket/button-minus.png" alt=""></button>
                <div class="basket__quantity-common">
                    <p class="basket__quantity">1</p>
                </div>
                <button><img class="basket__button-plus" src="img/basket/button-plus.png" alt=""></button>
            </div>
    
            <div class="basket__total-delete">
                <span class="basket__total-common">
                    <p class="basket__total">${item.price}</p>
                    <span class="basket__total-price">гр</span>
                </span>
     
                <button><img class="basket__delete" src="img/basket/delete.png" alt=""></button>
            </div>
        </div>
    </div>
`;
}

function basketRender(templBask) {
    basketContent.insertAdjacentHTML('beforeend', templBask);
}

///Удаления
basketContent.addEventListener('click', remove);
function remove(event) {
    if( !event.target.classList.contains('basket__delete')) return;

    let id = +event.target.closest('.basket__item').querySelector('.basket__id').innerHTML;
    let index = basket.findIndex((item) => item.id === id);

    basket.splice(index, 1);

/// Если удаляется последний товар корзина закрывается
    if(basket.length === 0) {
        basketMain.classList.add('hidden');

// Убирается индекс
        indexCommon.classList.add('hidden');
    }
    render()
}

////////Кнопка плюс
basketContent.addEventListener('click', plus);
function plus(event) {
    if (!event.target.classList.contains('basket__button-plus')) return;

    let quantity = event.target.closest('.basket__item').querySelector('.basket__quantity');
    quantity.innerHTML = +quantity.innerHTML + 1;

    let price = event.target.closest('.basket__item').querySelector('.basket__price');
    let sum = +price.innerHTML * Number(quantity.innerHTML);
    
    let total = event.target.closest('.basket__item').querySelector('.basket__total');
    total.innerHTML = sum;
}


//////////Кнопка минус
basketContent.addEventListener('click', minus);
function minus(event) {
    if (!event.target.classList.contains('basket__button-minus')) return;
    let quantity = event.target.closest('.basket__item').querySelector('.basket__quantity');
    quantity.innerHTML = +quantity.innerHTML - 1;
    if (+quantity.innerHTML === 0) {
        quantity.innerHTML = 1;
    }

    let total = event.target.closest('.basket__item').querySelector('.basket__total');
    let price = event.target.closest('.basket__item').querySelector('.basket__price');
    let sum = +total.innerHTML - Number(price.innerHTML);

    total.innerHTML = sum;

    if (+total.innerHTML === 0) {
        total.innerHTML = price.innerHTML;
    }
}

headerBasket.addEventListener('click', () => {
    basketMain.classList.toggle('hidden');

    if(basket.length === 0) {
        basketHeading.innerHTML = 'Корзина пуста';
    }
    else {
        basketHeading.innerHTML = 'Корзина';
    }
});

basketClose.addEventListener('click', () => {
    basketMain.classList.add('hidden');
});
