// src/__tests__/gameStore.spec.ts
import { setActivePinia, createPinia } from 'pinia'
import { useGameStore } from '@/stores/gameStore'
import { describe, it, expect, beforeEach } from 'vitest'

describe('gameStore', () => {
  // Dette kjøres FØR hver eneste test – gir deg en "fersk" store hver gang
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('starter et nytt spill med riktig initial state', () => {
    const game = useGameStore()

    game.newGame()

    expect(game.secretNumber).toBeGreaterThanOrEqual(1)
    expect(game.secretNumber).toBeLessThanOrEqual(100)
    expect(game.attempts).toBe(0)
    expect(game.gameOver).toBe(false)
    expect(game.message).toBe('Gjett et tall mellom 1 og 100!')
    expect(game.previousGuesses).toEqual([])
  })

  it('øker antall forsøk og lagrer gjett når man gjetter feil', () => {
  const game = useGameStore()
  game.newGame()

  game.secretNumber = 42 // vi vet svaret

  game.guess = 50
  game.makeGuess()

  expect(game.attempts).toBe(1)
  expect(game.previousGuesses).toContain(50)
  expect(game.gameOver).toBe(false)
  expect(game.lastHint).toBe('Varm') // ← rettet her!
})

  it('oppdager riktig gjett og setter gameOver = true', () => {
    const game = useGameStore()
    game.newGame()
    game.secretNumber = 77 // vi jukser litt for å vite svaret

    game.guess = 77
    game.makeGuess()

    expect(game.gameOver).toBe(true)
    expect(game.message).toContain('Gratulerer')
    expect(game.message).toContain('1') // 1 forsøk
  })

  it('hindrer samme gjett flere ganger', () => {
    const game = useGameStore()
    game.newGame()
    game.secretNumber = 30

    game.guess = 55
    game.makeGuess() // første gang – ok
    game.guess = 55
    game.makeGuess() // andre gang – skal gi feilmelding

    expect(game.attempts).toBe(1) // forsøket økte ikke!
    expect(game.message).toBe('Du har allerede gjettet dette tallet!')
  })

  it('gir riktig hint basert på avstand', () => {
    const game = useGameStore()
    game.newGame()
    game.secretNumber = 50

    // Test alle nivåer
    game.guess = 50; game.makeGuess(); expect(game.lastHint).toBe('Riktig svar!')
    game.newGame(); game.secretNumber = 50

    game.guess = 48; game.makeGuess(); expect(game.lastHint).toBe('Veldig varm!')
    game.newGame(); game.secretNumber = 50

    game.guess = 42; game.makeGuess(); expect(game.lastHint).toBe('Varm')
    game.newGame(); game.secretNumber = 50

    game.guess = 35; game.makeGuess(); expect(game.lastHint).toBe('Lunken')
    game.newGame(); game.secretNumber = 50

    game.guess = 10; game.makeGuess(); expect(game.lastHint).toBe('Fryser!')
  })
})