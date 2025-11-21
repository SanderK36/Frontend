<script setup lang="ts">
import { useStore } from '@/stores/gameStore';
const store = useStore();

defineProps<{
    disabled?: boolean;
}>();
</script>

<template>
    <button
    class="big-btn"
    @click ="store.addPoints()"
    :disabled="disabled"
    >
    Click (+{{ store.clickPower }})
    <slots/>
    </button>
</template>

<style scoped>
.big-btn {
  background: #ff9800;
  color: white;
  font-size: 3rem;
  padding: 2rem;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0 8px 0 #e68900;
  margin: 2rem;
}
.big-btn:active {
  transform: translateY(4px);
  box-shadow: 0 4px 0 #e68900;
}
.big-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
}
</style>