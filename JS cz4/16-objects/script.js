// const myObject = {
//     key: value,
//     key: value,
//     key: value
// }

const newUser = {
    name: 'Lisa',
    age: 23,

    car: {
        brand: 'Audi',
        model: 'A3',
        color: "czarny",
        // sound: function() {
        //     console.log('brum brum');
        // }

        // abbreviated form
        sound() {
            console.log('brum brum');
        }
    }
}

console.log(newUser);
console.log(newUser.name);
console.log(newUser.car.brand);

// METODY W OBIEKTACH

newUser.car.sound()

// DODAWANIE RTZECZY DO OBIEKTU

newUser.car.brand = 'BMW'
console.log("-----------------");
console.log("Adding new attribute to object after its definition:");
newUser['fav-color'] = 'niebieski'
console.log(newUser);

const dogName = "Drops"
const dogAge = 5

const dog = {
    name: dogName,
    age: dogAge,
    dogName: dogName,
    // albo krócej
    dogAge
}

console.log(dog);


// PĘTLA FOR IN
console.log("-----------------");
console.log("Pętla for in:");

const user = {
    name: 'Klaudia',
    age: 23,
    sex: 'female',
    'hair-color': 'blonde'
}

for (const data in user) {
    console.log(data + ' - ' + user[data]);
}

// THIS

console.log("-----------------");
console.log("THIS:");

const userr = {
    age: 23,
    printAge() {
        console.log(this.age);
    }
}

// jakby wpisać userr.age bnyłoby ok - ale jak zmienimy nazwę klasy to jest już lipa ...

userr.printAge()


// KONSTRUKTOR - generalnie nie korzystamy z samych konstruktorów tylko je wbudujemy w klasie
// zawsze piszemy je wielką literą (praktyka) 
console.log("-----------------");
console.log("KONSTRUKTOR:");

function User(name, age) {
    this.name = name
    this.age = age
    this.hello = function () {
        console.log(`Cześć ${this.name}`);
    }
}

// const oldUser = {
//     name: "Klaudia",
//     age: 23
// }

const oldUser = new User('Klaudia', 23)
console.log(oldUser);
oldUser.hello()

// pRoToTyP
console.log("-----------------");
console.log("PROTOTYP:");

function Oser(name, age) {
    this.name = name
    this.age = age
}

const oldUser1 = new Oser("Klaudia", 23)
const oldUser2 = new Oser("Lily", 34)
const oldUser3 = new Oser("Maje", 45)

console.log(oldUser1, oldUser2, oldUser3);

Oser.prototype.hello = function () {
    console.log(`Cześć ${this.name}`);
}

Oser.prototype.country = "Polska"

oldUser1.hello() 
oldUser2.hello() 
oldUser3.hello() 

console.log(oldUser1.country);

