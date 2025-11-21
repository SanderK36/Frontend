<script setup lang="ts">
import { useStore } from '@/stores/gameStore'
import BigButton from '@/components/BigButton.vue'
import { computed } from 'vue'

const store = useStore()
const canBuy = computed(() => store.points >= store.upgradeCost)
</script>

<template>
  <div class="game">
    <!-- Header – poeng og power -->
    <header class="header">
      <div class="points">{{ store.points.toLocaleString('nb-NO') }}</div>
      <div class="power">Power {{ store.clickPower }}</div>
    </header>

    <!-- Midten – stor klikk-knapp -->
    <main class="main">
      <BigButton class="clicker">
        <div class="coin">Coin</div>
        <div class="plus">+{{ store.clickPower }}</div>
      </BigButton>
    </main>

    <!-- Footer – oppgradering -->
    <footer class="footer">
      <button
        class="upgrade"
        :class="{ canAfford: canBuy }"
        @click="store.buyUpgrade()"
        :disabled="!canBuy"
      >
        <span class="label">Stronger Clicks!</span>
        <span class="cost">{{ store.upgradeCost.toLocaleString('nb-NO') }}</span>
      </button>

      <button
        class="upgrade"
        :class="{ canAfford: canBuy }"
        @click="store.buyUpgrade()"
        :disabled="!canBuy"
      >
        <span class="label">Even Stronger Clicks!!</span>
        <span class="cost">{{ store.upgradeCost.toLocaleString('nb-NO') }}</span>
      </button>
    </footer>
  </div>
</template>

<style scoped>
/* 100 % fullskjerm – INGEN SCROLLING NOENSINNE */
html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.game {
  height: 100dvh;           /* Beste for mobil */
  height: 100vh;            /* Fallback */
  width: 100vw;
  background: linear-gradient(135deg, #1a1a2e, #16213e);
  color: #fff;
  font-family: system-ui, -apple-system, sans-serif;
  display: grid;
  grid-template-rows: auto 1fr auto;
  overflow: hidden;
  touch-action: manipulation; /* Hindrer scroll på mobil ved klikk */
}

/* Header */
.header {
  text-align: center;
  padding: 1.5rem 1rem 1rem;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255,255,255,0.05);
}
.points {
  font-size: 3.2rem;
  font-weight: 900;
  letter-spacing: -1px;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
}
.power {
  font-size: 1.1rem;
  opacity: 0.85;
  margin-top: 0.4rem;
}

/* Midten – klikk-knapp */
.main {
  display: flex;
  justify-content: center;
  align-items: center;
}
.clicker {
  width: 260px;
  height: 260px;
  border-radius: 50%;
  background: linear-gradient(145deg, #f39c12, #e67e22);
  box-shadow: 
    0 20px 50px rgba(0, 0, 0, 0.5),
    inset 0 -10px 20px rgba(0, 0, 0, 0.3),
    0 0 70px rgba(255, 152, 0, 0.5);
  transition: transform 0.12s ease, box-shadow 0.12s ease;
  animation: pulse 4s infinite ease-in-out;
}
.clicker:active {
  transform: scale(0.92);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.6), 0 0 90px rgba(255, 152, 0, 0.7);
}
.coin {
  font-size: 10rem;
  filter: drop-shadow(0 8px 16px rgba(0,0,0,0.5));
}
.plus {
  font-size: 2.8rem;
  font-weight: 900;
  margin-top: -1.2rem;
  text-shadow: 0 4px 12px rgba(0,0,0,0.7);
}
@keyframes pulse {
  0%, 100% { box-shadow: 0 20px 50px rgba(0,0,0,0.5), 0 0 70px rgba(255,152,0,0.5); }
  50% { box-shadow: 0 20px 50px rgba(0,0,0,0.6), 0 0 100px rgba(255,152,0,0.8); }
}

/* Footer – oppgradering */
.footer {
  padding: 1rem;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(12px);
  border-top: 1px solid rgba(255,255,255,0.05);
}
.upgrade {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 1.3rem 1.5rem;
  background: linear-gradient(90deg, #2d3436, #636e72);
  border: none;
  border-radius: 16px;
  color: white;
  font-size: 1.25rem;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
}
.upgrade.canAfford {
  background: linear-gradient(90deg, #00b894, #00cec9);
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(0, 200, 150, 0.5);
}
.upgrade:disabled {
  opacity: 0.5;
  transform: none;
  cursor: not-allowed;
}
.upgrade .cost {
  font-size: 1.1rem;
  opacity: 0.9;
}
</style>