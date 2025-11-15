<script setup lang="ts">
</script>

<template>
  <nav class="navbar">
    <router-link to="/" class="nav-button home-button">
      Hjem
    </router-link>

    <router-link to="/about" class="nav-button about-button">
      Om
    </router-link>

    <router-link to="/contact" class="nav-button contact-button">
      Kontakt
    </router-link>
  </nav>
</template>

<style scoped>
@import '../styles/Navbar.css';
</style>