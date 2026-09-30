// alert('Cześć z pliku script.js)

/*
console.log(object);
console.log(object);
console.log(object);
console.log(object);
console.log(object);
*/

console.log('Cześć');
console.log('Cześć');
console.log('Cześć');

const firstName = 'Tomek';
let age = 12;
age = 18;
const petName = 'Fafik';

console.log('Cześć jestem ${firstName}, ao jest ${petName} - mój pies.');

const favColor = 'niebieski';
const favMeal = 'schabowy';

let currentCar = 'Audi';
let secondName = 'Ania';
let ageTwo = 24;
let ulubionyKolor = 'czerwony';

console.log(typeof ageTwo);

const quote = "Jegomość powiedział - 'kocham schabowe'.";
console.log(quote);
console.log(typeof quote);

// METODY

console.log(quote.length);
console.log(quote.toUpperCase());
const newMsg = quote.toUpperCase();


const date = new Date()
console.log(date);
console.log(date.toLocaleDateString('pl'));

const username = 'maciej';

const newUsername = username.charAt(3).toUpperCase()
console.log(newUsername);
console.log(username.slice(1));
console.log(username.slice(2));
console.log(username.slice(3));

/*
 Metody do wykorzystania:
 charAt()
 includes()
 replace()* podchwytliwe 🙂 
 slice()
 split()
 toLowerCase()
 toUpperCase()
*/
 
const text1 = 'powiększ mnie!'
const text2 = 'ZAPISZ MNIE MAŁYMI LITERAMI'
const text3 = '$#%#^ wytnij te dziwne znaki na początku!'
const text4 = 'sprawdź, czy zawieram słowo "czy"'
const text5 = 'wyLoguj w konsoli tylko literę "L", która znajduje się w wyrazie "Wyloguj"'
const text6 = 'pies zamień każde słowo pies, na słowo kot pies'
const text7 = 'podziel, ten, string, od, przecinków'

console.log(text1.toUpperCase());
console.log(text2.toLowerCase());
console.log(text3.slice(6));
console.log(text4.includes('czy'));
console.log(text5.charAt(2));
console.log(text6.replaceAll('pies', 'kot'));
console.log(text7.split(','));


const num1 = 23;
const num2 = '45'

console.log(num1 + num2);
console.log(num2 * 1);
const num3 = 'abcd';
console.log(0/0);

const num4 = 1351.124
console.log(num4);
console.log(num4.toFixed(2));

const num5 = '123'
console.log(parseInt(num5));


// instrukcje warunkowe
const pass = 'jabnfgjanfjfnasf'
if (pass.length > 10 && pass.includes('!')) {
    console.log('Masz dobre hasło.');
} else if (pass.length > 10 && !pass.includes('!')) {
    console.log('Hasło nie zawiera wykrzynika');
} else {
    console.log('Masz za krótkie hasło.');
}

const color = 'blue'

if (color == 'blue') {
    console.log('blue true');
} else if (color =='red') {
    console.log('red true');
} else {
    console.log('false false');
}

const day = 'sobota'
switch (day){
    case 'poniedziałek':
        console.log('Dziś jest poniedziałek');
    case 'wtorek':
        console.log('Dziś jest wtorek');
    case 'sroda':
        console.log('Dziś jest sroda');
    case 'czwartek':
        console.log('Dziś jest czwartek');
    case 'piatek':
        console.log('Dziś jest piatek');
    case 'sobota':
        console.log('Dziś jest sobota');
    case 'niedziela':
        console.log('Dziś jest niedziela');
    default:
        console.log('Niezdefiniowano');
}

// operator warunkowy
const x = 100;
const newX = (x >= 20) ? `${x} >= 20` : `${x} < 20`;
console.log(newX);

const isLoggedIn = true
function loggedIn() {
    console.log('Uytkownik jest zalogowany!');
}

function loggedOut() {
    console.log('Uzytkownik nie jest zalogowany');
}

