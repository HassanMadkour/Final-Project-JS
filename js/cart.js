import { Product } from "./product";

export class TheCart {
  static #cart = [];

  static addToCart(product) {
    if (product != Product) throw Error("Invalid product");

    if (this.#cart.includes(product)) return;
    this.#cart.push(product);
  }

  static removeFromCart(product) {
    if (product != Product) throw Error("Invalid product");

    if (!this.#cart.includes(product)) return;

    this.#cart = this.#cart.filter((item) => item !== product);
  }

  static getCart() {
    return this.#cart;
  }

  static clearCart() {
    this.#cart = [];
  }

  static buyCart() {
    throw Error("Not implemented");
  }
}
