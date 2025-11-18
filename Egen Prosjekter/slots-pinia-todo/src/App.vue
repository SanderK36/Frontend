<script setup lang="ts">
import TodoList from './components/TodoList.vue';
import { useTodoStore } from './stores/todo';
import { ref, stop } from 'vue';

const store = useTodoStore()
const newTodo = ref('')

const addNew = () => {
  store.addTodo(newTodo.value)
  newTodo.value = ''
}
</script>

<template>
  <div class="app">
    <h1>Mine Todos</h1>

    <form @submit.prevent="addNew" class="add-form">
      <input
        v-model="newTodo"
        placeholder="Hva må du gjøre?"
        @keyup.enter="addNew"
      />
      <button type="submit">Legg til</button>
    </form>

    <TodoList v-slot="{ todo, toggle, remove }">
      <div
        class="todo-item"
        :class="{ completed: todo.completed }"
        @click="toggle"
      >
        <span class="text">{{ todo.text }}</span>
        <button @click.stop="remove" class="delete">Delete</button>
      </div>
    </TodoList>
  </div>
</template>

<style scoped>
.app {
  padding: 2rem;
  font-family: system-ui, sans-serif;
  max-width: 700px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  color: #4f46e5;
}

.add-form {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

input {
  flex: 1;
  padding: 0.8rem;
  font-size: 1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
}

button {
  padding: 0.8rem 1.5rem;
  background: #6366f1;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}

button:hover { background: #4f46e5; }

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin: 0.5rem 0;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: all 0.2s;
}

.todo-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}

.todo-item.completed {
  opacity: 0.7;
  text-decoration: line-through;
  background: #f0fdf4;
}

.text {
  flex: 1;
}

.delete {
  background: #ef4444;
  padding: 0.4rem 0.8rem;
  font-size: 0.8rem;
}
.delete:hover { background: #dc2626; }
</style>