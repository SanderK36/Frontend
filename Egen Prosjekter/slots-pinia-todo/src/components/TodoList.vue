<script setup lang="ts">
import { useTodoStore } from '@/stores/todo'

const store = useTodoStore()
</script>

<template>
  <div class="todo-list">
    <slot
      v-for="todo in store.todos"
      :key="todo.id"
      :todo="todo"
      :toggle="() => store.toggleTodo(todo.id)"
      :remove="() => store.deleteTodo(todo.id)"
    ></slot>

    <div v-if="store.todos.length === 0" class="empty">
      <slot name="empty">
        <p>Ingen todos ennå - legg til din første!</p>
      </slot>
    </div>
  </div>
</template>

<style scoped>
.todo-list {
  max-width: 600px;
  margin: 0 auto;
}
.empty {
  text-align: center;
  padding: 3rem;
  color: #666;
  font-style: italic;
}
</style>