if (isLoggedIn) {
    loggedIn()
} else {
    loggedOut()
}

isLoggedIn ? loggedIn() : loggedOut()



// zadanie 1.
const xx = 50;
const y = 30;

if (xx > y) {
    console.log(`${xx} jest większe od ${y}`);
}

// zadanie 2.
const colorTwo = 'blue'
const newColor = 'green'

if (colorTwo === newColor) {
    console.log('Kolory się zgadzają');
} else {
    console.log('Kolory się nie zgadzają.');
}

// zadanie 3.

const xxx = 100
const yyy = 50

if (xxx > yyy) {
    console.log('x > y');
} else if (xxx < yyy) {
    console.log('x < y');
} else {
    console.log('x = y');
}

// zadanie 4.

const promo = '20%'

switch (promo) {
    case '10%':
        console.log('Dziś mamy 10% zniżki');
        break
    case '20%':
        console.log('Dziś mamy 20% zniżki');
        break
    case '30%':
        console.log('Dziś mamy 30% zniżki');
        break
    default: 
        console.log(`Dziś mamy ${promo} promocję.`);
}

// zadanie 5.

const xxxx = 10;

const answer = (xxxx % 2) ? `X jest nieparzyste` : `X jest parzyste`
console.log(answer);

// zadanie 6.
const xxxxx = 50;
let answerr
if (xxxxx >= 100) {
    answerr = 'X >= 100'
} else if (xxxxx < 100 && xxxxx > 30) {
    answerr = 'X jest średniakiem'
} else if (xxxxx < 30) {
    answerr = 'X jest mały'
}

console.log(answerr.toUpperCase());

// PĘTLE
const animals = ['a', 'b', 'c', 'd', 'e', 'f']

for (let i = 0 ; i < animals.length; i+=1) {
    console.log(animals[i]);
}

console.log('while:');

let i = 0
while (i < animals.length) {
    console.log(animals[i]);
    i+=1;
}

console.log('do while');
i = 0;
do  {
    i+=1;
    console.log(i);
} while (i < animals.length)

console.log('FOR OF');
const numbers = [1, 2, 3, 4, 5]

for (const number of numbers) {
    console.log(number * 2);
}

// ZADANIE 1
const cities = ['poznan', 'irkuck', 'moskwa']
for (let i = 0 ; i < cities.length ; i++) {
    console.log(`To miasto nazywa się ${cities[i].toUpperCase()}`);
}
// ZADANIE 2
let t = 0
while (t <= 10) {
    console.log(t);
    t+=2 
}
// ZADANIE 3
let tt = 20
do {
    tt -= 3
} while ( tt > 0)

console.log(tt);

// ZADANIE 4

const numss = [5, 8, 10, 23, 48, 60]

for (const num of numss) {
    if (num % 2 == 0) {
        console.log('%cPARZYSTA', 'background-color: yellow; color: #222');
    } else {
        console.log('%cNIEPARZYSTA', 'background: red; color: #222');
    }
    console.log(num / 5);
}

// TABLICE
console.log('--------------------');
console.log('TABLICE:');
const nums = [1, 2, 3, 4, 5]
console.log(nums);
nums.unshift(100, 200)
console.log(nums);
nums.shift()
console.log(nums);

// unshift - dodaje elementy na początku tablicy
// shift - usuwa el. z indeksem 0
// push - dodaje na końcu
// pop - usuwa z końca

nums.push('gold')
console.log(nums);
nums.pop()
console.log(nums);

function multiply(x) {
    return x * 2
}

// mapowanie tablicy po funkcji - zwraca nową tablicę (forEach natomiast działa na ten samej)
const newNumbers = nums.map(multiply)
console.log(newNumbers);

// concat
const abc = [ 'a', 'b', 'c']
const newAbc = nums.concat(6, 7, 8, true, abc)
console.log(newAbc);
console.log(nums);

