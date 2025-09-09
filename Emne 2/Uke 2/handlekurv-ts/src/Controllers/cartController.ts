import { model } from "../Model/model";
import { updateView } from "../main";
import { addToCart,removeFromCart,updateCartQuantity,clearCart,getCart} from "../Shared/common";



export function handleAddToCart(productId) {
  addToCart(productId);
  updateView();
}

export function handleRemoveFromCart(productId) {
  removeFromCart(productId);
  updateView();
}

export function changeQuantity(productId, change) {
  const cart = getCart();
  const item = cart.find(item => item.productId === productId);

  if (item) {
    const newQuantity = item.quantity + change;
    updateCartQuantity(productId, newQuantity);
    updateView();
  }
}

export function handleClearCart() {
  if (confirm('Er du sikker på at du vil tømme handlekurven?')) {
    clearCart();
    updateView();
  }
}

export function navigateToCart() {
  model.app.currentPage = 'cart';
  updateView();
}
