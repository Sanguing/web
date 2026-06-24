const sizeUp = document.querySelector('.size-up');
const sizeDown = document.querySelector('.size-down');
const color = document.querySelector('.color');
const p = document.querySelector('p');

let fontSize = 30;

function bigText() {
	p.style.fontSize = fontSize + 'px';
	fontSize += 5;
}

function smallText() {
	p.style.fontSize = fontSize + 'px';
	fontSize -= 5;
	console.log(fontSize);
}

function changeColor() {
	p.classList.toggle('golden-color');
}

sizeUp.addEventListener('click', bigText);
sizeDown.addEventListener('click', smallText);
color.addEventListener('click', changeColor);
