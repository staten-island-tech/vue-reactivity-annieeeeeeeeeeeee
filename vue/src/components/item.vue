<script setup>
import btn from "../components/btn.vue";
</script>

<template>
  <section>
    <div class="card" v-for="product in products">
      <img :src="product.img" :alt="product.alt" />
      <h3>{{ product.itemName }}</h3>
      <h4>{{ product.brand }}</h4>
      <h4>${{ product.price }}</h4>
      <btn>Add to Cart</btn>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          itemName: "Purse",
          brand: "Chanel",
          img: "@/assets/strawberry.jpg",
          alt: "",
          price: 7927,
        },
        { itemName: "Jofew", brand: "Chanel", img: "", alt: "", price: 4283 },
        { itemName: "HEHEE", brand: "Dior", img: "", alt: "", price: 4879 },
        { itemName: "Jofew", brand: "Chanel", img: "", alt: "", price: 4354 },
        { itemName: "Jofew", brand: "Chanel", img: "", alt: "", price: 4283 },
        { itemName: "HEHEE", brand: "Dior", img: "", alt: "", price: 4879 },
        { itemName: "Jofew", brand: "Chanel", img: "", alt: "", price: 4354 },
      ],
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
}

h3 {
  font-size: 5rem;
}
</style>
