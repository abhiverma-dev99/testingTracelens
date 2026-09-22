// Intentional bug: cart items have no price.
export function cartTotal(cart) {
  return cart.items.reduce((sum, item) => {
    if (item.price == null) {
      throw new TypeError("Cannot read properties of undefined (reading 'price')");
    }
    return sum + item.price * item.qty;
  }, 0);
}
