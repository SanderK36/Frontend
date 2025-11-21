// src/data/upgrades.ts

// Hver oppgradering må ha disse feltene
export interface Upgrade {
  id: string                  // Unik nøkkel (brukes i store)
  name: string                // Navn som vises
  description: string         // Hva den gjør
  cost: number                // Startkostnad
  increase?: number           // Hvor mye + per klikk (valgfritt)
  cps?: number                // Hvor mange poeng per sekund (valgfritt)
  icon: string                // Emoji eller tekst til ikon
  maxLevel?: number           // Valgfritt: maks nivå (f.eks 100 eller Infinity)
}

export const UPGRADES: Upgrade[] = [
  {
    id: 'strongerClicks',
    name: 'Stronger Clicks',
    description: '+1 per klikk',
    cost: 100,
    increase: 1,
    icon: 'Flexed Biceps',
  },
  {
    id: 'megaClicks',
    name: 'Mega Clicks',
    description: '+10 per klikk',
    cost: 2_500,
    increase: 10,
    icon: 'Lightning',
  },
  {
    id: 'ultraPower',
    name: 'Ultra Power',
    description: '+100 per klikk',
    cost: 50_000,
    increase: 100,
    icon: 'Fire',
  },
  {
    id: 'autoClicker',
    name: 'Auto Clicker',
    description: '+1 per sekund',
    cost: 500,
    cps: 1,
    icon: 'Robot',
  },
  {
    id: 'clickFarm',
    name: 'Click Farm',
    description: '+10 per sekund',
    cost: 5_000,
    cps: 10,
    icon: 'Tractor',
  },
  {
    id: 'clickFactory',
    name: 'Click Factory',
    description: '+100 per sekund',
    cost: 100_000,
    cps: 100,
    icon: 'Factory',
  },
  {
    id: 'quantumClicker',
    name: 'Quantum Clicker',
    description: '+1 000 per sekund',
    cost: 10_000_000,
    cps: 1000,
    icon: 'Sparkles',
  },
]