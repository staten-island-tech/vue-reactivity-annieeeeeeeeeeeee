import { reactive } from "vue";

export const store = reactive({
  cart: [],
  addToCart(e) {
    this.carts.push({
      itemName: e.target.getAttribute("name"),
      brand: e.target.getAttribute,
    });
  },
});
