<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
button {
  background-color: #fff;
  border: 0 solid #e2e8f0;
  border-radius: 1.5rem;
  color: #000000;
  cursor: pointer;
  font-size: 1.1rem;
  line-height: 1;
  padding: 1rem 1.6rem;
  text-align: center;
  transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0px 1px 2px rgba(166, 175, 195, 0.25);
}

button:hover {
  background-color: #000000;
  color: rgb(255, 255, 255);
}
</style>
