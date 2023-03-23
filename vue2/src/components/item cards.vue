<script setup>
import { store } from "../store.js";
import btn from "./btn template.vue";
</script>

<template>
  <section>
    <div class="card" id="display-cards" v-for="product in products">
      <img :src="product.img" :alt="product.alt" />
      <h3 id="product-name" name="{{ product.itemName }}"></h3>
      <h4>{{ product.brand }}</h4>
      <h4>${{ product.price }}</h4>
      <btn id="card-btn" @click="store.addToCart(), store.increment()"
        >Add to Cart</btn
      >
    </div>

    <!-- <p v-for="cart in carts">{{ carts.itemName }}</p> -->
  </section>
</template>

<script>
export default {
  data() {
    return {
      products: [
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
      ],

      //carts: [],
      store,
    };
  },

  /*  methods: {
    addToCart(e) {
      this.carts.push({
        itemName: e.target.getAttribute("name"),
        brand: e.target.getAttribute,
      });
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
  width: 80%;
  margin: auto;
}

div {
  width: 45rem;
  height: 50rem;
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
  width: 45rem;
  height: 20rem;
}

#card-btn {
  margin-top: 5rem;
}
</style>
