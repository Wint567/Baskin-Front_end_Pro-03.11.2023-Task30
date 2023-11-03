//Создание таблицы
const table = document.createElement("table");
const mainRow = document.createElement('tr');

//Наиманование заглавных столбцов
const mainColumn = ['Image', "Name", "Category"];

//Проходимся циклом по массиву заглавных столбцов
for(let item of mainColumn) {
    const td = document.createElement('td')
    td.innerHTML = item;
    td.style.fontWeight = '800';
    mainRow.appendChild(td);
  table.appendChild(mainRow);
}

//Создание класса Product
class Product {
  constructor(category, type, price) {
    this.category = category;
    this.type = type;
    this.price = price;
  }

  //Создание метода render() для отрисовки контента 
  render() {
    let srcImage = `images/${this.category}/${this.type}.svg`;
    return `<tr>
              <td><img src=${srcImage} alt=${this.type} width="50" height="50"></td>
              <td>${this.type}</td>
              <td>${this.price}$</td>
            </tr>`
  }
}


//функция renderItems, с помощью которой рендерим элементы
function renderItems(itemsList) {
  for(let item of itemsList) {
    const row = document.createElement('tr');

    row.innerHTML = item.render();
    table.appendChild(row)
  }
}

/*В один общий контейнер-переменную помещаем kitchenProducts, devicesProducts, cosmeticsProducts и в результате получим массивы, 
которые в последствии методом map итерируем */

const kitchenProductsContainer = kitchenProducts.map((item) => {
  return new Product('kitchen', item.type, item.price)
})

const devicesProductsContainer = devicesProducts.map((item) => {
  return new Product('devices', item.type, item.price)
})

const cosmeticsProductsContainer = cosmeticsProducts.map((item) => {
  return new Product('cosmetics', item.type, item.price)
})

//Добавляем таблицу в body
document.body.appendChild(table)

//Вызываем функцию renderItems
renderItems(kitchenProductsContainer)
renderItems(devicesProductsContainer)
renderItems(cosmeticsProductsContainer)



                   
