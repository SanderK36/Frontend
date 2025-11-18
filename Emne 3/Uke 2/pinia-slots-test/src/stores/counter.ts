import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0 as number,
    name: 'Anonym' as string,
    isAwesome: true as boolean,
  }),

  actions: {
    increment() {
      this.count++
    },
    decrement(){
      this.count--
    },
    setName(newName: string) {
      this.name = newName
    }
  }
})