
const notepadContent = document.getElementById('notepad-content');
const saveButton = document.getElementById('save-button');


notepadContent.value = localStorage.getItem('notepadContent') || '';


saveButton.addEventListener('click', function () {
    const content = notepadContent.value;
    localStorage.setItem('notepadContent', content);
    alert('Note saved!');
});