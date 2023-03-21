<script setup>
import btn from "../components/btn template.vue";
import hey from "../components/hey.vue";
import top from "../components/top part.vue";
</script>

<script>
export default {
  components: {
    hey,
  },
};
</script>

<template>
  <main>
    <top></top>
    <hey />
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
