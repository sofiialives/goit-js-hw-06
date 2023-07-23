const counterValueEl = document.getElementById('value');
const decrBtn = document.querySelector('button[data-action="decrement"]');
const incrBtn = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

function updateCounterValue(){
    counterValueEl.textContent = counterValue;
}

function increaseCounterValue(){
    counterValue++;
    updateCounterValue();
}

function dicreaseCounterValue(){
    counterValue--;
    updateCounterValue();
}

decrBtn.addEventListener('click', dicreaseCounterValue);
incrBtn.addEventListener('click', increaseCounterValue)
