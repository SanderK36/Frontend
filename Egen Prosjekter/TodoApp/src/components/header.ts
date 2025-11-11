export const renderHeader = (): HTMLElement => {
    const header = document.createElement('h1');
    header.textContent = 'Todo List';
    return header;
}