<script setup>
import btn from "./btn template.vue";
//import products from "../src/array.js";
import cart from "./item cards.vue";
</script>

<template>
  <btn id="cart">Cart</btn>
</template>

<script>
export default {
  methods: {
    cart: [],
    push(e) {
      this.cart.push(e.target.parentElement);
    },
  },
};
</script>

<style scoped>
#cart {
  float: right;
  margin-right: 2rem;
  margin-top: 2.5rem;
}
</style>
