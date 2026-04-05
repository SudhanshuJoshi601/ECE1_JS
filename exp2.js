const card = document.querySelector('.card');
const heading = document.getElementById('mainHeading');
const paragraph = document.getElementById('sampleParagraph');
const textInput = document.getElementById('textInput');

let originalFontSize = parseFloat(window.getComputedStyle(paragraph).fontSize);
let currentFontSize = originalFontSize;


document.getElementById('updateHeadingBtn').addEventListener('click', function () {
    const newText = textInput.value.trim();

    if (newText !== "") {
        heading.textContent = newText;
        textInput.value = "";
    } else {
        alert("Please enter text in the input box first.");
    }
});


document.getElementById('changeColorBtn').addEventListener('click', function () {
    const randomHex = Math.floor(Math.random() * 16777215).toString(16);
    const finalColor = "#" + randomHex.padStart(6, '0');
    card.style.backgroundColor = finalColor;
});


document.getElementById('increaseFontBtn').addEventListener('click', function () {
    if (currentFontSize < 40) {
        currentFontSize += 2;
        paragraph.style.fontSize = currentFontSize + "px";
    } else {
        alert("Maximum paragraph size reached.");
    }
});


document.getElementById('toggleParaBtn').addEventListener('click', function () {
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
});


document.getElementById('resetBtn').addEventListener('click', function () {
    heading.textContent = "Welcome to JavaScript Lab";
    card.style.backgroundColor = "white";

    currentFontSize = originalFontSize;
    paragraph.style.fontSize = originalFontSize + "px";

    paragraph.style.display = "block";
    textInput.value = "";
});