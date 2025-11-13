<script setup>
</script>

<template>
    <nav class="navbar">
        <div class="logo">
            <h1>MinApp</h1>
        </div>
        <ul class="nav-links">
            <li><a href="#home">Hjem</a></li>
            <li><a href="#about">Om</a></li>
            <li><a href="#contact">Kontakt</a></li>
        </ul>
    </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 1rem 2rem;
}

.logo h1 {
  color: white;
  margin: 0;
  font-size: 1.5rem;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}

.nav-links li a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
}

.nav-links li a:hover {
  color: #ddd;
}

@media (max-width: 600px) {
  .navbar {
    flex-direction: column;
    gap: 1rem;
  }
  .nav-links {
    flex-direction: column;
    align-items: center;
  }
}
</style>