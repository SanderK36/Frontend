<script setup lang="ts">
    import { useGameStore } from '../stores/gameStore'
    const game = useGameStore()
</script>

<template>
    <div class="stats">
        <p class="score">Score: {{ game.score }}</p>
        <div class="info">
            <p>Click Power: {{ game.clickPower }}</p>
             <p v-if="game.clicksPerSecond === 0">You don't have any auto clickers yet! Buy Auto-Clicker to generate clicks each second</p>
              <p v-else> Auto-Clickers: {{ game.clicksPerSecond }} per second</p>
        </div>
    </div>
</template>

<style scoped>
.stats {
  margin: 2rem 0;
}

.score {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.info {
  font-size: 1.8rem;
  padding: 1rem 2rem;
  margin: 1rem;
  border-radius: 12px;
  background: linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%);
  color: white;
  border: none;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  transition: transform 0.1s;
}
.info p {
  margin: 1.5rem 0;
  font-size: 1.2rem;
}
</style>