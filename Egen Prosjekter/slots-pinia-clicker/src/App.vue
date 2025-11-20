<script setup lang="ts">
import { useStore } from '@/stores/gameStore';
import BigButton from '@/components/BigButton.vue';
import { computed } from 'vue';

const store = useStore();
const canBuy = computed(() => store.points >= 100)
</script>

<template>
  <div class="game">
    <h1>Pina + Slots clicker!</h1>

    <p class="score">
      Points: {{ store.points }}
    </p>
    <p>Click Power: {{ store.clickPower }}</p>

    <BigButton>
      <div style="font-size: 6rem;">Test</div>
      <div style="font-size: 2rem;">{{ store.clickPower }}</div>
    </BigButton>

    <button
    class="upgrade"
    @click="store.buyUpgrade()"
    :disabled="!canBuy"
    >
    Stronger Clicks! ({{ store.upgradeCost }} points)
    </button>
  </div>
</template>

<style scoped>
.game{
  text-align: center;
  padding: 2rem;
  font-family: Arial;
}

.score {
  font-size: 3rem;
  font-weight: bold;
  color: #e67e22;
}

.upgrade {
  margin-top: 2rem;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 10px;
}
.upgrade:disabled { background: #999; }
</style>