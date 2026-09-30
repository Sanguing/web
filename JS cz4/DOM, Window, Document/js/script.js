console.log(document);
console.log(window);
window.console.log('cześć')

// POBIERANIE ELEMENTÓW NA STRONIE

// getElementById

const test = document.getElementById('item')
console.log(test);

// getElementByTagName

const test2 = document.getElementsByTagName('li')
console.log(test2);

// getElementByClassName

const test3 = document.getElementsByClassName('test')
console.log(test3);

// querySelector (ES6)

const test4 = document.querySelector(`ul li`)  // li wewnątrz ul listy (tylko pierwsze)
const test5 = document.querySelector(`#item`)
console.log(test4);
console.log(test5);

const test6 = document.querySelector('ul')   
console.log(test6);
const test6Item = test6.querySelector('li')     // nie przeszukuj całego dokumentu, a jedynie wewnątrz wcześniejszcego wydarzenia
console.log(test6Item);

// querySelectorAll (ES6)

const liItems = document.querySelectorAll('li')
console.log(liItems);

// querySelectory nie wspierają kolekcji (1 % przypadków), wtedy korzystamy z geta
// kolekcje - elementy dodawane dynamiecznie (za pomocą JS) - patrz niżej

const ulList = document.querySelector('ul')
const newLi = document.createElement('li')
ulList.appendChild(newLi).textContent = 'asdf'
console.log(liItems.length);
console.log(test2.length);

// ZADANIE
console.log('ZADANIE:');

const heading = document.querySelector('h1')
const tab = document.querySelectorAll('p')
const jakasZmienna = document.querySelector('.test')
const jakasZmiennaDwa = document.querySelector('.test #test')
// albo
const jakasZmiennaTrzy = jakasZmienna.querySelector('#test')

console.log(heading);
console.log(tab);
console.log(jakasZmienna, jakasZmiennaDwa);


// PS zanim zaczniesz next lekcje to przypomnij sobie poprzednie lekcje z poprzedniego foldery
