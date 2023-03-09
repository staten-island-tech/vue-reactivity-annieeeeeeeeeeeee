<template>
  <div>
    <h3 v-for="product in products" :key="product.itemName"></h3>
  </div>
</template>

<script>
export default {
  data() {
    products: [
      { itemName: "JIOFE", brand: "Chanel", img: "" },
      { itemName: "Jofew", brand: "Chanel", img: "" },
    ];
  },
};
</script>

<style scoped></style>
