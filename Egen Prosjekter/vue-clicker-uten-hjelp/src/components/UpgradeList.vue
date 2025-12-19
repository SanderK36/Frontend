<script setup lang="ts">
import UpgradeButton from './UpgradeButton.vue'
import { useGameStore } from '../stores/gameStore'

const game = useGameStore()
</script>

<template>
  <section class="upgrades">
    <h2>Upgrades!</h2>

    <UpgradeButton
      v-for="upgrade in game.upgrades"
      :key="upgrade.id"
      :title="upgrade.name"
      :description="
        upgrade.id === 'multiplier' ? `Doubles your click power → ${game.clickPower * 2}x` : upgrade.type === 'clickPower' ? `+${upgrade.effectPerLevel} Click power each level (total bonus: ${upgrade.owned * upgrade.effectPerLevel})` : `Auto-clickers: ${game.clicksPerSecond}/sek`
      "
      :cost="game.getCost(upgrade)"
      :can-afford="game.canBuy(upgrade)"
      @buy="game.buyUpgrade(upgrade.id)"
    />
  </section>
</template>

<style scoped>
.upgrades h2 {
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
}
</style>