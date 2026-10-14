const convBtn = document.querySelector('.conv');
const resetBtn = document.querySelector('.reset');
const changeBtn = document.querySelector('.change');
const spanOne = document.querySelector('.one');
const spanTwo = document.querySelector('.two');
const result = document.querySelector('.result');
const input = document.querySelector('#converter');

let mode = 'toFahrenheit';

const toCels = (value) => (value - 32) * (5 / 9);
const toFah = (value) => (9 / 5) * value + 32;

const exec = () => {
    console.log(input);
	const value = parseFloat(input.value.replace(',', '.'));
	const converted = mode === 'toFahrenheit' ? toFah(value) : toCels(value);
	console.log(`${mode}: ${value} -> ${converted}`);
	result.textContent = converted.toFixed(2);
    input.value = ''
};

const changeFunc = () => {
	if (mode == 'toFahrenheit') {
		spanOne.textContent = '°F';
		spanTwo.textContent = '°C';
        result.textContent = ''
		mode = 'toCelsius';
	} else {
		spanOne.textContent = '°C';
		spanTwo.textContent = '°F';
        result.textContent = ''
		mode = 'toFahrenheit';
	}
};

const reset = () => {
	input.value = '';
	result.textContent = '';
};

convBtn.addEventListener('click', exec);
resetBtn.addEventListener('click', reset);
changeBtn.addEventListener('click', changeFunc);
