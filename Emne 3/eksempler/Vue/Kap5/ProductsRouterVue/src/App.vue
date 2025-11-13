<script setup lang="ts"></script>

<template>
  <div>
    <nav>
      <RouterLink to="/products">Products</RouterLink>
      <RouterLink to="/product/:id"></RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<style scoped></style>
