<script setup>
import { store } from "../store.js";
import cart from "./cart pop-up.vue";
</script>

<template>
  <section>
    <div class="card" id="cart-cards" v-for="item in cart">
      <h3 id="product-name">{{ item.itemName }}</h3>
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

/* h4 {
  font-size: 3rem;
}

img {
  width: 45rem;
  height: 20rem;
}

#card-btn {
  margin-top: 5rem;
} */
</style>
