// console.log(this); // pokaże window


// this w zwykłej funkcji wskazuje na obiekty, który jest na lewo od kropki
const person = {
    name: 'Lisa',
    'fav-meal': 'kopytka',
    address: {
        city: 'Kraków',
        'zip-code': '00-000',
        showCity: function() {
            console.log(this.city);
        },
        showInfo() {
            console.log(this);
            console.log(this['fav-meal']);
        }
    }
}

person.address.showCity()
person.address.showInfo()

// this w konstruktorze wskazuje na obiekt, stworzony na podstawie konstruktora

function Food(name) {
    this.name = name
}

const meal = new Food('schabowy')
const meal2 = new Food('pepsi')

console.log(meal, meal2);

// cześć 2
// this w listenerach

const btns = document.querySelectorAll('button')

btns.forEach(btn =>
     btn.addEventListener('click', e => {
    console.log(this);
    console.log('----');
    console.log(e.target);
    console.log('----');
}))

// this w f strzałkowej - nie dzia

const ob = {
    number: 123, 
    showNumber() {
        console.log(this.number);
    },
    // nie zadziała tj. poniżej, trzbea opakować w zwykłą funkcję
    // showNumberTwo: () => {
    //     console.log(this);
    // }

    showNumberTwo() {
        const test = () => {
            console.log(this.number);
            console.log(this);
        }
        test()
    }

}

ob.showNumber()
ob.showNumberTwo()


// BIND
console.log('----------');
console.log("BIND:");
function test() {
    console.log(this);
    console.log(this.name);
}

const car1 = {
    name: "Audi",
}

const car2 = {
    name: "Dodge",
}

const car3 = {
    name: "Nissan",
}
// drugi nawias to wywołanie funkcji jakby
test.bind(car1)()


// call & apply
console.log('----------');
console.log('call&apply');
const movie = {
    title: 'Avengers',
}

function showMovie(price, cinema) {
    console.log(`Film ${this.title}, cena: ${price}, kinp: ${cinema}.`);
}

showMovie(133, 'SuperKino1')
// this wskazuje ofc na window, wiec nie poda

// call (OBIEKT, ARGUMENTY)
showMovie.call(movie, 35, 'superKino2')
// apply (OBIEKT, TABLICA)
showMovie.apply(movie, [35, 'superKino2'])

// podpina pod 