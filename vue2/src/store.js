import { reactive } from "vue";

export const store = reactive({
  count: 0,
  increment() {
    this.count++;
  },
  cart: [],
  addToCart(e) {
    let product = e.closest("#display-cards");
    this.cart.push({
      itemName: `"${product.find("#product-name").text()}"`,
    });
  },
});
