<script setup>
import { store } from "../store.js";
import cart from "./cart pop-up.vue";
</script>

<template>
  <section>
    <div class="card" v-for="stuff in cart"></div>
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
