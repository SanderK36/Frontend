<script setup lang="ts">
import { type ComputedRef } from 'vue'

const props = defineProps<{
  title: string
  description: string
  cost: number | ComputedRef<number>
  canAfford: boolean | ComputedRef<boolean>
}>()

const emit = defineEmits<{
  buy: []
}>()
</script>

<template>
  <button
    class="upgrade-btn"
    :disabled="!props.canAfford"
    :class="{ affordable: props.canAfford }"
    @click="emit('buy')"
  >
    <strong>{{ props.title }}</strong><br />
    {{ props.description }}<br />
    <small>Kostnad: {{ props.cost.toLocaleString() }}</small>
  </button>
</template>

<style scoped>
.upgrade-btn {
  display: block;
  width: 80%;
  max-width: 400px;
  margin: 1rem auto;
  padding: 1rem;
  font-size: 1.1rem;
  border-radius: 8px;
  border: 2px solid #ccc;
  background: white;
  color: #333;
  cursor: pointer;

  /* Alle endringer skal ha en myk overgang */
  transition: all 0.4s ease-in-out;
}

/* Når du har råd – pen gradient + effekt */
.upgrade-btn.affordable {
  background: linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%);
  color: white;
  border: none;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transform: translateY(-2px); /* Litt "løft" */
}

/* Hover-effekt kun når affordable */
.upgrade-btn.affordable:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
}

/* Disabled-stil */
.upgrade-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  background: #f0f0f0;
  color: #888;
  transform: none;
}
</style>