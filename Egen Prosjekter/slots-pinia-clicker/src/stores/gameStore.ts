// src/stores/gameStore.ts
import { defineStore } from 'pinia'
import { UPGRADES, type Upgrade } from '@/data/upgrades'

export const useStore = defineStore('gameStore', {
  state: () => ({
    points: 0,
    clickPower: 1,
    pointsPerSecond: 0,
    ownedUpgrades: {} as Record<string, number>,
  }),

  getters: {
    upgradeCost: (state) => (upgrade: Upgrade): number => {
      const level = state.ownedUpgrades[upgrade.id] || 0
      return Math.floor(upgrade.cost * Math.pow(1.15, level))
    },

    // FIKS: Kall upgradeCost som en funksjon!
    canAfford: (state) => (upgrade: Upgrade): boolean => {
      return state.points >= (state.upgradeCost(upgrade))
      //                      ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
      //                      Må ha parentes rundt for sikkerhet!
    },

    upgradeLevel: (state) => (upgrade: Upgrade): number => {
      return state.ownedUpgrades[upgrade.id] || 0
    },
  },

  actions: {
    addPoints() {
      this.points += this.clickPower
    },

    buyUpgrade(upgrade: Upgrade) {
      const cost = this.upgradeCost(upgrade)
      if (this.points >= cost) {
        this.points -= cost
        this.ownedUpgrades[upgrade.id] = (this.ownedUpgrades[upgrade.id] || 0) + 1

        if (upgrade.increase) this.clickPower += upgrade.increase
        if (upgrade.cps) this.pointsPerSecond += upgrade.cps
      }
    },

    tick() {
      this.points += this.pointsPerSecond
    },

    save() {
      localStorage.setItem('clicker-save', JSON.stringify(this.$state))
    },

    load() {
      const saved = localStorage.getItem('clicker-save')
      if (saved) {
        this.$patch(JSON.parse(saved))
      }
    },
  },
})