import { ref } from 'vue'
import { defineStore } from 'pinia'

interface Upgrade {
  id: string
  name: string
  description: string
  baseCost: number
  costMultiplier: number
  owned: number
  effectPerLevel: number
  type: 'clickPower' | 'autoClicker'
}

export const useGameStore = defineStore('game', () => {
  const score = ref(0)
  const clickPower = ref(1)
  const clicksPerSecond = ref(0)

  const upgrades = ref<Upgrade[]>([
    {
      id: 'multiplier',
      name: 'Double Click Power',
      description: 'Multiplies your click power.',
      baseCost: 25,
      costMultiplier: 5,
      owned: 0,
      effectPerLevel: 1,
      type: 'clickPower'
    },
    {
      id: 'autoClicker',
      name: 'Auto-clicker',
      description: '+1 click(s) per second.',
      baseCost: 50,
      costMultiplier: 3.5,
      owned: 0,
      effectPerLevel: 1,
      type: 'autoClicker'
    },
    {
      id: 'megaClicker',
      name: 'Mega Clicker',
      description: '10+ to your click power.',
      baseCost: 2500,
      costMultiplier: 4,
      owned: 0,
      effectPerLevel: 10,
      type: 'clickPower'
    }
  ])

  const getCost = (upgrade: Upgrade) => {
    return Math.floor(upgrade.baseCost * Math.pow(upgrade.costMultiplier, upgrade.owned))
  }

  const canBuy = (upgrade: Upgrade) => score.value >= getCost(upgrade)

  const buyUpgrade = (upgradeId: string) => {
  const upgrade = upgrades.value.find(u => u.id === upgradeId)
  if (!upgrade || !canBuy(upgrade)) return

  const cost = getCost(upgrade)
  score.value -= cost
  upgrade.owned += 1

  if (upgrade.type === 'clickPower') {
    if (upgrade.id === 'multiplier') {
      clickPower.value *= 2  // multiplikativ dobling
    } else {
      // Alle andre clickPower-oppgraderinger er additive
      clickPower.value += upgrade.effectPerLevel
    }
  } else if (upgrade.type === 'autoClicker') {
    const nextBonus = upgrade.owned  // nå: 1,2,3,... (siden owned økte allerede)
    clicksPerSecond.value += nextBonus
  }
}

  const click = () => {
    score.value += clickPower.value
  }

  return {
    score,
    clickPower,
    clicksPerSecond,
    upgrades,
    getCost,
    canBuy,
    buyUpgrade,
    click
  }
})