<script setup>
import btn from "../components/btn template.vue";
import item from "../components/item cards.vue";
import top from "../components/top part.vue";
</script>

<template>
  <main>
    <top></top>
    <item />
    <btn @click="show = !show" id="cart">Cart</btn>
  </main>
</template>

<style>
#cart {
  float: right;
  margin-right: 2rem;
  margin-top: 2.5rem;
}
</style>
