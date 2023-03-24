import { reactive } from "vue";

export const store = reactive({
  count: 0,
  increment() {
    this.count++;
  },
  cart: [],
  addToCart(e) {
    /*     let name = e.target.dataset.itemName;
    console.log(name);
    let price = e.target.dataset.itemName; */
    //const element = document.getElementById("#display-cards");
    /*  this.cart.push({
      itemName: `"${name}"`,
    }); */
    if (e) {
      let product = e.target.closest("#display-cards");
      this.cart.push({
        itemName: 1`"${product.find("#product-name").text()}"`,
      });
      console.log(cart.itemName);
    }
  },
});
