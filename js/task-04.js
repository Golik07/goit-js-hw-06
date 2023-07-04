const btnDecrementEl = document.querySelector('[data-action="decrement"');
const btnIncrementEl = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

let counterValue = 0;

const decrementCallBack = () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
};
btnDecrementEl.addEventListener('click', decrementCallBack);

const IncrementCallBack = () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
};
btnIncrementEl.addEventListener('click', IncrementCallBack);
