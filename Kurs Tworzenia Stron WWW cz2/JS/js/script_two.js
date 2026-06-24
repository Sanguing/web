btn1 = document.querySelector('#btn1');
btn2 = document.querySelector('.btn2');

function handleClick() {
	console.log('Kliknięto przycisk 1');
}

function addNumbers() {
	console.log(2 + 2);
}

btn1.addEventListener('click', handleClick);
btn2.addEventListener('click', addNumbers);
