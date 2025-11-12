<script setup lang="ts">
import { ref, computed } from 'vue'

const count = ref(0)

interface ClickEvent {
  count: number
  time: string
}
const clickHistory = ref<ClickEvent[]>([])

const emit = defineEmits<{
  'update:history': [ClickEvent[]]
  'update:count': [number]
  'reset': []
}>()

const buttonText = computed((): string => {
  if (count.value === 5) return "Gratulerer! du har nådd 5!"
  if (count.value === 1) return `Klikket ${count.value} gang`
  if (count.value === 10) return `DU ER EN KLIKKEMESTER!`
  return `Klikket ${count.value} ganger`
})


const addToHistory = (increment: number = 1) => {
  const now = new Date()
  const time = now.toLocaleTimeString('nb-NO', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
  
  const newCount = count.value + increment
  clickHistory.value.push({ count: newCount, time })
  
  emit('update:history', clickHistory.value)
  emit('update:count', newCount)
}

const handleClick = () => {
  count.value++
  addToHistory()
}

const doubleClick = () => {
  count.value += 2
  addToHistory(2) 
}

const handleContextMenu = (e: MouseEvent) => {
  e.preventDefault()
  if (count.value > 0) {
    count.value--
    addToHistory(-1)
  }
}

const reset = () => {
  count.value = 0
  clickHistory.value = []
  emit('reset')
  emit('update:history', [])
  emit('update:count', 0)
}

defineExpose({ count })
</script>

<template>
  <button
  @click="handleClick"
  @dblclick="doubleClick"
  @contextmenu="handleContextMenu"
  class="clicker-button">
    {{ buttonText }}
  </button>
  <button @click="reset" class="reset-button">
    Nullstill
  </button>
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
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}
</style>