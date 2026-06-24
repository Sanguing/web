const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('.btn2');
const square = document.querySelector('.color');
const btn3 = document.querySelector('.remove-color');

function redColor() {
	square.classList.toggle('red');
}

function blueColor() {
	square.classList.add('blue');
	square.classList.remove('red');
}

btn1.addEventListener('click', redColor);
btn2.addEventListener('click', blueColor);

function restoreColor() {
	square.classList.remove('blue');
	square.classList.remove('red');
}

btn3.addEventListener('click', restoreColor);
