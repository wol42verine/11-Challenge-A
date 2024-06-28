//Added notes functionality
let noteTitle;
let noteText;
let saveNoteBtn;
let newNoteBtn;
let clearBtn;

if (window.location.pathname === '/notes') {
    noteTitle = document.querySelector('.note-title');
    noteText = document.querySelector('.note-textarea');
    saveNoteBtn = document.querySelector('.save-note');
    newNoteBtn = document.querySelector('.new-note');
    clearBtn = document.querySelector('.clear-btn');


    // Ensure buttons are hidden initially
    hide(saveNoteBtn);
    hide(newNoteBtn);
    hide(clearBtn);
}

// Show an element by adding the .show class
const show = (elem) => {
    elem.classList.add('show');
};

// Hide an element by removing the .show class
const hide = (elem) => {
    elem.classList.remove('show');
};

// Activate Save button if there is text in the note title and body
const handleRenderSaveBtn = () => {
    if (!noteTitle.value.trim() || !noteText.value.trim()) {
        hide(saveNoteBtn);
    } else {
        show(saveNoteBtn);
    }
};

// Event listeners for typing in the note title or text
if (window.location.pathname === '/notes') {
    noteTitle.addEventListener('keyup', handleRenderSaveBtn);
    noteText.addEventListener('keyup', handleRenderSaveBtn);

    // Initially show the New Note and Clear Form buttons
    show(newNoteBtn);
    show(clearBtn);

}