<script setup lang="ts">
    import { useGameStore } from '../stores/gameStore'
    const game = useGameStore()
</script>

<template>
    <button class="big-clicker" @click="game.click">
        Click! +{{ game.clickPower }}
    </button>
</template>

<style scoped>
.big-clicker {
  font-size: 1.8rem;
  padding: 1rem 2rem;
  margin: 1rem;
  cursor: pointer;
  border-radius: 12px;
  background: linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%);
  color: white;
  border: none;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  transition: transform 0.1s;
}

.big-clicker:active {
  transform: scale(0.95);
}
</style>