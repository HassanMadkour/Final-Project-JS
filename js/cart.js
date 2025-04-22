import { OrderItem } from "./order_item.js";
export class TheCart {
  static #cart = [];
  static {
    if (sessionStorage.getItem("cart")) {
      this.#cart = this.convertToListOfOrderItems(
        JSON.parse(sessionStorage.getItem("cart"))
      );
    }
  }

  static convertToListOfOrderItems(cart) {
    return cart.map(
      (item) => new OrderItem(item.product, item.quantity, item.totalPrice)
    );
  }

  static addToCart(orderItem) {
    if (this.#cart.includes(orderItem)) return;
    this.#cart.push(orderItem);
    sessionStorage.setItem("cart", JSON.stringify(this.#cart));
  }

  static removeFromCart(orderItem) {
    if (!this.#cart.includes(orderItem)) return;

    this.#cart = this.#cart.filter((item) => item !== orderItem);
    sessionStorage.setItem("cart", JSON.stringify(this.#cart));
  }

  static getCart() {
    return this.#cart;
  }
  static incrementQuantity(orderItem) {
    if (!this.#cart.includes(orderItem)) return;
    orderItem.incrementQuantity();
    sessionStorage.setItem("cart", JSON.stringify(this.#cart));
  }

  static decreaseQuantity(orderItem) {
    if (!this.#cart.includes(orderItem)) return;
    orderItem.decreaseQuantity();
    sessionStorage.setItem("cart", JSON.stringify(this.#cart));
  }

  static clearCart() {
    this.#cart = [];
    sessionStorage.setItem("cart", JSON.stringify(this.#cart));
  }
  static calTotal() {
    let total = 0;
    for (let i = 0; i < this.#cart.length; i++) {
      total += TheCart.#cart[i].calTotalPrice();
    }
    return total;
  }
}
