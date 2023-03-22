import { reactive } from "vue";

export const store = reactive({
  cart: [],
  addToCart(e) {
    this.cart.push(e.target.parentElement);
  },
});
