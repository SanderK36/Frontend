// src/stores/clickerStore.ts
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface ClickEvent {
  count: number
  time: string
}

export const useClickerStore = defineStore('clicker', () => {
  // State
  const count = ref(0)
  const clickHistory = ref<ClickEvent[]>([])

  // Computed
  const buttonText = computed((): string => {
    if (count.value === 5) return 'Gratulerer! du har nådd 5!'
    if (count.value === 1) return `Klikket ${count.value} gang`
    if (count.value >= 10) return `DU ER EN KLIKKEMESTER!`
    return `Klikket ${count.value} ganger`
  })

  const nearTrophyText = computed((): string | null => {
    if (count.value >= 7 && count.value < 10) {
      const remaining = 10 - count.value
      const clicksText = remaining === 1 ? 'klikk' : 'klikk'
      return `Bare ${remaining} ${clicksText} igjen for å låse opp et trofé!`
    }
    return null
  })

  // Actions
  const addToHistory = (increment: number = 1) => {
    const now = new Date()
    const time = now.toLocaleTimeString('nb-NO', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })

    const newCount = count.value + increment
    clickHistory.value.push({ count: newCount, time })
    count.value = newCount
  }

  const handleClick = () => addToHistory()
  const handleDoubleClick = () => addToHistory(2)
  const handleContextMenu = (e: MouseEvent) => {
    e.preventDefault()
    if (count.value > 0) addToHistory(-1)
  }
  const reset = () => {
    count.value = 0
    clickHistory.value = []
  }

  return {
    count,
    clickHistory,
    buttonText,
    nearTrophyText,
    handleClick,
    handleDoubleClick,
    handleContextMenu,
    reset,
  }
})
