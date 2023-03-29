<!-- <script setup></script> -->

<script>
import btn from "../components/btn template.vue";
import items from "../components/item cards.vue";
import top from "../components/top part.vue";
import cart from "../components/side cart.vue";
export default {
  components: {
    items,
    top,
    cart,
  },
};
</script>

<template>
  <main>
    <section id="parent">
      <div class="child">
        <top></top>
        <items />
      </div>
      <cart></cart>
    </section>

    <!-- <btn @click="show = !show" id="cart">Cart</btn> -->
  </main>
</template>

<style>
#parent {
  width: 100%;
  display: inline-block;
}
.child {
  display: inline-block;
}

#cart {
  display: inline-block;
  float: right;
}
</style>
