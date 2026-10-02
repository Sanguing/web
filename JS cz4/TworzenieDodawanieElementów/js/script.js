const ulList = document.createElement('ul')
const liItem = document.createElement('li')
liItem.textContent = 'Cześć'
document.body.appendChild(ulList)
ulList.appendChild(liItem)

const div = document.querySelector('div')
const paragraph = document.createElement('p')
paragraph.textContent = 'Chcę mi się jeść.'
div.appendChild(paragraph)
const headingTwo = document.createElement('h2')

// append-childem nie dodasz tekstu
// append można dodać string'a oraz wiele elementów - jest nowszy

div.append(paragraph, headingTwo, 'cześć')

// ----------------------------------------
// inner/outer-HTML, innerText, textContent

const btn = document.querySelector('button')
console.log(btn.outerHTML);
console.log(btn.innerHTML);
// btn.outerHTML = '123' // zamienia przycisk na te
// btn.innerHTML = '<li>123</li>'
// document.body.innerHTML = ''

console.log(btn.innerText);
console.log(btn.textContent);

btn.textContent = 'abcd'
btn.innerText = 'abcd!'

// jaka różnica pomiędzy innerText a textContent ? 
// textContent - pokaże wszystko pomimo styli

// innerHTML nie można używać w miejscach gdzie uzytkownik coś wprowadza (np inputy) - uzytkownik może ingerować w naszą stronę internetową !!!!!!!!!!!!!!!!!!!



// USUWANIE ELEMENTÓW

// div.removeChild(paragraph)


// addEventListener

const btn1 = document.querySelector('.btn-1')
const btn2 = document.querySelector('.btn-2')
const btn3 = document.querySelector('.btn-3')

btn1.addEventListener('click', function () {
    console.log('Kliknięto mnie!');
})

btn2.addEventListener('mouseover', () =>  console.log('Najechano na mnie...'))

const test = () => {
    console.log('double click');
}

btn3.addEventListener('dblclick', test)

///LISTENERY ZAWSZE TRZYMAĆ NA SAMYM DOLE< pod deklaracją zmiennych funkcji etc

const btns = document.querySelectorAll('button')
console.log(btns);

const smile = () => {
    console.log(':)');
}

// btns.addEventListener('click', smile) - źle

btns.forEach(btn => btn.addEventListener('click', smile))



// e.target -> element na który klikamy / e.target.classList -> wszystkie klasy , które posiada obiekt klikany


const btnn = document.querySelector('button')
const tst = (e) => {
    console.log(e.target.classList);
    console.log(e.target.offsetTop);
}
btnn.addEventListener('click', tst)