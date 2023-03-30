<script setup>
import BtnTemp from "./BtnTemp.vue";
import { store } from "../store.js";
import { cartArray } from "../cart.js";
</script>

<template>
  <h2>Cart</h2>

  <div class="card" id="display-cards" v-for="item in cartArray">
    <!-- <img :src="item.img" :alt="item.alt" /> -->
    <h3 id="product-name" name="{{ item.itemName }}"></h3>
    <h4>{{ item.brand }}</h4>
    <h4>${{ item.price }}</h4>
    <BtnTemp>Remove</BtnTemp>
  </div>
</template>

<script>
export default {
  store,
  cartArray,
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
  width: 35rem;
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
  width: 35rem;
  height: 20rem;
}

#card-btn {
  margin-top: 5rem;
}
</style>
