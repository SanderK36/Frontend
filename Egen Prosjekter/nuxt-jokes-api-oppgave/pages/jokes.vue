<script setup lang="ts">

const { data, pending, error, refresh } = await useFetch('/api/jokes', {
  key: 'jokes',
  default: () => []
})

interface Joke {
  id: number
  text: string
}
</script>

<template>
  <div class="container">
    <h1>Vitser fra eget API</h1>

    <!-- Loading -->
    <div v-if="pending" class="loading">
      <p>Laster vitser...</p>
    </div>

    <!-- Error -->
    <div v-else-if="error" class="error">
      <p>Oi! Noe gikk galt: {{ error.message }}</p>
    </div>

    <!-- Vitser -->
    <div v-else class="jokes">
      <div v-for="joke in data" :key="joke.id" class="joke">
        {{ joke.text }}
      </div>

      <button @click="refresh" :disabled="pending" class="button">
        {{ pending ? 'Laster...' : 'Last på Lunch' }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 40px;
}

.loading {
  font-size: 1.5rem;
  color: #3498db;
}

.error {
  background: #fee;
  color: #c00;
  padding: 20px;
  border-radius: 8px;
  border: 2px solid #fcc;
}

.jokes {
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
}

.joke {
  background: #f8f9fa;
  padding: 30px;
  border-radius: 12px;
  font-size: 1.4rem;
  line-height: 1.6;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  max-width: 600px;
}

.button {
  margin-top: 20px;
  padding: 14px 32px;
  font-size: 1.2rem;
  background: #27ae60;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}

.button:hover:not(:disabled) {
  background: #219a52;
}

.button:disabled {
  background: #95a5a6;
  cursor: not-allowed;
}
</style>