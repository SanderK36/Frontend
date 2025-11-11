import type { Todo } from "./types";
import { addTodo, toggleTodo } from "./todoUtils";

const input = document.getElementById("todo-input") as HTMLInputElement;
const addButton = document.getElementById("add-button") as HTMLButtonElement;
const todoList = document.getElementById("todo-liste") as HTMLUListElement;

let todos: Todo[] = [];

const renderTodos = () => {
    todoList.innerHTML = "";
    todos.forEach(todo => {
        const li = document.createElement("li");
        li.textContent = todo.text;
        li.style.textDecoration = todo.completed ? "line-through" : "none";
        li.addEventListener("click", () => {
            todos = toggleTodo(todos, todo.id);
            renderTodos();
        });
        todoList.appendChild(li);
    });
};

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const text = input.value.trim();
    if (text) {
      todos = addTodo(todos, text);
      input.value = '';
      renderTodos();
    }
  }
});