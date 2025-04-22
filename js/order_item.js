export class OrderItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
    this.totalPrice = this.calTotalPrice();
  }
  incrementQuantity() {
    this.quantity++;
    return this.quantity;
  }
  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
    return this.quantity;
  }
  calTotalPrice() {
    return this.product.price * this.quantity;
  }
}
