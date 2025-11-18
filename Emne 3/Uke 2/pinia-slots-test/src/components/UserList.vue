<script setup lang="ts">
interface User {
  id: number
  name: string
  age: number
  isOnline: boolean
}

const users: User[] = [
  { id: 1, name: 'Kari', age: 28, isOnline: true },
  { id: 2, name: 'Ola', age: 34, isOnline: false },
  { id: 3, name: 'Line', age: 22, isOnline: true },
  { id: 4, name: 'Per', age: 45, isOnline: true },
]
</script>
<!-- src/components/UserList.vue -->
<template>
  <div class="user-list">
    <!-- Her sender vi med "user" til den som bruker komponenten -->
    <slot v-for="user in users" :user="user"></slot>
  </div>
</template>

<style scoped>
.user-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 2rem;
  justify-content: center;
}
</style>