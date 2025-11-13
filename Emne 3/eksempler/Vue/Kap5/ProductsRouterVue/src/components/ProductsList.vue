<script setup lang="ts">
import { RouterLink } from "vue-router";
import { products } from "../products";
</script>

<template>
  <div>
    <h1>ProductList</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        <RouterLink :to="`/product/${product.id}`">
          {{ product.name }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
  text-align: left;
}
li {
  margin-top: 0.6em;
}
</style>
