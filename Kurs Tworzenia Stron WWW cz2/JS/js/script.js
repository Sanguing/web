alert('Cześć! ');

// var - deprecated
// let, const

const color = 'niebieski';
// typ string
let num = 24;
// typ number

const favColor = 'red';
const meal = 'schabowy';
const favDrink1 = 'pepsi';
const fnc = 123;

const name = 'Ian';
const age = 29;

console.log(`Cześć, jestem ${name} i mam ${age} lat.`);

let SCORE = 3;
if (15 % 2 == 0) {
	SCORE = 0;
} else {
	SCORE = 1;
}

console.log(SCORE);

let NUM1 = 8;
NUM1 += 1;
NUM1 += 1;
console.log(NUM1);

let X = 5;
let Y = 10;

console.log((X *= Y), (X /= Y));

const lst = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < lst.length; i++) {
	console.log(lst[i]);
}

function f1(arg1, arg2, arg3) {
	console.log(arg1 + arg2 + arg3);
}

f1(1, 2, 3);

if (lst.length > 5) {
	console.log(true);
} else {
	console.log(false);
}

console.log(`Tablica z cyframi ma ${lst.length} elementów.`);

// POBIERANIE ELEMENTÓW

const p = document.querySelector('p');
console.log(p);

const q = document.querySelector('.test');
console.log(q);

const w = document.querySelector('#btn');
console.log(w);

const li = document.querySelectorAll('li');
console.log(li);
console.log(li[2]);

const pall = document.querySelectorAll('p');
console.log(pall);
