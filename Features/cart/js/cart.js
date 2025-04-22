import { TheCart } from "../../../js/cart.js";

let cart = TheCart.getCart();

let cartHolder = document.querySelector(".cart-items");
if (cart && cart.length > 0) {
  for (let i = 0; i < cart.length; i++) {
    let cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `<div class="item-info">
          <img src="../../assets/images/products/${cart[i].product.image}" alt="Product" />
          <div class="item-details">
            <span class="item-name">${cart[i].product.name}</span>
            <span class="item-price">\$${cart[i].product.price}</span>
            <i class="bi bi-trash remove-btn"> </i>
          </div>
        </div>
        <div class="quantity">
          <button class="minus-btn">-</button>
          <span>${cart[i].quantity}</span>
          <button class="plus-btn">+</button>
        </div>`;

    cartHolder.appendChild(cartItem);

    let removeBtn = cartItem.querySelector(".remove-btn");
    removeBtn.addEventListener("click", () => {
      TheCart.removeFromCart(cart[i]);
      window.location.reload();
    });

    let minusBtn = cartItem.querySelector(".minus-btn");
    minusBtn.addEventListener("click", () => {
      TheCart.decreaseQuantity(cart[i]);
      //update total price and quantity
      let quantity = cartItem.querySelector(".quantity span");
      let totalPrice = document.querySelector(".total");
      quantity.innerText = cart[i].quantity;
      totalPrice.innerText = `Total: $${TheCart.calTotal()}`;
    });

    let plusBtn = cartItem.querySelector(".plus-btn");
    plusBtn.addEventListener("click", () => {
      TheCart.incrementQuantity(cart[i]);
      //update total price and quantity
      let quantity = cartItem.querySelector(".quantity span");
      let totalPrice = document.querySelector(".total");
      quantity.innerText = cart[i].quantity;
      totalPrice.innerText = `Total: $${TheCart.calTotal()}`;
    });
  }

  let total = TheCart.calTotal();
  let totalHolder = document.querySelector(".total");
  totalHolder.innerText = `Total: $${total}`;

  let checkoutBtn = document.querySelector(".checkout-btn");
  checkoutBtn.style.display = "block";
  checkoutBtn.addEventListener("click", () => {
    window.location.assign("../../Features/checkout/checkout.html");
  });
} else {
  cartHolder.innerHTML = `<h3>Cart is empty</h3>`;
  let checkoutBtn = document.querySelector(".checkout-btn");
  checkoutBtn.style.display = "none";
}
