async function loadItems() {
    const res = await fetch('/api/items');
    const items = await res.json();
    const list = document.getElementById('list');
    list.innerHTML = items.map((i, index) =>
        `<li>
        ${i}
        <button onclick="updateItem(${index})">Edit</button> 
        <button onclick="deleteItem(${index})">Delete</button>
        </li>`
        ).join('');
}

async function addItem() {
    const name = document.getElementById('newItem').value;
    if (!name) return;
    await fetch('/api/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name })
    });
    document.getElementById('newItem').value = '';
    loadItems();
}

async function updateItem(index) {
    const name = prompt('Hva vil du endre den til?');
    if (!name) return;
    await fetch(`/api/items/${index}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name })
    });
    loadItems();
}

async function deleteItem(index) {
    await fetch(`/api/items/${index}`, { method: 'DELETE' });
    loadItems();
}

document.getElementById('addBtn').onclick = addItem;
loadItems();