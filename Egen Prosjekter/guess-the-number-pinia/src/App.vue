<script setup lang="ts">
import { useGameStore } from '@/stores/gameStore'
import { onMounted } from 'vue'

const game = useGameStore()

onMounted(() => {
  game.newGame()
})
</script>

<template>
  <div class="container">
    <h1>Hot or Cold</h1>
    <p class="subtitle">Gjett et tall mellom 1 og 100</p>

    <div class="attempts">Forsøk: <strong>{{ game.attempts }}</strong></div>

    <!-- Hovedmelding -->
    <div class="message" :class="{ win: game.gameOver }">
      {{ game.message }}
    </div>

    <!-- Input + knapp mens spillet pågår -->
    <div v-if="!game.gameOver" class="game-area">
      <input
        v-model.number="game.guess"
        type="number"
        min="1"
        max="100"
        placeholder="1–100"
        class="input"
        autofocus
      />
      <button
        @click="game.makeGuess"
        :disabled="!game.guess || game.guess < 1 || game.guess > 100"
        class="btn"
      >
        Gjett!
      </button>
    </div>

    <!-- Vinnerskjerm -->
    <div v-else class="win-screen">
      <h2>Gratulerer!</h2>
      <p>
        Du fant tallet <strong>{{ game.secretNumber }}</strong> på bare
        <strong>{{ game.attempts }}</strong> forsøk!
      </p>
      <button @click="game.newGame" class="btn replay">Spill igjen</button>
    </div>

    <!-- Historikk -->
    <div v-if="game.previousGuesses.length" class="history">
      <p>Tidligere gjett:</p>
      <div class="tags">
        <span v-for="g in game.previousGuesses" :key="g" class="tag">
          {{ g }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 500px;
  margin: 3rem auto;
  padding: 2rem;
  text-align: center;
  font-family: system-ui, sans-serif;
  background: #f8f9fa;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

h1 {
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.subtitle {
  color: #7f8c8d;
  margin-bottom: 1.5rem;
}

.attempts {
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.message {
  min-height: 2.5rem;
  font-size: 1.8rem;
  font-weight: bold;
  margin: 1.5rem 0;
  padding: 1rem;
  border-radius: 12px;
  background: #e0e0e0;
  transition: all 0.3s ease;
}

.message.win {
  background: #d4edda;
  color: #155724;
}

/* Input – nå med kort og tydelig placeholder */
.input {
  padding: 1rem;
  font-size: 1.8rem;
  width: 160px;
  text-align: center;
  border: 4px solid #3498db;
  border-radius: 14px;
  margin: 0 1rem;
  transition: border-color 0.3s;
}

.input::placeholder {
  color: #95a5a6;
  font-weight: 500;
  opacity: 0.8;
}

.input:focus {
  outline: none;
  border-color: #2980b9;
  box-shadow: 0 0 0 4px rgba(52, 152, 219, 0.2);
}

.btn {
  padding: 1rem 2.2rem;
  font-size: 1.4rem;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.2s;
}

.btn:hover:not(:disabled) {
  background: #2980b9;
  transform: translateY(-2px);
}

.btn:disabled {
  background: #95a5a6;
  cursor: not-allowed;
}

.replay {
  background: #27ae60;
}

.replay:hover {
  background: #219653;
}

.history {
  margin-top: 2.5rem;
  padding-top: 1.5rem;
  border-top: 2px dashed #ddd;
}

.tag {
  display: inline-block;
  margin: 0.4rem;
  padding: 0.5rem 1rem;
  background: #ecf0f1;
  border-radius: 30px;
  font-size: 1.1rem;
}
</style>