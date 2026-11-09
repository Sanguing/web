// constructor function
console.log('----------------------');
console.log('constructor approach:');
console.log('----------------------');
function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.sayHi = function () {
	console.log(`Cześć, jestem ${this.name}`);
};

Person.prototype.showAge = function () {
	console.log(`Mam ${this.age} lata.`);
};

const person1 = new Person('Majek', 23);
person1.sayHi();
person1.showAge();


console.log('----------------------');
console.log('class approach:');
console.log('----------------------');

class Person2 {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	sayHi() {
		console.log(`Cześć, jestem ${this.name}`);
	}

	showAge() {
		console.log(`Mam ${this.age} lata.`);
	}
}

const person2 = new Person2('Ania', 23)
person2.sayHi()
person2.showAge()


console.log('----------------------');
console.log('dziedziczenie, extends & super');
console.log('----------------------');

class Animal {
    constructor(name) {
        this.name
    }
    
    sound() {
        console.log(`Zwierzak robi 'hauhau'.`);
    }
}

class Dog extends Animal {
    constructor(name, age) {
        super(name)                 // calls parent
        this.age = age
    }

    test() {
        console.log('test');
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name)
    }

    sound() {
        console.log("miau");
    }
}

const dog = new Dog('Drops', 6)
dog.sound()
console.log(dog);
dog.test()

const testAnimal = new Animal('pies')
const cat = new Cat('kot')
console.log(cat);
cat.sound()

console.log('----------------------');
console.log('object assign');
console.log('----------------------');

const user = {
    name: 'Lily',
    age: 23
}

const pet = {
    name: 'Drops',
    type: 'dog'
}

const test = {
    name: 'test'
}

const userInfo = Object.assign(user, pet)
console.log(user, pet);
console.log(userInfo);          // jedno z name zostaje nadpisane
console.log(user);              // lily zostało wywalone

// ASSIGN przypisuje to co jest po prawej stronie do lewej strony
// tak nie robimy - dlatego:

const correctUserInfo = Object.assign({}, pet, test)
console.log(pet, test);

// w ten sposób nic nie stracimy

const userTwo = {
    name: 'Lily',
    age: 23
}

// prost kopia jak chcemy zachowac oryginal i cos zmienic w drugiej np.
const userCopy = Object.assign({}, userTwo)
console.log(userCopy);

console.log('----------------------');
console.log('destrukturyzacja obiektów');
console.log('----------------------');

// nie mylić z destruktorami - tutaj zadaniem jest ekstrakcja danych z klasy
// destrukturyzacja = rozpakowywanie

const person = {
    name: 'Lily',
    age: 23,
    job: 'DJ',
    car: {
        brand: "Dodge",
        model: "Viper"
    }

}

const showInfo = ({job, age, name}) => {
    // const {age, name, job} = person     // takie samo jak w klasie

    console.log(`${person.name} pracuje jako ${person.job} i ma ${person.age} lata`);
}

showInfo(person)

const showInfo2 = ({car: { brand, model }}) => {
    console.log(`Jej samochód to ${brand} ${model}.`);
}
showInfo2(person)

// to samo inaczej

const showInfo3 = () => {
    const {car: {brand, model}} = person
    console.log(`Jej samochód to ${brand} ${model}.`);
}

showInfo3()

console.log('----------------------');
console.log('destrukturyzacja tablic');
console.log('----------------------');

const colors = ['red', 'green', 'blue']

const firstColor = colors[0]
const secondColor = colors[1]

const [first, second] = colors

console.log(firstColor, secondColor);
console.log(first, second);