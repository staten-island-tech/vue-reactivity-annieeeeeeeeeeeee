<script setup>
import { store } from "../store.js";
import cart from "./cart pop-up.vue";
import { products } from "../items.js";
</script>

<template>
  <section>
    <div>
      <h3 id="product-name">hi</h3>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      store,
      products,
    };
  },

  computed: {
    cart() {
      return this.products.filter((e) => e.div.contains("clicked"));
    },
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
