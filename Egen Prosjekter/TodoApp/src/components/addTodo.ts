export const renderAddTodo = (addTodo: (text: string) => void): HTMLElement => {
  const form = document.createElement('form');
  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Add a todo';
  
  const button = document.createElement('button');
  button.textContent = 'Add';
  button.type = 'submit';

  form.appendChild(input);
  form.appendChild(button);

  form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    if (input.value.trim()) {
      addTodo(input.value.trim());
      input.value = '';
    }
  });

  return form;
};