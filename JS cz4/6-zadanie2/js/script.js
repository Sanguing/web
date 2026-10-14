const p1 = document.querySelector('.p1')
const p2 = document.querySelector('.p2')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const square = document.querySelector('.square')

const hello = () => console.log('cześć');
const fun2 = () => {
    square.style.background = 'tomato'
}
const fun3 = () => {
    square.style.background = 'royalblue'
}
const swap = () => {
    p1.classList.toggle('show')
    p2.classList.toggle('show')
}

console.log(square);

btn1.addEventListener('dblclick', hello)
square.addEventListener('mouseenter', fun2)
square.addEventListener('mouseleave', fun3)
btn2.addEventListener('click', swap)