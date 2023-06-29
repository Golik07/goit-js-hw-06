const bodyEl = document.querySelector('body');
const colorEl = document.querySelector('.color');
const btnEl = document.querySelector('.change-color');

btnEl.addEventListener('click', getRandomHexColor);
colorEl.textContent.btnEl;
function getRandomHexColor() {
    const randomColor = `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
    colorEl.textContent = randomColor;
    bodyEl.style.backgroundColor = randomColor;
}

// btnEl.addEventListener('click', getRandomHexColorBtn);
// function getRandomHexColorBtn() {
//     const randomColor = `#${Math.floor(Math.random() * 16777215)
//         .toString(16)
//         .padStart(6, 0)}`;
//     btnEl.style.backgroundColor = randomColor;
//     colorEl.style.color = randomColor;
// }
