<template>
  <main>
    <div v-if="product">
      <h1>{{ product.name }}</h1>
      <p>Pris: {{ product.price }}</p>
      <p>Details: {{ product.description }}</p>
      <button @click="router.push('/products')">Back to products list</button>
      <button @click="goToNextProduct">Next product</button>
    </div>
    <p v-else>Product does not exist</p>
  </main>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { getProductById, getNextProductId } from "../products";
import type { Product } from "../products";

const props = defineProps<{ id: string }>();
const router = useRouter();
const product = ref<Product | null>();

watch(
  (): number => parseInt(props.id),
  (id: number) => {
    if (id != null) {
      product.value = getProductById(id);
    }
  },
  { immediate: true }
);

function goToNextProduct(): void {
  router.push({
    name: "product",
    params: { id: getNextProductId(product.value!.id) },
  });
}
</script>

<style></style>
