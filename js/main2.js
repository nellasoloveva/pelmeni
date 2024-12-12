let prodMass = [
    {
        photo: '<img src="./img/XXL.jfif">',
        name: 'Примакрема',
        cost: 670,
        description: 'Хрустящая основа из тонкого теста увенчана нежным слоем сыра моцарелла, который тает во рту. Сверху выложено пюре из кабачка, приготовленного на пару, которое придает пицце освежающий и сочный вкус. Кабачки нарезаны тонкими ломтиками и обжарены до золотистой корочки, что добавляет пикантную текстуру. Нотки свежести вносят сливки, в которых тушился кабачок. Цедра лимона, натертая на мелкой терке, придает пицце легкий и яркий цитрусовый аромат. Посыпка из сыра пармезан добавляет пикантности и завершает композицию. Каждый кусочек пиццы Примакрема - это идеальное сочетание вкусов и текстур, которые порадуют даже самых требовательных гурманов.',
    },
    {
        photo: '<img src="./img/XXL (1).jfif">',
        name: 'Мортаделла & рикотта',
        cost: 1100,
        description: 'Хрустящая основа пиццы покрыта нежным слоем сыра моцарелла, который плавно переходит в кремовую рикотту. Сверху выложена тонко нарезанная мортаделла, итальянская ветчина с характерным рисунком из сала, которая придает пицце пикантный и мясной вкус. Лимонный сок, выжатый поверх мортаделлы, добавляет пицце легкую кислинку и освежает ее вкус. Рукола, выложенная поверх пиццы, придает ей дополнительную свежесть и хрусткость. Каждый кусочек пиццы Мортаделла и Рикотта - это гармоничное сочетание вкусов и текстур, которое создает незабываемое гастрономическое впечатление.'
    },
    {
        photo: '<img src="./img/XXL (2).jfif">',
        name: 'Меззалуна рикотта & чиполла',
        cost: 690,
        description: 'Тонкая и хрустящая основа пиццы увенчана нежным дуэтом сыров: моцареллы и рикотты. Моцарелла, плавясь, образует тягучие нити, а рикотта добавляет пицце кремовость и сливочный вкус. Сверху выложен обжаренный репчатый лук, который придает пицце сладость и карамелизованный оттенок. Лук нарезан тонкими полукольцами и обжарен до золотистого цвета, что добавляет пикантную текстуру. Посыпка из тертого пармезана завершает композицию, добавляя пицце солоноватый и ореховый вкус. Каждый кусочек пиццы Меззалуна Рикотта & Чиполла - это идеальный баланс вкусов и текстур, который придется по душе любителям классических итальянских блюд.'
    },
    {
        photo: '<img src="./img/XXL (3).jfif">',
        name: 'Ал тонно',
        cost: 690,
        description: 'Тонкое и хрустящее тесто пиццы покрыто ароматным томатным соусом, приготовленным из спелых итальянских помидоров. Сверху выложен консервированный тунец, который придает пицце нежный и слегка солоноватый вкус. Лук, нарезанный тонкими полукольцами, обжарен до золотистого цвета и добавляет пицце сладость и пикантность. Каперсы, рассыпанные по поверхности пиццы, вносят яркие соленые нотки, которые гармонично сочетаются с другими ингредиентами. Пикантным акцентом пиццы Ал Тонно является бальзамический уксус, который придает ей легкую кислинку и глубину вкуса. Сверху пицца полита сицилийским оливковым маслом первого отжима, которое добавляет ей фруктовые и ореховые нотки. Каждый кусочек пиццы Ал Тонно - это идеальный баланс вкусов и ароматов, который перенесет вас на солнечные берега Италии.'
    }
];

let plusBtn = document.getElementById('plus');
let minusBtn = document.getElementById('minus');
let counterNum = document.getElementById('counterNum');
let productList = document.getElementById('productList');
let delivery = document.getElementById('delivery');
let empty = document.getElementById('empty');
let bascket = document.querySelector('.bascket');
let totalDiv = document.getElementById('totalDiv');
let oo = document.getElementById('oo');


function findPizzaCost(pizzaName) {
    for (let i = 0; i < prodMass.length; i++) {
      if (prodMass[i].name === pizzaName) {
        return prodMass[i].cost;
      }
    }
  
    return null;
}

function tPr() {
    let carditems = document.querySelectorAll('.nnn');
    let totalPrice = 0;

    carditems.forEach(function (item) {
        let amountEl = Number(item.querySelector('.bascketPrice').innerText);
        totalPrice = totalPrice + amountEl;
        console.log(totalPrice);
        totalDiv.innerText = 'Итого: ' + totalPrice;
        if (totalPrice > 2000) {
            delivery.innerText = 'Доставка: бесплатно';
        } else {
            delivery.innerText = `Доставка: 350$, добавьте еще на ${2000 - totalPrice} чтобы доставка была бесплатной`;
        }
    })
}

