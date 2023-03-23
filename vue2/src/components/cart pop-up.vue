<script setup>
import btn from "./btn template.vue";
//import products from "../src/array.js";
import cart from "./item cards.vue";
import { store } from "../store.js";
</script>

<template>
  <btn id="cart">Cart ({{ store.count }}) </btn>
</template>

<script>
export default {
  /*   methods: {
    cart: [],
    push(e) {
      this.cart.push(e.target.parentElement);
    },
  }, */

};
</script>

<style scoped>
.h1 {
  background-color: red;
}
#cart {
  float: right;
  margin-right: 2rem;
  margin-top: 2.5rem;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
