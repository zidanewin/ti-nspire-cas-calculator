// Updated script.js to work with the new TI-Nspire CX II design layout

function initialize() {
    // Set up the new layout
    document.getElementById('header').style.backgroundColor = '#f1f1f1';
    updateHeaderLayout();
    updateButtonStyles();
}

function updateHeaderLayout() {
    // New header layout adjustments
    const header = document.getElementById('header');
    header.innerHTML = '<h1>TI-Nspire CX II</h1>';
}

function updateButtonStyles() {
    // Update button styles to match new design
    let buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.style.borderRadius = '8px';
        button.style.padding = '10px 15px';
    });
}

// Call the initialize function when the script loads
initialize();