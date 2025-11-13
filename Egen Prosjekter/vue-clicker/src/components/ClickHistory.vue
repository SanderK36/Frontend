<script setup lang="ts">
import { useClickerStore } from '@/stores/clickerStore'

const store = useClickerStore()

const getClickClass = (count: number): string => {
  if (count === 3 || count === 4) return 'history-motivation'
  if (count === 5) return 'history-milestone'
  if (count >= 7 && count < 10) {
    if (count === 9) return 'history-almost-red'
    if (count === 8) return 'history-almost-orange'
    return 'history-almost-purple'
  }
  if (count >= 10) return 'history-trophy'
  return ''
}
</script>

<template>
  <div v-if="store.clickHistory.length" class="history">
    <h3>Klikkhistorikk</h3>
    <ul>
      <li
        v-for="(item, index) in store.clickHistory"
        :key="index"
        :class="getClickClass(item.count)"
      >
        Klikk #{{ item.count }} – {{ item.time }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.history {
  margin-top: 40px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
  text-align: left;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.history h3 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 15px;
  font-size: 1.3em;
}

.history ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.history li {
  padding: 8px 0;
  border-bottom: 1px solid #eee;
  font-family: 'Courier New', monospace;
  font-size: 0.95em;
}

.history li:last-child {
  border-bottom: none;
}

.history-motivation {
  color: #3498db;
}
.history-milestone {
  color: #e67e22;
  font-weight: bold;
}
.history-almost-purple {
  color: #9b59b6;
}
.history-almost-orange {
  color: #e67e22;
}
.history-almost-red {
  color: #e74c3c;
  animation: pulse 1s infinite;
}
.history-trophy {
  color: #f1c40f;
  text-shadow: 0 0 6px gold;
}
</style>
