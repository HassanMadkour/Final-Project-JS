import { TheCart } from "../../../js/cart.js";
import { OrderItem } from "../../../js/order_item.js";

let product = JSON.parse(localStorage.getItem("product"));
console.log(product, "---------------------");
if (product) {
  let orderItem = new OrderItem(product, 1);

  //holding elements
  let productImg = document.querySelector(".product-image img");
  let productName = document.querySelector(".product-title");
  let productDesc = document.querySelector(".product-description");
  let productPrice = document.querySelector(".product-price");
  let decrementBtn = document.querySelector(".dec-btn");
  let incrementBtn = document.querySelector(".inc-btn");
  let quantity = document.querySelector(".quantity span");
  let totalPrice = document.querySelector(".total-price");
  let addToCartBtn = document.querySelector(".btn-cart");

  productImg.src = `../../../assets/images/products/${product.image}`;
  productName.innerText = product.name;
  productPrice.innerText = `$${product.price}`;
  productDesc.innerText = product.description;

  quantity.innerText = orderItem.quantity;
  totalPrice.innerText = `$${orderItem.calTotalPrice()}`;

  decrementBtn.addEventListener("click", () => {
    quantity.innerText = orderItem.decreaseQuantity();
    totalPrice.innerText = `$${orderItem.calTotalPrice()}`;
  });

  incrementBtn.addEventListener("click", () => {
    quantity.innerText = orderItem.incrementQuantity();
    totalPrice.innerText = `$${orderItem.calTotalPrice()}`;
  });
  addToCartBtn.addEventListener("click", () => {
    TheCart.addToCart(orderItem);
    window.history.back();
  });
}
