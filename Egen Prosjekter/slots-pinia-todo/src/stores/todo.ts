import { defineStore } from "pinia";
import { ref } from 'vue'

export interface Todo {
    id: number
    text: string
    completed: boolean
}

export const useTodoStore = defineStore('todo', () => {
    const todos = ref<Todo[]>([
        { id: 1, text: 'Lære Vue', completed: true},
        { id: 2, text: 'Lære Pinia', completed: true},
        { id: 3, text: 'Lære scoped slots', completed: false},
    ])

    const addTodo = (text: string) => {
        if (!text.trim()) return
        todos.value.push({
            id: Date.now(),
            text: text.trim(),
            completed: false,
        })
    }

    const toggleTodo = (id:number) => {
        const todo = todos.value.find(t => t.id === id)
        if(todo) todo.completed = !todo.completed
    }

    const deleteTodo = (id: number) => {
        todos.value = todos.value.filter(t => t.id !== id)
    }

    return {todos, addTodo, toggleTodo, deleteTodo}
})