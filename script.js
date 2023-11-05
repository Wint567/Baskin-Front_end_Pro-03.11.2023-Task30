//Создание таблицы
const table = document.createElement("table");
const mainRow = document.createElement('tr');

//Функция для создания заглавных колонок
function createMainColums (textContent) {
  const сolumn = document.createElement('td');
  сolumn.innerHTML = textContent;
  сolumn.style.fontWeight = '800';
  mainRow.appendChild(сolumn);
  table.appendChild(mainRow);
}

//функция renderItems, с помощью которой рендерим элементы
function renderItems(itemsList) {
  for(let item of itemsList) {
    const row = document.createElement('tr');

    row.innerHTML = item.render();
    table.appendChild(row)
  }
}

//Создаём функцию, в которой находится метод map, итерирующий products и возвращающий экземпляр класса и перерисовку renderItems
function createAndRenderElements(products, category) {
  const container = products.map((element) => {
    return new Product(category, element.type, element.price)
  })
  renderItems(container);
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
    const srcImage = `images/${this.category}/${this.type}.svg`;
    return `<tr>
              <td><img src=${srcImage} alt=${this.type} width="50" height="50"></td>
              <td>${this.type}</td>
              <td>${this.price}$</td>
            </tr>`
  }
}



//Вызываем функцию по создания заглавных колонок
createMainColums("Image");
createMainColums("Name");
createMainColums("Price")

//Вызываем функцию, в которой находится метод map, итерирующий products и возвращающий экземпляр класса и перерисовку renderItems
createAndRenderElements(kitchenProducts, "kitchen");
createAndRenderElements(devicesProducts, "devices");
createAndRenderElements(cosmeticsProducts, "cosmetics");

//Добавляем таблицу в body
document.body.appendChild(table)




                   
