const marqueeText = document.getElementById('marqueeText');

const texts = [
    { text: "\u00A0\u00A0Y O U\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0A R E\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u2009D R E A M I N G\u00A0\u00A0", duration: 2000, color: "pink"}, // 5 seconds
    { text: "\u00A0\u00A0Y O U\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0A R E\u00A0\u00A0\u00A0\u00A0\u00A0<span class='not'>NOT</span>\u00A0\u00A0\u00A0\u2009\u2009D R E A M I N G\u00A0\u00A0", duration: 750 } // 1 second
];

let currentIndex = 0;

function updateText() {
    marqueeText.innerHTML = texts[currentIndex].text;
    marqueeText.style.color = texts[currentIndex].color;
    setTimeout(nextText, texts[currentIndex].duration);
}
function nextText() {
    currentIndex = (currentIndex + 1) % texts.length;
    updateText();
}

updateText();