const lime = document.querySelector('.lime');
const blue = document.querySelector('.blue');
const gold = document.querySelector('.gold');

const infoLime = () => {
	console.log('%clime', 'color: lime; text-transform: uppercase');
};

const infoBlue = () => {
	console.log('%cblue', 'color: royalblue; text-transform: uppercase');
};

const infoGold = () => {
	console.log('%cgold', 'color: gold; text-transform: uppercase');
};

lime.addEventListener('click', infoLime, { capture: true });
blue.addEventListener('click', infoBlue, { capture: true });
gold.addEventListener('click', infoGold, { capture: true });

// https://www.w3.org/TR/uievents/#event-flow - dokumentacja

// stop propagation - jak klikam złoty nie chce triggerować blue (patrz dokuemntacja)

const infoGoldTwo = (e) => {
	e.stopPropagation();
	console.log('%cwykonuję jakiś kod', 'color: gold; text-transform: uppercase');
};

const infoBlueTwo = () => {
	console.log(
		'%cten kod nie miał się wykonać',
		'color: royalblue; text-transform: uppercase',
	);
};

gold.addEventListener('click', infoGoldTwo);
blue.addEventListener('click', infoBlueTwo);

// alternatywą dla stopPropagation jest w css dodać opcję do klasy pointer-events: none;

// DELEGACJA ZDARZEŃ

// const allCircles = document.querySelectorAll('.circle')
// // const allCircles = document.getElementsByClassName('circle')
// allCircles.forEach(circle => circle.addEventListener('click', () => console.log(circle)))

// const newCircle = document.createElement('div')
// newCircle.classList.add('circle', 'purple')
// gold.append(newCircle)
// console.log(allCircles.length);

lime.addEventListener('click', e => {
	if (e.target.matches('.circle2')) { // albo np. może być: e.target.classList.contains('circle2')
		console.log(e.target);
	}
});

// STYLOWANIE W JS - nie powinniśmy używać - od tego jest CSS !

// div.style.fontSize = '48' // nie font-size bo to minus (matma)
// div.style.backgroundColor = 'tomato'
// div.style.padding = '20px 40px'
// div.style.borderRadius = '8px'


// Add, remove & toggle class

const addBtn = document.querySelector('.add')
const remBtn = document.querySelector('.remove')
const togBtn = document.querySelector('.toggle')
const text = document.querySelector('.paragraph')

const addClass = () => {
	text.classList.add('test')
}

const remClass = () => {
	text.classList.remove('test')
}

const togClass = () => {
	text.classList.toggle('test')
}

addBtn.addEventListener('click', addClass)
remBtn.addEventListener('click', remClass)
togBtn.addEventListener('click', togClass)
