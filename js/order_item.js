export class OrderItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }
  incrementQuantity() {
    this.quantity++;
  }
  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
