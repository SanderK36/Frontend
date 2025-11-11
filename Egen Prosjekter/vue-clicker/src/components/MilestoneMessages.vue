<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  count: number
}>()

const nearTrophyText = computed((): string | null => {
  if (props.count >= 7 && props.count < 10) {
    const remaining = 10 - props.count
    const clicksText = remaining === 1 ? 'klikk' : 'klikk'
    return `Bare ${remaining} ${clicksText} igjen for å låse opp et trofé!`
  }
  return null
})

defineExpose({ props })
</script>

<template>
  <div class="messages">
    <p v-if="count === 3 || count === 4" class="motivation">Du er på god vei!</p>
    <p v-if="count === 5" class="milestone">Du klikket 5 ganger! Fortsett!</p>
    <p v-if="nearTrophyText" class="almost">{{ nearTrophyText }}</p>
    <p v-if="count === 10" class="trophy">DU LÅSTE OPP ETT TROFÉ!</p>
  </div>
</template>

<style scoped>
.messages p { margin: 15px 0; }

.motivation {
  color: #3498db;
  font-style: italic;
  font-size: 1.1em;
}

.milestone {
  color: #e67e22;
  font-weight: bold;
  font-size: 1.2em;
}

.almost {
  font-weight: bold;
  font-size: 1.3em;
  animation: pulse 1s infinite;
  /* NÅ FUNGERER v-bind! */
  color: v-bind('props.count >= 9 ? "#e74c3c" : props.count >= 8 ? "#e67e22" : "#9b59b6"');
}

.trophy {
  font-size: 2em;
  font-weight: bold;
  color: #f1c40f;
  text-shadow: 0 0 10px gold;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
</style>