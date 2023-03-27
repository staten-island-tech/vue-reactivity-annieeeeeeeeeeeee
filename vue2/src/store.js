import { reactive } from "vue";

export const store = reactive({
  count: 0,
  increment() {
    this.count++;
  },

  addToCart(e) {
    let cartArray = [];
    if (e) {
      let product = e.target.parentElement;
      let name = product.textContent;
      console.log(name);
      this.cartArray.push({
        itemName: name,
      });
      console.log(cart.itemName);
      console.log("hi");
    }
  },
});
