// src/stores/gameStore.ts
import { defineStore } from 'pinia'

// TypeScript-interface for state – gir deg autofullfør i VS Code
interface GameState {
  secretNumber: number
  guess: number | null
  attempts: number
  message: string          // hovedmelding øverst (instruksjon, feil, gratulasjon)
  lastHint: string         // hint som bare vises ETTER gjett
  gameOver: boolean
  previousGuesses: number[]
}

export const useGameStore = defineStore('game', {
  state: (): GameState => ({
    secretNumber: 0,
    guess: null,
    attempts: 0,
    message: 'Gjett et tall mellom 1 og 100!',
    lastHint: '',
    gameOver: false,
    previousGuesses: []
  }),

  actions: {
    // Starter nytt spill
    newGame() {
      this.secretNumber = Math.floor(Math.random() * 100) + 1
      this.guess = null
      this.attempts = 0
      this.message = 'Gjett et tall mellom 1 og 100!'
      this.lastHint = ''
      this.gameOver = false
      this.previousGuesses = []
    },

    // Hovedlogikken – kjøres når du trykker "Gjett!"
    makeGuess() {
      // Sjekk at gjettet er gyldig
      if (!this.guess || this.guess < 1 || this.guess > 100) {
        this.message = 'Vennligst skriv et tall mellom 1 og 100!'
        this.lastHint = ''
        return
      }

      // Hindre samme tall flere ganger
      if (this.previousGuesses.includes(this.guess)) {
        this.message = 'Du har allerede gjettet dette tallet!'
        this.lastHint = ''
        this.guess = null
        return
      }

      // Tell forsøk og lagre gjettet
      this.attempts++
      this.previousGuesses.push(this.guess)

      // Riktig gjett?
      if (this.guess === this.secretNumber) {
        this.gameOver = true
        this.message = `Gratulerer! Du brukte ${this.attempts} forsøk!`
        this.lastHint = 'Riktig svar!'
      } else {
        // Beregn hvor nærme spilleren er
        const diff = Math.abs(this.guess - this.secretNumber)

        if (diff <= 5) this.lastHint = 'Veldig varm!'
        else if (diff <= 10) this.lastHint = 'Varm'
        else if (diff <= 20) this.lastHint = 'Lunken'
        else if (diff <= 35) this.lastHint = 'Kald'
        else this.lastHint = 'Fryser!'

        // Vis hintet som hovedmelding også (du kan velge å vise det separat hvis du vil)
        this.message = this.lastHint
      }

      // Tøm input-feltet for neste runde
      this.guess = null
    }
  }
})