let prodMass = [
    {
        name: 'Примакрема',
        cost: 670,
        description: 'Хрустящая основа из тонкого теста увенчана нежным слоем сыра моцарелла, который тает во рту. Сверху выложено пюре из кабачка, приготовленного на пару, которое придает пицце освежающий и сочный вкус. Кабачки нарезаны тонкими ломтиками и обжарены до золотистой корочки, что добавляет пикантную текстуру. Нотки свежести вносят сливки, в которых тушился кабачок. Цедра лимона, натертая на мелкой терке, придает пицце легкий и яркий цитрусовый аромат. Посыпка из сыра пармезан добавляет пикантности и завершает композицию. Каждый кусочек пиццы Примакрема - это идеальное сочетание вкусов и текстур, которые порадуют даже самых требовательных гурманов.',
    },
    {
        name: 'Мортаделла & рикотта',
        cost: 1100,
        description: 'Хрустящая основа пиццы покрыта нежным слоем сыра моцарелла, который плавно переходит в кремовую рикотту. Сверху выложена тонко нарезанная мортаделла, итальянская ветчина с характерным рисунком из сала, которая придает пицце пикантный и мясной вкус. Лимонный сок, выжатый поверх мортаделлы, добавляет пицце легкую кислинку и освежает ее вкус. Рукола, выложенная поверх пиццы, придает ей дополнительную свежесть и хрусткость. Каждый кусочек пиццы Мортаделла и Рикотта - это гармоничное сочетание вкусов и текстур, которое создает незабываемое гастрономическое впечатление.'
    },
    {
        name: 'Меззалуна рикотта & чиполла',
        cost: 690,
        description: 'Тонкая и хрустящая основа пиццы увенчана нежным дуэтом сыров: моцареллы и рикотты. Моцарелла, плавясь, образует тягучие нити, а рикотта добавляет пицце кремовость и сливочный вкус. Сверху выложен обжаренный репчатый лук, который придает пицце сладость и карамелизованный оттенок. Лук нарезан тонкими полукольцами и обжарен до золотистого цвета, что добавляет пикантную текстуру. Посыпка из тертого пармезана завершает композицию, добавляя пицце солоноватый и ореховый вкус. Каждый кусочек пиццы Меззалуна Рикотта & Чиполла - это идеальный баланс вкусов и текстур, который придется по душе любителям классических итальянских блюд.'
    },
    {
        name: 'Ал тонно',
        cost: 690,
        description: 'Тонкое и хрустящее тесто пиццы покрыто ароматным томатным соусом, приготовленным из спелых итальянских помидоров. Сверху выложен консервированный тунец, который придает пицце нежный и слегка солоноватый вкус. Лук, нарезанный тонкими полукольцами, обжарен до золотистого цвета и добавляет пицце сладость и пикантность. Каперсы, рассыпанные по поверхности пиццы, вносят яркие соленые нотки, которые гармонично сочетаются с другими ингредиентами. Пикантным акцентом пиццы Ал Тонно является бальзамический уксус, который придает ей легкую кислинку и глубину вкуса. Сверху пицца полита сицилийским оливковым маслом первого отжима, которое добавляет ей фруктовые и ореховые нотки. Каждый кусочек пиццы Ал Тонно - это идеальный баланс вкусов и ароматов, который перенесет вас на солнечные берега Италии.'
    }
];

function findPizzaCost(pizzaName) {
    for (let i = 0; i < prodMass.length; i++) {
      if (prodMass[i].name === pizzaName) {
        return prodMass[i].cost;
      }
    }
  
    return null;
}

let plusBtn = document.getElementById('plus');
let minusBtn = document.getElementById('minus');
let counterNum = document.getElementById('counterNum');
let productList = document.getElementById('productList');
let bascketPlus = document.getElementById('bascketPlus');
let bascketMinus = document.getElementById('bascketMinus');
let bascketMass = [];
let delivery = document.getElementById('delivery');
let sumOrder;

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
        let findProduct = event.target.closest('.product');
        let findImg = findProduct.querySelector('.prImg');
        let imgSrc = findImg.getAttribute('src');
        let findName = findProduct.querySelector('.nameProduct');
        let findCost = findProduct.querySelector('.priceProduct');
        let findNum = findProduct.querySelector('.start');
        
        
        if (!bascketMass.includes(findName.textContent)) {
            let listTemplate = `
            <li id="a">
                <div class="bascketImg"><img class="basketProdImg" src="%src%"></div>
                    <div class="box1">
                        <div class="bascketName">%name%</div>
                    </div>
                    <div class="box2">
                        <div class="bascketCounter">
                            <button class="bascketPlus" id="bascketPlus">+</button>
                            <div class="bascketStart" id="bascketCounterNum">%num%</div>
                            <button class="bascketMinus" id="bascketMinus">-</button>
                        </div>
                        <div class="bascketPrice">%price%</div>
                    </div>
            </li>
            `;
            let listText = listTemplate
                                        .replace('%src%', imgSrc)
                                        .replace('%name%', findName.textContent)
                                        .replace('%num%', findNum.textContent)
                                        .replace('%price%', Number(findCost.textContent) * Number(findNum.textContent));
            productList.innerHTML += listText;
            bascketMass.push(findName.textContent);
        } else {
                        let bascketCounterNum = document.getElementById('bascketCounterNum');

            bascketCounterNum.innerHTML = Number(bascketCounterNum.textContent) + Number(findNum.textContent);
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
                let a = document.getElementById('a');
                a.remove();
            }
    }
});


