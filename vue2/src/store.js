import { reactive } from "vue";
import { products } from "./items.js";
import { cartArray } from "./cart.js";

export const store = reactive({
  cartArray,

  addToCart(id) {
    let item = products.find((product) => product.id === id);
    this.cartArray.cartArray.push(item);
    console.log(this.cartArray);
  },
});
