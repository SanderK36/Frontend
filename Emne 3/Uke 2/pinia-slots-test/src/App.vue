<script setup lang="ts">
import FancyBox from './components/FancyBox.vue';
import { useCounterStore } from './stores/counter';

const counter = useCounterStore()
</script>

<template>
  <FancyBox>
    <template #title>
      <h1>Welcome to the Fancy Box!</h1>
    </template>

    <p>Dette er hovedinnholdet!</p>
    <img src="https://picsum.photos/500/300" alt="tilfeldig bilde" />

    <template #footer>
      <p>Laget med Vue 3 + Typescript med litt hjelp av selveste Grok!</p>
    </template>
  </FancyBox>

  <FancyBox>
    <template #title>Advarsel!</template>
    <p style="color: red; font-weight: bold;">
      Du har glemt å lagre fremgangen din!
    </p>
    <button style="background: red; color: white; padding: 10px 20px;">
      Lagre nå
    </button>
  </FancyBox>
</template>

<style scoped></style>
