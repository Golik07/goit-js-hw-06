const controlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

controlEl.addEventListener('input', fontSizeControl);
fontSizeControl();

function fontSizeControl() {
    textEl.style.fontSize = controlEl.value + 'px';
}
