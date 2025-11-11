import type { Todo } from "./types";

export const addTodo = (todos: Todo[], text: string): Todo[] => {
    const newTodo: Todo = {
        id: todos.length ? Math.max(...todos.map(t => t.id)) + 1 : 1,
        text,
        completed: false,
    };
    return [...todos, newTodo];
};

export const toggleTodo = (todos: Todo[], id: number): Todo[] => {
    return todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
}