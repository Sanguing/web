btnExpand = document.querySelector('.arrow');
imageToExpand = document.querySelector('.item1');
arrowIcon = document.querySelector('.fas');

function expandImage() {
	imageToExpand.classList.toggle('show');
	if (imageToExpand.classList.contains('show')) {
		console.log('OK');
		btnExpand.style.rotate = '180deg';
	} else {
		console.log('Nie OK');
		btnExpand.style.rotate = '0deg';
	}
}

console.log(arrowIcon);
btnExpand.addEventListener('click', expandImage);
