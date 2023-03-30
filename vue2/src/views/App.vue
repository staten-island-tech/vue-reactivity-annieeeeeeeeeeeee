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
  <div id="parent">
    <div class="child">
      <TopPart></TopPart>
      <ItemCards />
    </div>
    <SideCart></SideCart>
  </div>

  <!-- <btn @click="show = !show" id="cart">Cart</btn> -->
</template>

<style></style>
