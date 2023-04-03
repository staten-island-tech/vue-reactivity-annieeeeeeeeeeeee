<template>
  <div id="cart-display">
    <h2>CART</h2>
    <div id="display-cards">
      <div
        class="card"
        id="cards"
        v-for="item in cartArray.cartArray"
        :key="item"
      >
        <img :src="item.img" :alt="item.alt" />
        <h3 id="product-name">{{ item.itemName }}</h3>
        <h4>{{ item.brand }}</h4>
        <h5>${{ item.price }}</h5>
        <BtnTemp @click="remove">Remove</BtnTemp>
      </div>
    </div>
  </div>
</template>

<script setup>
import BtnTemp from "./BtnTemp.vue";
import { store } from "../store.js";
import { cartArray } from "../cart.js";
</script>

<script>
export default {
  methods: {
    remove(e) {
      e.target.parentElement.remove();
    },
  },
};
</script>

<style scoped>
@font-face {
  font-family: "Alegreya Sans SC", sans-serif;
  src: url("https://fonts.googleapis.com/css2?family=Alegreya+Sans+SC:wght@400;500&family=Kanit&display=swap");
}

#cart-display {
  width: 25%;
  height: 200vh;
  float: right;
  display: inline-block;
  border-left: solid;
}
#display-cards {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 2rem;
  flex-wrap: wrap;
  width: 80%;
  margin: auto;
}

#cards {
  width: 30rem;
  height: 40rem;
  border: solid;
  border-width: 2px;
  margin-top: 5rem;
  text-align: center;
  margin: auto;
  margin-top: 4rem;
}
h2 {
  font-size: 4rem;
  text-align: center;
  padding-top: 4rem;
  font-family: "Alegreya Sans SC", sans-serif;
  font-variant: small-caps;
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
  margin-bottom: 0.5rem;
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
