

document.getElementById("bold").addEventListener("click", function () {
    if (textArea.style.fontWeight === 'bold') {
        textArea.style.fontWeight = 'normal';
    } else {
        textArea.style.fontWeight = 'bold';
    }
});

document.getElementById('italic').addEventListener('click', function () {
    if (textArea.style.fontStyle === 'italic') {
        textArea.style.fontStyle = 'normal';
    } else {
        textArea.style.fontStyle = 'italic';
    }
});

document.getElementById('underline').addEventListener('click', function () {
    if (textArea.style.textDecoration === 'underline') {
        textArea.style.textDecoration = 'none';
    } else {
        textArea.style.textDecoration = 'underline';
    }
});

document.getElementById('left').addEventListener('click', function () {
    textArea.style.textAlign = 'left';
});

document.getElementById('center').addEventListener('click', function () {
    textArea.style.textAlign = 'center';
});

document.getElementById('right').addEventListener('click', function () {
    textArea.style.textAlign = 'right';
});

document.getElementById('justify').addEventListener('click', function () {
    textArea.style.textAlign = 'justify';
});


// Get the font size input, text color input, and text area
const fontSizeInput = document.getElementById('font_size');
const textColorInput = document.getElementById('text_color');
const textArea = document.getElementById('textArea');

// Add input event listeners to the font size and text color inputs
fontSizeInput.addEventListener('input', updateFontSize);
textColorInput.addEventListener('input', updateTextColor);

function updateFontSize() {
    const fontSize = `${fontSizeInput.value}px`;
    textArea.style.fontSize = fontSize;
}

function updateTextColor() {
    const textColor = textColorInput.value;
    textArea.style.color = textColor;
}

