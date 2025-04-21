import { CookieHandler } from "../../../js/cookie_handler.js";
import { FilterHelper } from "../../../js/filter_helper.js";
import { products, categories, brands } from "../../../js/product.js";
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

let productsContainer = document.querySelector(".product-items-container");
let displayedProducts = Array.from(products);
products.forEach((product) => {
  createProductItem(product);
});

function createProductItem(product) {
  let productItem = document.createElement("div");
  productItem.classList.add("product-item");
  productItem.innerHTML = `
   <div class="product-img-holder">
   <img src="../../../assets/images/products/${product.category}/ ${product.image}" alt="" />
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
  productItem.addEventListener("click", () => {
    localStorage.setItem("product", JSON.stringify(product));
    window.location.assign("../../Features/P-Info/product_info.html");
  });
  productsContainer.appendChild(productItem);
}
//search bar

let searchInput = document.querySelector(".search-bar input");
searchInput.addEventListener("input", () => {
  productsContainer.innerHTML = "";
  let searchProducts = FilterHelper.filterBySearch(
    displayedProducts,
    searchInput.value
  );
  searchProducts.forEach((product) => {
    createProductItem(product);
  });
});

//filter section
//----------------------------------------
let filterIcon = document.querySelector(".filter-icon");
let filterSection = document.querySelector(".filter-section");

filterIcon.addEventListener("click", () => {
  filterSection.classList.toggle("active-filter");
});

let closeFilterIcon = document.querySelector(".filter-header button");
closeFilterIcon.addEventListener("click", () => {
  filterSection.classList.remove("active-filter");
});

let brandSection = document.querySelector(".brand-container");
brands.forEach((brand) => {
  let brandItem = document.createElement("div");
  brandItem.classList.add("brand-item");
  brandItem.innerHTML = `
  <label for="${brand}">${brand}</label>
  <input type="checkbox" id="${brand}" />
  `;
  brandSection.appendChild(brandItem);
});

let brandInputs = document.querySelectorAll(".brand-container input");
let checkedBrands = [];

brandInputs.forEach((input) => {
  input.addEventListener("change", () => {
    if (input.checked) {
      checkedBrands.push(input.id);
    } else {
      checkedBrands = checkedBrands.filter((brand) => brand !== input.id);
    }
    productsContainer.innerHTML = "";
    let brandedProducts = FilterHelper.filterByBrand(
      displayedProducts,
      checkedBrands
    );
    brandedProducts.forEach((product) => {
      createProductItem(product);
    });
  });
});

//----------------------------------------------------------------
// category section

let categoryBtns = document.querySelectorAll(".category-item-container li");

categoryBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    btn.classList.add("active-category");
    productsContainer.innerHTML = "";
    displayedProducts = FilterHelper.filterByCategory(
      products,
      categories[index]
    );
    displayedProducts.forEach((product) => {
      createProductItem(product);
    });
    categoryBtns.forEach((btn2) => {
      if (btn2 !== btn) {
        btn2.classList.remove("active-category");
      }
    });
  });
});

// price section
// -----------------------------------

let priceRanges = document.querySelectorAll(".price-range input");
let minPrice = document.querySelector(".price-value.min");
let maxPrice = document.querySelector(".price-value.max");
priceRanges.forEach((range, index) => {
  range.addEventListener("input", () => {
    index === 0
      ? (minPrice.innerText = `$${range.value}`)
      : (maxPrice.innerText = `$${range.value}`);
  });
  range.addEventListener("change", () => {
    productsContainer.innerHTML = "";
    displayedProducts = FilterHelper.filterByPrice(
      products,
      priceRanges[0].value,
      priceRanges[1].value
    );
    displayedProducts.forEach((product) => {
      createProductItem(product);
    });
  });
});
