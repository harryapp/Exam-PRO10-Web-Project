import ProductDataModule from "./modules/ProductDataModule.js";

const productSection = document.querySelector("#product-section");

const allBtn = document.querySelector("#all-btn");
const pizzaBtn = document.querySelector("#pizza-btn");
const drinksBtn = document.querySelector("#drinks-btn");
const sidesBtn = document.querySelector("#sides-btn");
const dessertBtn = document.querySelector("#dessert-btn");

let productTxt = "";
let productData = ProductDataModule.getAllProducts();

const getAll = () => {
  let productArray = [];
  productData.forEach((product) => {
    productArray.push(product);
  });
  printProducts(productArray);
};

const getType = (type) => {
  let productArray = [];
  productData
    .filter(product => product.type.includes(type))
    .forEach(product => productArray.push(product));
      
    printProducts(productArray);
};

const printProducts = (array) => {
  productTxt = "";
  array.forEach(product => {
  productTxt += `
        <article class="column is-3 container">
            <section class="card-content">
                <div class="card has-text-centered">
                  <div class="edit-menu">
                    <i class="fas fa-chevron-circle-down"></i>
                      <div class="edit-menu-content">
                        <a  onclick="alert('Product Edited')">Edit</a>
                        <a onclick="alert('Product Deleted')">Delete</a>
                      </div>
                  </div>
                        <h2>${product.name}</h2>    
                        <p class="description"> ${product.description}</p>
                        <p><b>Sales Price:</b> ${product.salesPrice}kr</p>
                        <p><b>Cost Price:</b> ${product.costPrice}kr</p>
                        <p><b>Margin:</b> ${
                          product.salesPrice - product.costPrice
                        }kr</p>
                </div>
            </section>
        </article>
    `;
    productSection.innerHTML = productTxt;
  });
};

allBtn.onclick = getAll;
pizzaBtn.onclick = () => getType("Pizza");
drinksBtn.onclick = () => getType("Drink");
sidesBtn.onclick = () => getType("Sides");
dessertBtn.onclick = () => getType("Dessert");
getAll();
