import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface Position { x: number; y: number }

export const useGameStore = defineStore('game', () => {
  // State
  const level = ref<'level0' | 'level1'>('level0')
  const playerPos = ref<Position>({ x: 1, y: 1 })
  const sanity = ref(100)
  const gameOver = ref(false)
  const maze = ref<number[][]>([])

  // Generer labyrint (1=vegg, 0=gulv, 2=dør)
  const generateMaze = (size: number = 20): void => {
    const newMaze: number[][] = Array.from({ length: size }, () => Array(size).fill(1)) // Vegger
    
    // Start posisjon (sikker!)
    newMaze[1][1] = 0
    
    // Random dør på kant
    const doorSide = Math.floor(Math.random() * 4)
    let doorX = 0, doorY = 0
    if (doorSide === 0) { 
      doorX = Math.floor(Math.random() * size) 
      doorY = size - 1 
    } else if (doorSide === 1) { 
      doorX = size - 1 
      doorY = Math.floor(Math.random() * size) 
    } else if (doorSide === 2) { 
      doorX = Math.floor(Math.random() * size) 
      doorY = 0 
    } else { 
      doorX = 0 
      doorY = Math.floor(Math.random() * size) 
    }
    
    newMaze[doorY][doorX] = 2 // Dør
    maze.value = newMaze
  }

  const movePlayer = (dx: number, dy: number): void => {
    if (gameOver.value) return
    
    // Sjekk at maze er initialisert
    if (maze.value.length === 0) {
      generateMaze()
      return
    }
    
    const newX = playerPos.value.x + dx
    const newY = playerPos.value.y + dy
    
    // **SIKKER CHECK** – sjekk både length FØR du bruker [0]
    const mazeSize = maze.value.length
    if (newX >= 0 && newX < mazeSize && newY >= 0 && newY < mazeSize) {
      const targetTile = maze.value[newY]?.[newX]
      
      if (targetTile !== undefined && targetTile !== 1) { // Ikke vegg
        playerPos.value = { x: newX, y: newY }
        
        if (targetTile === 2) { // Dør!
          level.value = level.value === 'level0' ? 'level1' : 'level0'
          generateMaze()
          playerPos.value = { x: 1, y: 1 }
        }
      }
    }
    
    sanity.value -= 0.1 // Drain sanity per move
    if (sanity.value <= 0) gameOver.value = true
  }

  const tickSanity = (): void => {
    if (!gameOver.value) sanity.value -= 0.2
    if (sanity.value <= 0) gameOver.value = true
  }

  const restart = (): void => {
    sanity.value = 100
    gameOver.value = false
    generateMaze()
    playerPos.value = { x: 1, y: 1 }
  }

  // **INIT** – kall alltid!
  generateMaze()

  return { 
    level, 
    playerPos, 
    sanity, 
    gameOver, 
    maze, 
    movePlayer, 
    tickSanity, 
    restart 
  }
})