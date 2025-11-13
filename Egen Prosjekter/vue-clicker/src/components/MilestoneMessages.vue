<script setup lang="ts">
import { useClickerStore } from '@/stores/clickerStore'

const store = useClickerStore()
</script>

<template>
  <div class="messages">
    <p v-if="store.count === 3 || store.count === 4" class="motivation">Du er på god vei!</p>
    <p v-if="store.count === 5" class="milestone">Du klikket 5 ganger! Fortsett!</p>
    <p v-if="store.nearTrophyText" class="almost">{{ store.nearTrophyText }}</p>
    <p v-if="store.count === 10" class="trophy">DU LÅSTE OPP ETT TROFÉ!</p>
  </div>
</template>

<style scoped>
.messages p {
  margin: 15px 0;
}

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
  color: v-bind('store.count >= 9 ? "#e74c3c" : store.count >= 8 ? "#e67e22" : "#9b59b6"');
}

.trophy {
  font-size: 2em;
  font-weight: bold;
  color: #f1c40f;
  text-shadow: 0 0 10px gold;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}
</style>
