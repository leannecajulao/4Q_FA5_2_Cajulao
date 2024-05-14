let contacts = []; 
const list = document.getElementById('contactsList');
const nameInput = document.getElementById('nameInput');
const contactForm = document.getElementById('contactForm');
const removeButton = document.getElementById('removeButton');

// Function to update the contacts list
function updateContactsList() {
    list.innerHTML = '';
    contacts.forEach((contact, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = contact;
        list.appendChild(listItem);
    });
}

// Event listener for the form submission
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = nameInput.value.trim();
    if (name) {
        if (contacts.length >= 7) {
            alert('Contact list is full. The oldest contact will be removed.');
            contacts.shift();
        }
        contacts.push(name); 
        updateContactsList();
        nameInput.value = ''; 
    }
});

// Event listener for the remove button
removeButton.addEventListener('click', function() {
    if (contacts.length > 0) {
        contacts.pop(); // Remove the last contact
        updateContactsList();
    }
});

// Initialize the contacts list
updateContactsList();