// spread
console.log(abc);
console.log(...abc);

const drinks = ['pepsi', 'kawa', 'sok']
const meals = ['schabowy', 'spaghetti', 'zupa']
const menu = [...drinks, ...meals]
console.log(menu);
const menu2 = drinks.concat(meals)
const menu3 = drinks + meals
console.log(menu2);
console.log(menu3);

//zadanie 1
console.log('ZADANIE 1:');
const numbs = [0, 0, 1, 1, 2, 2, 2]
const colors = ['red', 'green', 'blue', true, 123]
const cars = [123, true, 'audi', 'bmw', 'mercedes', 'ferrari', '🤷‍♂️', '👀']

const numbs2 = numbs.slice(0, 2)
console.log(numbs2);
const numbs3 = numbs.slice(-3)
console.log(numbs3);
const randomStuff = colors.splice(3);
console.log('randomStuff: ', randomStuff);
console.log('colors: ', colors);

// 2 argument mówi nie do której częścl ale ile elementów !!! 3 argument doda element do pierwotnej list y
const newCars = cars.splice(2, 4)
console.log(newCars);

console.log("METODA FILTER");
const numberss = [0, 23, 48, 175, 2, 34, 11]

function numberr(x) {
    return x % 2 === 0
}

//=====================================================================
// callback = funkcja którą przekazujemy jako argument do innej funkcji
//=====================================================================

console.log(numberss.filter(numberr));
console.log('forEach:');
numberss.forEach(numm => console.log(numm * 5))

console.log('include test');
console.log(numberss.includes(0));
console.log('indexof');
console.log(numberss.indexOf(48));
// -1 jak nie zawiera

// map vs forEach

console.log('Map vs forEach');
const newNums = [0, 1, 2, 3]
const newNewNums = newNums.forEach(nummm => nummm * 2)
console.log(newNewNums);
const newNewNewNums = newNums.map(number => number * 2)
console.log(newNewNewNums);

// zadanie 1

console.log('ZADANIE 1');
const letters = ['c', 'd']
letters.unshift('a', 'b')
letters.push('e', 'f')
console.log(letters);
console.log(letters.includes('c'));


// zadanie 2

console.log('ZADANIE 2');
const z11 = [1, 2, 3]
const z12 = ['a',  'b', 'c']
const z13 = [...z11, ...z12]
const z14 = z11.concat(z12)
console.log(z13);
console.log(z14);

// zadanie 3
console.log('ZADANIE 3');
const z3 = [1, 5, 13, 26, 48]
const z31 = z3.map(number => number * 5)
console.log(z31);

for (let i = 0; i < z31.length; i++) {
    if (z31[i] % 2 == 0) {
        console.log(`Liczba parzysta: ${z31[i]}`);
    } else if (z31[i] % 2 == 1) {
        console.log(`Liczba nieparzysta: ${z31[i]}`);
    }
}

// LEPIEJ BYŁO ZROBIĆ FOR OFem

// zadanie 4
console.log('ZADANIE 4');
const z4 = ['blue']
z4.unshift('red')
z4.push('green')
console.log(z4);

for (const color of z4) {
    console.log('Mój ulubiony kolor to:', color.charAt(0).toUpperCase()+color.slice(1));
}

// zadanie 5
console.log('ZADANIE 5');
const z5 = "Audi, Mercedes, BMW, Nissan, Dodge"
const tab = z5.split(', ')
console.log(tab);

if (tab.length > 3) {
    console.log('JEST OK');
} else {
    console.log("NIE JEST OK");
}

if (tab.includes("Audi")) {
    tab.push('Opel')
} else {
    tab.pop()
}

console.log(tab);

// FUNKCJE
console.log('______________________________');
console.log('FUNKCJE');
console.log('______________________________');

// deklaracja funkcji
function test() {
    console.log("cześć");
}
test()

