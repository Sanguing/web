const divTest = document.body.querySelector('.test')
const ulList = document.createElement('ul')

for(let i = 0; i < 10; i++) {
    const liItem = document.createElement('li')
    liItem.innerText = i
    ulList.append(liItem);
}

console.log(ulList);
divTest.appendChild(ulList)
const li10 = ulList.querySelector('li:last-child')
console.log(li10);

// li10.classList.add('last-el')
// li10.innerHTML = "Jestem ostatnim elementem."

li10.textContent = "Jestem ostatnim elementem."
li10.style.backgroundColor = 'royalblue'
li10.style.padding = '20px 40px'
li10.style.fontSize = '48px'