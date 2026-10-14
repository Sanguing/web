const test = () => {
	console.log('asdf');
};

// test()
// setTimeout(test, 5000); // wykonuje sie raz po opoznieniu

// setInterval(test, 1000) // powtarza sie co okreslony czas


// STRICT MODE - zazwyczaj dodawanyu przez gulpa czy cos takiego
'use strics' // jest to takie zabezpieczenie, żeby JS nie wybaczał wielu błędów jakie wybacza zazwyczaj (charakterystyka języka)
const colors = ['res', 'green', 'blue']

for (color of colors) {         
    console.log(color);
}

// ALERT, CONFIRM & PROMPT - ogólnie przestarzałe funkcje, raczej się z tego nie korzysta

// alert('cześć') 

// confirm('cześć') // więcej opcji

// if (confirm('cześć')) {
//     console.log('ok');
// } else {
//     console.log('nie to nie');
// }

// const name = prompt('cześć, jak se masz ???')
// console.log(name);


// obiekt MATH
console.log('OBIEKTY MATH');
console.log(Math);
console.log(Math.max(5, 10, 3, 33));
console.log(Math.PI);
console.log(Math.random());
console.log(Math.floor(5.3));
const number = Math.random() * 10
console.log(Math.floor(number));

// Atrybuty w JS

console.log('ATTRIBUTES');
const link = document.querySelector('a')
const img = document.querySelector('img')
const p = document.querySelector('p')

link.setAttribute('href', '#')
link.setAttribute('target', '_blank')
// dodaje / ustawia atrybut i przypisuje do niego wartość

console.log(img.getAttribute('src'));
 
console.log(p.hasAttribute('src'));

p.removeAttribute('style')

// DATA ATRYBUTY (np. do zamian id)
console.log('DATA ATTRIBUTES');

const div = document.querySelector('div')
const div2 = document.querySelector('[data-number="23"]')
console.log(div);
console.log(div2);
console.log(div2.dataset);
console.log(div2.dataset.number);
console.log(div2.dataset.moreInfo);


// RELACJE RODZINNE
console.log('RELACJE RODZINNE');
const grandpa = document.querySelector('.grandparent')
// console.log(grandpa.querySelector('.parent'));
// console.log(grandpa.querySelector('.child'));
const middleChild = document.querySelector('.middle-child')
const prevSibling = middleChild.previousElementSibling
console.log(prevSibling);
console.log(middleChild);
const nextSibling = middleChild.nextElementSibling
console.log(nextSibling);

const parentEl = middleChild.parentElement
console.log(parentEl);

const grandpaEl = middleChild.parentElement.parentElement
console.log(grandpaEl);

console.log(middleChild.closest('p'));
console.log(middleChild.closest('div'));