// wyrażenie funkcyjne
const hw = function () {
    console.log('cześć');
}
hw()

// funkcja anonimowa
const heading = document.querySelector('h1')
heading.addEventListener('click', function() {
    console.log('Kliknięto mnie!');
})

// jak robić poprawnie (można używać we forEach bo są zgodne z ich logiką)

function tst() {
    console.log('Kliknięto mnie');
}
const heading2 = document.querySelector('h1')
heading2.addEventListener('click', test)

// funkcja strzałkowa (standard od 2015); przy pojedynczym argumencie nie trzeba () dla argumentów

const arrowFunction = (name) => {
    console.log(`Mam na imię ${name}`);
}

function notArrowFunction(name) {
    console.log(`Mam na imię ${name}`);
}

arrowFunction("Jan")
notArrowFunction("Jan")

// jeszcze szybciej
const fastArrowFunction = name => console.log(`Mam na imię ${name}`);
fastArrowFunction('Jan')
const multipleArgsArrowFunction = (name, age) => console.log(`Mam na imię ${name} i mam ${age} lat.`);

// one-linery można robić bez nawiasów klamrowych, tak samo z jak return to nawias klamrowy ale w 1linerze mozna skipnąć kkeyword return i nawias klamrowy - jak return TO MUSI BYĆ nawias klamrowy

// nfn - shortcut do funkcji strzałk.

// DOMYŚLNY PARAMETRY FUNKCJI
const hello = (name = 'drogi użytkowniku') => {
    console.log(`Cześć ${name}, jak się masz?`);
}
hello()
// let może być UNDEFINED, a const nie
let ages
hello('Koksu')

// operator REST

// SPREAD - przypomnienie
const t1 = [1, 2, 3, 4]
console.log(t1);
console.log(...t1);

// REST
const t2 = (x, y , ...z) => {
    console.log(x, y, z)
    console.log(z.map(el => el * 2));
}

t2(13, 468, 468, 4, 9813, 2, 1, 13, 3, 1)



// ZAKRESY - tldr: zasada GREP
console.log('ZAKRESY');


const name = "Lisa"
const t3 = () => {
    const name = 'Lilia'
    console.log(`NAME w funkcji - ${name}`);
}
t3()

console.log(`NAME poza funkcją - ${name}`);

// FOREACH + CALLBACK - powtórzenie

const numberrss = [ 0.5, 4, 'abc']
const nammess = ['Lisa', 'Lily', 'Adam', 'Przemek']

numberrss.forEach(num => console.log(num * num))
const bigNames  = nammess.map(name => name.toUpperCase())
console.log(bigNames);

const showBigNames = name => {
    console.log(name.toUpperCase());
}
nammess.forEach(showBigNames)
console.log('--------------');
nammess.forEach(el => console.log(el.toUpperCase()))

// ZADANIE 1
console.log('ZADANIE 1:')
let score;
const fz1 = () => console.log(`Liczba ${score} jest parzysta`);
const fz2 = () => console.log(`Liczba ${score} jest nieparzysta`);

const add = (a, b) => {
    score = a + b
    return score % 2 === 0 ? fz1(score) : fz2(score);
}

add(5, 2)
console.log(score);

// ZADANIE 2
console.log(`ZADANIE 2:`);
let celsius, temp;
celsius = 20;

const fahrenheit = c => c * 1.8 + 32
tmp = fahrenheit(celsius)
console.log(`${celsius}oC = ${tmp}oF`);

// ZADANIE 3
console.log(`ZADANIE 3:`);
const v3 = 10;
const v4 = [];

for (let i = 0 ; i < v3;  i++) {
    v4.push(i)
}

const v5 = x => {
    if (x % 3 == 0 && x != 0) {
        console.log(`${x} jest podzielna przez 3`);
    } else {
        console.log(`${x} jest niepodzielna przez 3 lub równa 0`);
    }
}

v4.forEach(el => v5(el))