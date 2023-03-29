<script setup>
import { store } from "../store.js";
import btn from "./btn template.vue";
import { products } from "../items.js";
</script>

<template>
  <section>
    <div class="card" id="display-cards" v-for="product in products">
      <img :src="product.img" :alt="product.alt" />
      <h3 id="product-name">{{ product.itemName }}</h3>
      <h4>{{ product.brand }}</h4>
      <h5>${{ product.price }}</h5>
      <btn id="card-btn" @click="store.addToCart(product.id)">Add to Cart</btn>
    </div>

    <!-- <p v-for="cart in carts">{{ carts.itemName }}</p> -->
  </section>
</template>

<script>
export default {
  data() {
    return {
      /* products: [
        {
          itemName: "Purse",
          brand: "Chanel",
          img: "../assets/strawberry.jpg",
          alt: "",
          price: 7927,
        },
        { itemName: "Jofew", brand: "Chanel", img: "", alt: "", price: 4283 },
        { itemName: "HEHEE", brand: "Dior", img: "", alt: "", price: 4879 },
        { itemName: "Jofew", brand: "Chanel", img: "", alt: "", price: 4354 },
        { itemName: "Jofew", brand: "Chanel", img: "", alt: "", price: 4283 },
        { itemName: "HEHEE", brand: "Dior", img: "", alt: "", price: 4879 },
        { itemName: "Jofew", brand: "Chanel", img: "", alt: "", price: 4354 },
      ], */
      products,

      //carts: [],
      store,
    };
  },

  /*  methods: {
    cart: [],
    addToCart(e) {
      //console.log("hi");
      if (e) {
        let product = e.target.parentElement;
        let name = product.textContent;
        console.log(name);
        this.cart.push({
          itemName: name,
        });
        console.log(cart.itemName);
        console.log("hi");
      }
    },
  }, */
};
</script>

<style scoped>
section {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 2rem;
  flex-wrap: wrap;
  width: 75%;
  margin: auto;
}

div {
  width: 30rem;
  height: 40rem;
  border: solid;
  border-width: 2px;
  margin-top: 5rem;
  text-align: center;
}

h3 {
  font-size: 5rem;
}

h4 {
  font-size: 3rem;
}

img {
  width: 30rem;
  height: 23rem;
}

#card-btn {
  margin-top: 5rem;
}
</style>
