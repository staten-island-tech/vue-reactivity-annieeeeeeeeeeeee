<script setup>
import { store } from "../store.js";
import BtnTemp from "./BtnTemp.vue";
import { products } from "../items.js";
import TopPart from "../components/TopPart.vue";
</script>

<template>
  <div id="parent">
    <TopPart></TopPart>
    <div id="layout">
      <div class="card" id="display-cards" v-for="product in products">
        <img v-if="product.img" :src="product.img" :alt="product.alt" />
        <h3 id="product-name">{{ product.itemName }}</h3>
        <h4>{{ product.brand }}</h4>
        <h5>${{ product.price }}</h5>
        <BtnTemp id="card-btn" @click="store.addToCart(product.id)"
          >Add to Cart</BtnTemp
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products,
      store,
      TopPart,
    };
  },
};
</script>

<style scoped>
@font-face {
  font-family: "Alegreya Sans SC", sans-serif;
  src: url("https://fonts.googleapis.com/css2?family=Alegreya+Sans+SC:wght@400;500&family=Kanit&display=swap");
}
#parent {
  display: inline-block;
  float: left;
  width: 75%;
}
#layout {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 2rem;
  flex-wrap: wrap;
  width: 80%;
  margin: auto;
}

#display-cards {
  width: 30rem;
  height: 40rem;
  border: solid;
  border-width: 2px;
  margin-top: 5rem;
  text-align: center;
}

h3 {
  margin-top: 1rem;
  font-size: 3.5rem;
  font-family: "Alegreya Sans SC", sans-serif;
  font-weight: 500;
  font-variant: small-caps;
}

h4 {
  font-size: 2.5rem;
  font-family: "Alegreya Sans SC", sans-serif;
  font-weight: 400;
  font-variant: small-caps;
}

h5 {
  font-size: 1.5rem;
  font-family: "Kanit", sans-serif;
  font-weight: 400;
  font-variant: small-caps;
  margin-top: 0.5rem;
}
img {
  width: 29.6rem;
  height: 23rem;
  object-fit: cover;
}

#card-btn {
  margin-top: 1rem;
}
</style>
