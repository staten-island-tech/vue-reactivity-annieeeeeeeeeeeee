<!-- <script setup></script> -->

<script>
import BtnTemp from "../components/BtnTemp.vue";
import ItemCards from "../components/ItemCards.vue";
import TopPart from "../components/TopPart.vue";
import SideCart from "../components/SideCart.vue";
export default {
  components: {
    ItemCards,
    TopPart,
    SideCart,
  },
};
</script>

<template>
  <ItemCards />
  <SideCart></SideCart>
</template>

<style>
/* .parent {
  display: inline-block;
}
.left {
  display: inline-block;
  float: left;
}
.right {
  display: inline-block;
  float: right;
} */
</style>
