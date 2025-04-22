import { CurrentUser } from "../../../js/user.js";
import { CookieHandler } from "../../../js/cookie_handler.js";
import { TheCart } from "./cart.js";

let usernameEle = document.querySelector(".logo span");
console.log(usernameEle);
usernameEle.innerText = `Hi, ${CurrentUser.user.name}`;
let logoutBtn = document.querySelector(".logout-btn");

let cartEle = document.querySelector(".cart-icon");
cartEle.addEventListener("click", () => {
  window.location.assign("../../Features/cart/cart.html");
});
logoutBtn.addEventListener("click", () => {
  CookieHandler.deleteCookie("user");
  sessionStorage.removeItem("c-user");
  CurrentUser.user = null;
  TheCart.clearCart();
  window.location.replace("../../Features/auth/login.html");
});
let cart = TheCart.getCart();
if (cart && cart.length > 0) {
  let cartIcon = document.querySelector(".cart-icon");
  let cartCount = document.querySelector(".cart-count");
  cartCount.innerText = cart.length;
  cartCount.classList.add("active");
} else {
  let cartIcon = document.querySelector(".cart-icon");
  let cartCount = document.querySelector(".cart-count");
  cartCount.innerText = 0;
  cartCount.classList.remove("active");
}
