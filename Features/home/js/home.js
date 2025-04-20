import { CookieHandler } from "../../../js/cookie_handler.js";
import { products } from "../../../js/product.js";
import { CurrentUser } from "../../../js/user.js";
import { SliderItem } from "./slider_item.js";

let usernameEle = document.querySelector(".logo span");
console.log(usernameEle);
usernameEle.innerText = `Hi, ${CurrentUser.user.name}`;
let logoutBtn = document.querySelector(".logout-btn");
logoutBtn.addEventListener("click", () => {
  CookieHandler.deleteCookie("user");
  window.location.replace("../../Features/auth/login.html");
});

// slider section
let sliderItemsList = [
  new SliderItem(
    "../../../assets/images/img1.png",
    "title",
    "description",
    "lorem 3"
  ),
  new SliderItem(
    "../../../assets/images/img2.png",
    "title",
    "description",
    "lorem 3"
  ),
  new SliderItem(
    "../../../assets/images/img3.png",
    "title",
    "description",
    "lorem 3"
  ),
  new SliderItem(
    "../../../assets/images/hero1.png",
    "title",
    "description",
    "lorem 3"
  ),
];

let sliderItems = document.querySelectorAll(".slider-item");
let prevSlider = sliderItems[0];
let nextSlider = sliderItems[2];
let activeSlider = sliderItems[1];
let currentIndex = 0;

sliderItems[currentIndex].classList.add("active");

setInterval(() => {
  sliderItems[currentIndex].classList.remove("active");

  currentIndex = (currentIndex + 1) % sliderItemsList.length;

  sliderItems[currentIndex].classList.add("active");
}, 10000);

//-------------products section
let filteredProducts = Array.from(products);
filteredProducts = filteredProducts.filter(
  (product) => product.category.toLowerCase() === "mobiles"
);
let productsContainer = document.querySelector(".product-items-container");

filteredProducts.forEach((product) => {
  createProductItem(product);
});

function createProductItem(product) {
  let productItem = document.createElement("div");
  productItem.classList.add("product-item");
  productItem.innerHTML = `
   <div class="product-img-holder">
   <img src="${product.image}" alt="" />
   </div>
   <div class="product-info">
   <h4 class="product-name">${product.name}</h4>
   <p class="product-desc">${product.description}</p>
   <div class="product-price">
   <span class="product-price">${product.price}</span>
   <button title="add-to-cart-icon"> <i class="bi bi-cart-plus-fill"></i> </button>
   </div>
   </div>
   `;
  productsContainer.appendChild(productItem);
}
