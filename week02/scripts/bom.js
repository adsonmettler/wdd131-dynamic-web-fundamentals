
// Author: Adson Mettler do Nascimento

// DOM practice

// Variables
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');



// Event handling
button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        // Create document.createElement()
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        // Populate with textContent or innerHTML
        li.innerHTML = input.value;
        deleteButton.innerHTML = '❌';

        // Append
        li.appendChild(deleteButton);
        list.appendChild(li);

        // Clear input field
        input.value = '';

        // Delete event
        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
        });

        input.focus();
    }
});

