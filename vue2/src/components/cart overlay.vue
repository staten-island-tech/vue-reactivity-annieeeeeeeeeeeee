<script setup>
import { store } from "./store.js";
import cart from "./cart pop-up.vue";
</script>

<template>
  <section>
    <div class="card" v-for="stuff in cart">
      <img :src="stuff.img" :alt="stuff.alt" />
      <h3>{{ stuff.itemName }}</h3>
      <h4>{{ stuff.brand }}</h4>
      <h4>${{ stuff.price }}</h4>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<style scoped></style>
