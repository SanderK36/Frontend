import './style.css';
import type { Todo } from "./types";
import { renderHeader } from "./components/header.ts";
import { renderAddTodo } from "./components/addTodo.ts";
import { renderTodoList } from "./components/todoList.ts";

const app = document.getElementById('app') as HTMLElement;
let todos: Todo[] = [];

const addTodo = (text: string): void => {
    const newTodo: Todo = {id: Date.now(), text, completed: false};
    todos = [...todos, newTodo];
    render();
}

const toggleTodo = (id: number): void => {
    todos = todos.map(todo =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo
    );
    render();
}

const deleteTodo = (id: number): void => {
    todos = todos.filter(todo => todo.id !== id);
    render();
}

const render = (): void => {
    app.innerHTML = '';
    app.appendChild(renderHeader());
    app.appendChild(renderAddTodo(addTodo));
    app.appendChild(renderTodoList(todos, toggleTodo, deleteTodo));
}
render();