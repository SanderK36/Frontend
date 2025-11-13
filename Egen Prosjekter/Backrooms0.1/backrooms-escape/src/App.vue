<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useGameStore } from './stores/gameStore'

const store = useGameStore()

let interval: NodeJS.Timeout

onMounted(() => {
  interval = setInterval(() => store.tickSanity(), 1000)
})

onUnmounted(() => clearInterval(interval))

const handleKey = (e: KeyboardEvent) => {
  switch (e.key.toLowerCase()) {
    case 'w': case 'arrowup': store.movePlayer(0, -1); break
    case 's': case 'arrowdown': store.movePlayer(0, 1); break
    case 'a': case 'arrowleft': store.movePlayer(-1, 0); break
    case 'd': case 'arrowright': store.movePlayer(1, 0); break
    case 'r': store.restart(); break
  }
}
</script>

<template>
  <div class="game-container" tabindex="0" @keyup="handleKey" ref="focusEl">
    <div class="hud">
      <div>Nivå: {{ store.level === 'level0' ? 'Level 0 - The Lobby' : 'Level 1 - Habitable Zone' }}</div>
      <div>Sanity: {{ Math.max(0, Math.floor(store.sanity)) }}%</div>
      <div v-if="store.gameOver" class="game-over">
        GAME OVER! Trykk R for restart
      </div>
      <div class="instructions">
        WASD/Piler: Beveg | Finn grønn dør! | Sanity synker...
      </div>
    </div>
    <canvas ref="canvas" class="game-canvas"></canvas>
  </div>
</template>

<style scoped>
.game-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #111;
  color: white;
  font-family: monospace;
}

.game-canvas {
  border: 2px solid #ffaa00;
  background: #222;
  image-rendering: pixelated;
}

.hud {
  display: flex;
  gap: 20px;
  margin-bottom: 10px;
  font-size: 18px;
}

.game-over {
  color: #ff4444;
  font-size: 24px;
  animation: blink 1s infinite;
}

@keyframes blink {
  50% { opacity: 0; }
}

.instructions {
  font-size: 14px;
  color: #aaa;
}
</style>