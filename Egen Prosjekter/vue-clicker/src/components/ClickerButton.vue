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
}>()

const buttonText = computed((): string => {
  if (count.value === 5) return "Gratulerer! du har nådd 5!"
  if (count.value === 1) return `Klikket ${count.value} gang`
  if (count.value === 10) return `Du er en KLIKKEMESTER!`
  return `Klikket ${count.value} ganger`
})

const addToHistory = () => {
  const now = new Date()
  const time = now.toLocaleTimeString('nb-NO', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
  clickHistory.value.push({ count: count.value, time })
  emit('update:history', clickHistory.value)
  emit('update:count', count.value)
}

// Klikk-håndtering
const handleClick = () => {
  count.value++
  addToHistory()
}

defineExpose({ count })
</script>

<template>
  <button @click="handleClick" class="clicker-button">
    {{ buttonText }}
  </button>
</template>

<style scoped>
.clicker-button {
  font-size: 20px;
  padding: 12px 24px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  margin: 25px 0;
}

.clicker-button:hover {
  background: #369f70;
  transform: scale(1.05);
}

.clicker-button:active {
  transform: scale(0.98);
}
</style>