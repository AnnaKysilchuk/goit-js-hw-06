let counterValue = 0;

const refs = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
    totalValue: document.querySelector('#value'),
}

refs.decrementBtn.addEventListener('click', onDecrementBtnClick);

refs.incrementBtn.addEventListener('click', onIncrementBtnClick);

function onDecrementBtnClick() {
    counterValue -= 1;
    refs.totalValue.textContent = counterValue;
}

function onIncrementBtnClick() {
    counterValue += 1;
    refs.totalValue.textContent = counterValue;
}


