<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { useGameStore } from './stores/gameStore'

// Pinia store
const store = useGameStore()

// Canvas refs
const canvas = ref<HTMLCanvasElement | null>(null)
const focusEl = ref<HTMLElement | null>(null)

// Interval for sanity-tick
let interval: NodeJS.Timeout

// Kjør når komponenten er montert
onMounted(async () => {
  // Fokuser på container for tastaturinput
  await nextTick()
  focusEl.value?.focus()

  // Start sanity-drain hver sekund
  interval = setInterval(() => {
    store.tickSanity()
  }, 1000)

  // Canvas rendering
  const ctx = canvas.value!.getContext('2d')!
  const TILE_SIZE = 20
  const MAZE_SIZE = store.maze.length

  const render = () => {
    if (!canvas.value) return

    // Clear canvas
    ctx.fillStyle = '#111'
    ctx.fillRect(0, 0, canvas.value.width, canvas.value.height)

    // Sett canvas-størrelse basert på labyrint
    canvas.value.width = MAZE_SIZE * TILE_SIZE
    canvas.value.height = MAZE_SIZE * TILE_SIZE

    // Bakgrunnsfarge basert på nivå
    const bgColor = store.level === 'level0' ? '#ffdd44' : '#555555'
    const wallColor = store.level === 'level0' ? '#ccaa22' : '#333333'

    // Tegn bakgrunn
    ctx.fillStyle = bgColor
    ctx.fillRect(0, 0, MAZE_SIZE * TILE_SIZE, MAZE_SIZE * TILE_SIZE)

    // Tegn labyrint (vegg, gulv, dør)
    for (let y = 0; y < MAZE_SIZE; y++) {
      for (let x = 0; x < MAZE_SIZE; x++) {
        const tile = store.maze[y][x]

        if (tile === 1) {
          // Vegg
          ctx.fillStyle = wallColor
          ctx.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE)
        } else if (tile === 2) {
          // Dør (grønn)
          ctx.fillStyle = '#00ff00'
          ctx.fillRect(x * TILE_SIZE + 4, y * TILE_SIZE + 4, TILE_SIZE - 8, TILE_SIZE - 8)
        }
        // tile === 0 → gulv → allerede tegnet med bgColor
      }
    }

    // Tegn spiller (blå firkant)
    ctx.fillStyle = '#4444ff'
    ctx.fillRect(
      store.playerPos.x * TILE_SIZE + 4,
      store.playerPos.y * TILE_SIZE + 4,
      TILE_SIZE - 8,
      TILE_SIZE - 8
    )

    // Sanity-effekt: Rød flimring når sanity < 30
    if (store.sanity < 30 && !store.gameOver) {
      const opacity = 0.1 + Math.sin(Date.now() * 0.01) * 0.1
      ctx.fillStyle = `rgba(255, 0, 0, ${opacity})`
      ctx.fillRect(0, 0, canvas.value.width, canvas.value.height)
    }

    // Game Over overlay
    if (store.gameOver) {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'
      ctx.fillRect(0, 0, canvas.value.width, canvas.value.height)
      ctx.fillStyle = '#ff4444'
      ctx.font = 'bold 36px monospace'
      ctx.textAlign = 'center'
      ctx.fillText('GAME OVER', canvas.value.width / 2, canvas.value.height / 2 - 20)
      ctx.font = '20px monospace'
      ctx.fillStyle = '#fff'
      ctx.fillText('Trykk R for restart', canvas.value.width / 2, canvas.value.height / 2 + 20)
    }

    // Neste frame
    requestAnimationFrame(render)
  }

  // Start rendering
  render()
})

// Stopp interval når komponenten fjernes
onUnmounted(() => {
  clearInterval(interval)
})

// Tastaturkontroll
const handleKey = (e: KeyboardEvent) => {
  if (store.gameOver && e.key.toLowerCase() === 'r') {
    store.restart()
    return
  }

  switch (e.key.toLowerCase()) {
    case 'w':
    case 'arrowup':
      store.movePlayer(0, -1)
      break
    case 's':
    case 'arrowdown':
      store.movePlayer(0, 1)
      break
    case 'a':
    case 'arrowleft':
      store.movePlayer(-1, 0)
      break
    case 'd':
    case 'arrowright':
      store.movePlayer(1, 0)
      break
    case 'r':
      if (store.gameOver) store.restart()
      break
  }
}
</script>

<template>
  <div
    class="game-container"
    tabindex="0"
    @keydown.prevent="handleKey"
    ref="focusEl"
  >
    <div class="hud">
      <div>
        Nivå: {{ store.level === 'level0' ? 'Level 0 - The Lobby' : 'Level 1 - Habitable Zone' }}
      </div>
      <div>Sanity: {{ Math.max(0, Math.floor(store.sanity)) }}%</div>
      <div v-if="store.gameOver" class="game-over">
        GAME OVER! Trykk R for restart
      </div>
      <div class="instructions">
        WASD / Piler: Beveg | Finn grønn dør | Sanity synker...
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
  font-family: 'Courier New', monospace;
  outline: none;
}

.game-canvas {
  border: 3px solid #ffaa00;
  background: #222;
  image-rendering: pixelated;
  box-shadow: 0 0 20px rgba(255, 170, 0, 0.3);
}

.hud {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 15px;
  font-size: 18px;
  text-align: center;
}

.game-over {
  color: #ff4444;
  font-size: 24px;
  font-weight: bold;
  animation: blink 1s infinite;
}

@keyframes blink {
  50% { opacity: 0.5; }
}

.instructions {
  font-size: 14px;
  color: #aaa;
  margin-top: 10px;
}
</style>