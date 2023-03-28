import { reactive } from "vue";
import { products } from "./items.js";
import { cartArray } from "./cart.js";

export const store = reactive({
  count: 0,
  increment() {
    this.count++;
  },

  cartArray,

  addToCart(id) {
    const item = products.find((product) => product.id === id);
    console.log(item);
    /*  this.cartArray.push({
        itemName: name,
      });
      console.log(cart.itemName);
      console.log("hi"); */
    this.cartArray.push(item);
    console.log(this.cartArray);
  },
});
