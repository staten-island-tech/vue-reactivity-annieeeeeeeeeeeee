<!-- <script setup></script> -->

<script>
import btn from "../components/btn template.vue";
import items from "../components/item cards.vue";
import top from "../components/top part.vue";
export default {
  components: {
    items,
    cart,
    top,
  },
};
</script>

<template>
  <main>
    <top></top>
    <items />
    <!-- <btn @click="show = !show" id="cart">Cart</btn> -->
    <cart></cart>
  </main>
</template>

<style>
#cart {
  float: right;
  margin-right: 2rem;
  margin-top: 2.5rem;
}
</style>
