import { defineStore } from "pinia"
import { ref, computed } from "vue"

export const useGameStore = defineStore('game', () => {
    const damagePoints = ref(0)
    const totalClicks = ref(0)

    const turrets = ref(0)
    const turretCost = ref(50)
    const turretDps = 2

    const clickPower = computed(() => 1 + turrets.value * 0.1)
    const dps = computed(() => turrets.value * turretDps)

    const addClick = () => {
        damagePoints.value += clickPower.value
        totalClicks.value += 1
    }

    const buyTurret = () => {
        if (damagePoints.value >= turretCost.value) {
            damagePoints.value -= turretCost.value
            turrets.value += 1
            turretCost.value = Math.round(turretCost.value * 1.15)
        }
    }

    const reset = () => {
        if (confirm("Are you sure you want to reset your progress?")) {
            damagePoints.value = 0
            totalClicks.value = 0
            turrets.value = 0
            turretCost.value = 50
        }
    }

    return {
        damagePoints,
        totalClicks,
        turrets,
        turretCost,
        clickPower,
        dps,
        addClick,
        buyTurret,
        reset
    }
},{
    persist: true
})