window.addEventListener('click', function(event) {
    if (event.target.id == 'plus') {
        let counterWrapperPlus = event.target.closest('.counter');
        let numWrapperPlus = counterWrapperPlus.querySelector('.start');
        numWrapperPlus.textContent = Number(numWrapperPlus.textContent) + 1;
    }
    else if (event.target.id == 'minus') {
        let counterWrapperMinus = event.target.closest('.counter');
        let numWrapperMinus = counterWrapperMinus.querySelector('.start');
        if (Number(numWrapperMinus.textContent) > 1) {
            numWrapperMinus.textContent = Number(numWrapperMinus.textContent) - 1;
        } else {
            return;
        }
    }
    else if (event.target.id == 'addProductBtn') {
        empty.classList.add('none');
        let card = event.target.closest('.product');
        
        let productInfo = {
            id: card.dataset.id,
            img: card.querySelector('.prImg').getAttribute('src'),
            nam: card.querySelector('.nameProduct').innerText,
            price: card.querySelector('.priceProduct').innerText,
            quantity: card.querySelector('.start').innerText
        }
        
        let itemCard = productList.querySelector(`[data-id="${productInfo.id}"]`);
        if (itemCard) {
            let counterEl = itemCard.querySelector('.bascketStart');
            counterEl.innerText = Number(counterEl.innerText) + Number(productInfo.quantity);
            let counterPr = itemCard.querySelector('.bascketPrice');
            counterPr.innerText = Number(counterPr.innerText) + (productInfo.price * productInfo.quantity);
        } 
        else {
            let cardItem = `
                <li class="nnn" data-id="${productInfo.id}">
                    <div class="bascketImg"><img class="basketProdImg" src="${productInfo.img}"></div>
                        <div class="box1">
                            <div class="bascketName">${productInfo.nam}</div>
                        </div>
                        <div class="box2">
                            <div class="bascketCounter">
                                <button class="bascketPlus" id="bascketPlus">+</button>
                                <div class="bascketStart" id="bascketCounterNum">${productInfo.quantity}</div>
                                <button class="bascketMinus" id="bascketMinus">-</button>
                            </div>
                            <div class="bascketPrice">${productInfo.price * productInfo.quantity}</div>
                        </div>
                </li>
            `;
        productList.innerHTML += cardItem;
        }
    let q = card.querySelector('.start');
    q.innerText = '1';

    let orderText = `
        <div class="order">
                <div class="orderText">Оформить заказ</div>
                <div class="orderInp"><input class="orIn" id="orIn" type="number" placeholder="Введите ваш номер телефона"></div>
                <div class="orderButton"><button id="orBtn" class="orBtn">Заказать</button></div>
            </div>
    `;
    oo.innerHTML = orderText;
    let orIn = document.getElementById('orIn');
    let orBtn = document.getElementById('orBtn');
    orBtn.onclick = function() {
        console.log(orIn.value);
        if(orIn.value) {
            orBtn.style.backgroundColor = 'green';
            orBtn.innerText = 'Спасибо! Ваш заказ успешно отправлен в предпритие';
            orIn.value = '';
        } else {
            alert('Чтобы оформить заказ, введите свой номер телефона');
        }
    }
    }
    else if (event.target.id == 'bascketPlus') {
        let bascketWrapperPlus = event.target.closest('.box2');
        let bascketPlus = bascketWrapperPlus.querySelector('.bascketStart');
        bascketPlus.textContent = Number(bascketPlus.textContent) + 1;
        let bName = event.target.closest('.box2').previousElementSibling;
        let name = bName.querySelector('.bascketName').textContent;
        let pizzaCost = findPizzaCost(name);
        
        let startCost = bascketWrapperPlus.querySelector('.bascketPrice');
        startCost.textContent = Number(startCost.textContent) + pizzaCost;
    }
    else if (event.target.id == 'bascketMinus') {
        let bascketWrapperMinus = event.target.closest('.box2');
        console.log(bascketWrapperMinus);
        let bascketMinus = bascketWrapperMinus.querySelector('.bascketStart');
        if (Number(bascketMinus.textContent) > 1) {
            bascketMinus.textContent = Number(bascketMinus.textContent) - 1;

            let bName = event.target.closest('.box2').previousElementSibling;
            let name = bName.querySelector('.bascketName').textContent;
            let pizzaCost = findPizzaCost(name);
            
            let startCost = bascketWrapperMinus.querySelector('.bascketPrice');
            startCost.textContent = Number(startCost.textContent) - pizzaCost;
        }
        else {
            let a = event.target.closest('.nnn');
            a.remove();
            if (productList.innerText == '') {
                totalDiv.innerText = '';
                oo.innerText = '';
                delivery.innerText = '';
            }
        }
    }
    tPr();
});