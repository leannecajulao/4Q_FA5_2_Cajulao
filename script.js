document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('nameInput').value.trim();
    if (name) {
        const list = document.getElementById('contactsList');
        const listItem = document.createElement('li');
        listItem.textContent = name;
        list.appendChild(listItem);
        document.getElementById('nameInput').value = ''; 
        checkContactLimit();
    }
});

document.getElementById('removeButton').addEventListener('click', function() {
    const list = document.getElementById('contactsList');
    if (list.lastChild) { 
        list.removeChild(list.lastChild); 
    }
    checkContactLimit();
});

function checkContactLimit() {
    const list = document.getElementById('contactsList');
    if (list.children.length > 7) {
        alert('Contact list is full. The oldest contact will be removed.');
        list.removeChild(list.firstChild); 
    }
}
