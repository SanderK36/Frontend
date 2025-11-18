<script setup lang="ts">
import FancyBox from './components/FancyBox.vue';
import { useCounterStore } from './stores/counter';
import UserList from '@/components/UserList.vue'

const counter = useCounterStore()
const hils = (name: string) => {
  window.alert('Hei ' + name + '!')
  
}
</script>

<!-- <template>
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
</template> -->

<template>
  <UserList v-slot="{ user }">
    <div class="card" :style="{ borderColor: user.isOnline ? 'green' : 'gray' }">
      <h3>{{ user.name }}</h3>
      <p>{{ user.age }} år</p>
      <p v-if="user.isOnline">🟢 Online</p>
      <p v-else>⚫ Frakoblet</p>
      <button @click="() => hils(user.name)">
        Hils på {{ user.name }}
      </button>
    </div>
  </UserList>
</template>

<style scoped>
.card {
  border: 4px solid;
  padding: 1rem;
  border-radius: 12px;
  width: 200px;
}
</style>

