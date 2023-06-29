const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', changeColor);

function changeColor() {
    const value = inputEl.value.trim().length;
    const input = Number(inputEl.getAttribute('data-length'));
    if (input === value) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
}
