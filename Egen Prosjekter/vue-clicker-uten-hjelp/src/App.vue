<script setup lang="ts">
import ClickButton from './components/ClickButton.vue'
import StatsDisplay from './components/StatsDisplay.vue'
import UpgradeList from './components/UpgradeList.vue'
import { useGameStore } from './stores/gameStore'
import { onMounted } from 'vue'

const game = useGameStore()

onMounted(() => {
  let lastTime = 0
  const tick = (currentTime: number) => {
    if (!lastTime) lastTime = currentTime
    const delta = currentTime - lastTime

    if (delta >= 1000) {
      const ticks = Math.floor(delta / 1000)
      game.score += game.clicksPerSecond * ticks
      lastTime = currentTime
    }

    requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
})
</script>

<template>
  <div class="clicker-game">
    <header>
      <h1>Vue clicker m/ pinia og komponenter</h1>
    </header>

    <StatsDisplay/>
    <ClickButton />
    <UpgradeList />
  </div>
</template>

<style scoped>
  .clicker-game {
    max-width: 700px;
    margin: 0 auto;
    padding: 2rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
  }

  header h1 {
    font-size: 3rem;
    margin-bottom: 2rem;
    color: #ffffff;
  }

  .clicker-game {
    font-size: 1.8rem;
    border-radius: 12px;
    background: linear-gradient(90deg, #1CB5E0 0%, #000851 100%);
    color: white;
    border: none;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    transition: transform 0.1s;
    font-family: 'Arial', sans-serif;
  }
</style>