<script setup>
import btn from "../components/btn.vue";
</script>

<template>
  <div class="card" v-for="product in products">
    <img src="barbie 1.webp" />
    <h3>{{ product.itemName }}</h3>
    <h4>{{ product.brand }}</h4>
    <btn>Add to Cart</btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          itemName: "Purse",
          brand: "Chanel",
          img: "barbie 1.webp",
        },
        { itemName: "Jofew", brand: "Chanel", img: "" },
        { itemName: "HEHEE", brand: "Dior", img: "" },
      ],
    };
  },
};
</script>

<style scoped>
div {
  width: 45rem;
  height: 50rem;
  border: solid;
}
h3 {
  font-size: 10rem;
}
</style>
