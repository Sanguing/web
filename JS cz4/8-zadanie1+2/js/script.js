const img = document.querySelector('img')
img.setAttribute('src', 'src/cat.jpg')
img.setAttribute('alt', 'Losowy Obrazek z Internetu')


const smth = () => {
    console.log('asdf');
}

// setTimeout(smth, 2000)

const ul = document.querySelector('ul')
let li = document.querySelector('li')
for(let i = 0; i < ul.children.length; i++) {
    li.textContent = i + 1
    li.setAttribute('data-atrybut-ID', i + 1) // li.dataset.id = i + 1
    li = li.nextElementSibling
}

const li3 = document.querySelector('[data-atrybut-ID = "3"]')
console.log(li3);
const wrapper = li3.closest('div')
console.log(wrapper);


// ID jako zmienna - nie używać go za często

console.log(test);


// konsola

console.log(window.console);
console.warn('warning')
console.error('error123')

console.table(['123', 123])
const people = [
    {
        name: 'Lisa',
        age: 23
    },
    {
        name: 'Jan',
        age: undefined,
        fav: null
    }
]

console.table(people)