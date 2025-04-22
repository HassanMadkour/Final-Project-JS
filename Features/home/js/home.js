import { FilterHelper } from "../../../js/filter_helper.js";
import { products, categories, brands } from "../../../js/product.js";
import { SliderItem } from "./slider_item.js";
import { TheCart } from "../../../js/cart.js";
import { OrderItem } from "../../../js/order_item.js";

// slider section
let sliderItemsList = [
  new SliderItem(
    "../../../assets/images/img1.png",
    "Discover the New Collection",
    "Browse a curated selection of this season's best fashion essentials.Also check out our latest arrivals. Discover the latest fashion trends and shop now.",
    "Step into style with our latest arrivals."
  ),
  new SliderItem(
    "../../../assets/images/img2.png",
    "Upgrade Your Workspace",
    "Find everything you need to boost productivity and comfort.",
    "Modern desks, chairs, and accessories."
  ),
  new SliderItem(
    "../../../assets/images/img3.png",
    "Smart Gadgets for Smart Living",
    "Explore smartwatches, wireless chargers, and more innovative gear.",

    "Stay ahead with our cutting-edge tech."
  ),
  new SliderItem(
    "../../../assets/images/hero1.png",
    "Fresh Deals Every Day",
    "Shop our daily deals and enjoy exclusive discounts on top products.",
    "Save big on your favorite items."
  ),
];

const slidesContainer = document.querySelector(".slides");
const totalRealSlides = sliderItemsList.length;
let index = 1;
let isTransitioning = false;

// Helper function to create a slide DOM
function createSlide(item) {
  const sliderItem = document.createElement("div");
  sliderItem.classList.add("slider-item");
  sliderItem.style.backgroundImage = `url(${item.img})`;
  sliderItem.innerHTML = `
    <div class="slider-content">
      <h2>${item.title}</h2>
      <p>${item.desc}</p>
      <br />
      <p>${item.paragraph}</p>
      <a href="#products">Shop Now</a>
    </div>
  `;
  return sliderItem;
}

// Clone last slide and add at beginning
slidesContainer.appendChild(createSlide(sliderItemsList[totalRealSlides - 1]));

// Add real slides
sliderItemsList.forEach((item) => {
  slidesContainer.appendChild(createSlide(item));
});

// Clone first slide and add at end
slidesContainer.appendChild(createSlide(sliderItemsList[0]));

// Set initial position
slidesContainer.style.transform = `translateX(-${index * 100}%)`;

function updateSlidePosition() {
  slidesContainer.style.transition = "transform 0.5s ease-in-out";
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  if (isTransitioning) return;
  index++;
  updateSlidePosition();
  isTransitioning = true;
}

function prevSlide() {
  if (isTransitioning) return;
  index--;
  updateSlidePosition();
  isTransitioning = true;
}
let nextSlideBtn = document.querySelector(".next-slide");
let prevSlideBtn = document.querySelector(".prev-slide");

nextSlideBtn.addEventListener("click", nextSlide);
prevSlideBtn.addEventListener("click", prevSlide);

slidesContainer.addEventListener("transitionend", () => {
  isTransitioning = false;
  if (index === 0) {
    // Jump to last real slide
    slidesContainer.style.transition = "none";
    index = totalRealSlides;
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
  } else if (index === totalRealSlides + 1) {
    // Jump to first real slide
    slidesContainer.style.transition = "none";
    index = 1;
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
  }
});

setInterval(nextSlide, 5000);
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
   <img src="../../../assets/images/products/${product.image}" alt="" />
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
  let addToCartBtn = productItem.querySelector("button");
  addToCartBtn.addEventListener("click", (event) => {
    event.stopPropagation();

    if (confirm("Are you sure you want to add this product to the cart?")) {
      TheCart.addToCart(new OrderItem(product, 1));
      window.location.reload();
    }
  });
  productItem.addEventListener("click", (event) => {
    event.stopPropagation();

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
