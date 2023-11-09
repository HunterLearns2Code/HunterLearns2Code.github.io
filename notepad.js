// JavaScript for the notepad page
const notepadContent = document.getElementById('notepad-content');
const saveButton = document.getElementById('save-button');

// Load saved content from localStorage (if available)
notepadContent.value = localStorage.getItem('notepadContent') || '';

// Save content to localStorage when the "Save" button is clicked
saveButton.addEventListener('click', function () {
    const content = notepadContent.value;
    localStorage.setItem('notepadContent', content);
    alert('Note saved!');
});