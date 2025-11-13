<script setup lang="ts">
import { ref } from 'vue'

const score = ref(0)
const clickPower = ref(1)
const clicksPerSecond = ref(0)

const click = () => {
  score.value += clickPower.value
}

const buyUpgrade = () => {
  const cost = clickPower.value * 100
  if (score.value >= cost) {
    score.value -= cost
    clickPower.value += 1
  }
}

const buyAutoClicker = () => {
  const cost = 50 + (clicksPerSecond.value * 25)
  if (score.value >= cost) {
    score.value -= cost
    clicksPerSecond.value += 1
  }
}

setInterval(() => {
  score.value += clicksPerSecond.value
}, 1000)
</script>

<template>
  <div class="clicker-game">
    <div class="header">
      <h1>🤑 Clicker</h1>
      <div class="score">
        {{ Math.floor(score).toLocaleString() }}
      </div>
    </div>

    <div class="click-button" @click="click">
      <span>Klikk!</span>
      <small>+{{ clickPower }}</small>
    </div>

    <div class="upgrades">
      <button class="upgrade-btn" @click="buyUpgrade">
        <span>Større klikk</span>
        <small>{{ clickPower * 100 }}</small>
      </button>
      
      <button class="upgrade-btn" @click="buyAutoClicker">
        <span>Auto</span>
        <small>{{ 50 + clicksPerSecond * 25 }}</small>
      </button>
    </div>

    <div class="stats">
      <span>⚡{{ clickPower }}</span>
      <span>🤖{{ clicksPerSecond }}/s</span>
    </div>
  </div>
</template>

<style scoped>
.clicker-game {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  font-family: 'Segoe UI', sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem;
  box-sizing: border-box;
  overflow: hidden;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin-bottom: 1rem;
}

h1 {
  font-size: 1.8rem;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
}

.score {
  font-size: 2rem;
  font-weight: bold;
  background: rgba(255,255,255,0.2);
  padding: 0.5rem 1rem;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  min-width: 120px;
}

.click-button {
  width: 220px;
  height: 220px;
  background: linear-gradient(45deg, #ff6b6b, #feca57);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  font-weight: bold;
  color: white;
  transition: all 0.1s ease;
  box-shadow: 0 10px 20px rgba(0,0,0,0.3);
  margin: 1rem 0;
}

.click-button:hover {
  transform: scale(1.05);
}

.click-button:active {
  transform: scale(0.95);
}

.click-button small {
  font-size: 0.9rem;
  margin-top: 0.3rem;
  opacity: 0.9;
}

.upgrades {
  display: flex;
  gap: 1rem;
  width: 100%;
  max-width: 400px;
  justify-content: center;
}

.upgrade-btn {
  flex: 1;
  background: rgba(255,255,255,0.2);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 1rem;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
}

.upgrade-btn:hover {
  background: rgba(255,255,255,0.3);
  transform: translateY(-3px);
}

.upgrade-btn:active {
  transform: translateY(0);
}

.upgrade-btn small {
  font-size: 0.8rem;
  opacity: 0.8;
}

.stats {
  display: flex;
  gap: 2rem;
  font-size: 1rem;
  margin-top: auto;
  padding: 0.5rem;
  background: rgba(0,0,0,0.2);
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
  justify-content: center;
}

.stats span {
  font-weight: bold;
}
</style>