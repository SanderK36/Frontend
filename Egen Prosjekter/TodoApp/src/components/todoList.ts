import type { Todo } from '../types';

export const renderTodoList = (
  todos: Todo[],
  toggleTodo: (id: number) => void,
  deleteTodo: (id: number) => void
): HTMLElement => {
  const ul = document.createElement('ul');
  if (todos.length === 0) {
    const li = document.createElement('li');
    li.textContent = 'No todos yet';
    ul.appendChild(li);
    return ul;
  }

  todos.forEach(todo => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', () => toggleTodo(todo.id));

    const span = document.createElement('span');
    span.textContent = todo.text;
    if (todo.completed) {
      span.style.textDecoration = 'line-through';
    }

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteTodo(todo.id));

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);
    ul.appendChild(li);
  });

  return ul;
};