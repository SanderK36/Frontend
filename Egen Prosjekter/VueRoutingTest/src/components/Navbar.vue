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
.navbar {
  padding: 1rem;
  background: #f0f0f0;
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  border-bottom: 1px solid #ddd;
}

.nav-button {
  padding: 0.8rem 1.5rem;
  text-decoration: none;
  font-weight: bold;
  border-radius: 8px;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.home-button {
  background: #42b983;
  color: white;
}

.home-button:hover {
  background: #369e6e;
}

.about-button {
  background: #3498db;
  color: white;
}

.about-button:hover {
  background: #2980b9;
}

.contact-button {
  background: #9b59b6;
  color: white;
}

.contact-button:hover {
  background: #8e44ad;
}

.nav-logo {
  height: 24px;
  width: auto;
}

.router-link-active {
  border-color: #000 !important;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
}
</style>