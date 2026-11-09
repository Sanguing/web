b1 = document.querySelector(".btn-1")
b2 = document.querySelector(".btn-2")
b3 = document.querySelector(".btn-3")

function Meal(name, price) {
    this.name = name
    this.price = price

}

const obj1 = new Meal('strogonoff', 130)
const obj2 = new Meal('borsch', 190)
const obj3 = new Meal('carrot', 120)

Meal.prototype.display = function () {
    console.log(`${this.name.charAt(0).toUpperCase() + this.name.slice(1)} kosztuje ${this.price}.`);
}

b1.addEventListener('click', function () {
    console.log(this);
})

// trzeba dać bind po this w tym przypadku nie wskacuj na obiebt obj1 ale na b1
b1.addEventListener('click', obj1.display.bind(obj1))
b2.addEventListener('click', obj2.display.bind(obj2))
b3.addEventListener('click', obj3.display.bind(obj3))