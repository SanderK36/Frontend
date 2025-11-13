<script setup lang="ts">
import { useClickerStore } from '@/stores/clickerStore'

const store = useClickerStore()
</script>

<template>
  <div class="clicker-wrapper">
    <button
      @click="store.handleClick"
      @dblclick="store.handleDoubleClick"
      @contextmenu="store.handleContextMenu"
      class="clicker-button"
    >
      {{ store.buttonText }}
    </button>
    <button @click="store.reset" class="reset-button">Nullstill</button>
  </div>
</template>

<style scoped>
.clicker-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin: 25px 0;
}

.clicker-button {
  font-size: 20px;
  padding: 12px 24px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.clicker-button:hover {
  background: #369f70;
  transform: scale(1.05);
}

.clicker-button:active {
  transform: scale(0.98);
  animation: clickPulse 0.3s ease;
}

.reset-button {
  background: #e74c3c;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.reset-button:hover {
  background: #c0392b;
}

@keyframes clickPulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
