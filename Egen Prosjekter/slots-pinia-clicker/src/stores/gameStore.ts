import { defineStore } from 'pinia';

export const useStore = defineStore('gameStore', {
    state: () => ({
        points: 0,
        clickPower: 1,
    }),

    actions: {
        addPoints() {
            this.points += this.clickPower
        },
        buyUpgrade() {
            const cost = 100
            if (this.points >= cost) {
                this.points -= cost
                this.clickPower += 1
            }
        }
    }
})