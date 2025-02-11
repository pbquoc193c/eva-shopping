"use strict";

const productContainer = document.querySelector(".product-list");
const filterCheckboxes = document.querySelectorAll(".filter-checkbox");
const listProducts = [
  {
    id: 1,
    name: "Product 1",
    price: 100000,
    quantity: 12,
    image: "",
    nature: {
      color: [],
      type: "Shirt",
      gender: "Male",
    },
  },
  {
    id: 2,
    name: "Product 2",
    price: 300000,
    quantity: 12,
    image: "",
    nature: {
      color: [],
      type: "Shirt",
      gender: "Female",
    },
  },
  {
    id: 3,
    name: "Product 3",
    price: 200000,
    quantity: 12,
    image: "",
    nature: {
      color: [],
      type: "Shirt",
      gender: "Male",
    },
  },
  {
    id: 4,
    name: "Product 4",
    price: 400000,
    quantity: 12,
    image: "",
    nature: {
      color: [],
      type: "Shirt",
      gender: "Male",
    },
  },
];

let productFilter = listProducts;

const displayProducts = function (productFilter) {
  productFilter.forEach((item) => {
    const {
      name,
      price,
      nature: { type },
    } = item;
    const product = `
    <div class="product">
                  <a href="#" class="product__link">
                    <img
                      src="./Images/hero_clothes.webp"
                      alt=""
                      class="product__img"
                    />
                  </a>
                  <div class="product-info">
                    <p class="product__name">${name}</p>
                    <p class="product__type">${type}</p>
                    <p class="product__price">$${price}</p>
                  </div>
                  <div class="product-btn">
                    <button class="btn">
                      <i class="fa-regular fa-heart"></i>
                    </button>
                    <button class="btn">
                      <i class="fa-solid fa-cart-shopping"></i>
                    </button>
                    <button class="btn">Buy now</button>
                  </div>
                </div>
    `;
    productContainer.insertAdjacentHTML("beforeend", product);
  });
};
// displayProducts(productFilter);

document.body.addEventListener("click", function () {
  filterCheckboxes.forEach((filter) => {
    if (filter.checked && filter.value == "male") {
      productFilter = listProducts.filter(
        (product) =>
          product.nature.gender.toLowerCase() === filter.value.toLowerCase()
      );
      displayProducts(productFilter);
    } else {
    }
  });
});
