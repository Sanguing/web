const sizeUpBtn = document.querySelector('.sizeUp')
const sizeDownBtn = document.querySelector('.sizeDown')
const colorBtn = document.querySelector('.color')
const text = document.querySelector('p')
const getSize = () => parseFloat(getComputedStyle(text).fontSize)

const colors = ['red', 'blue', 'royalblue', 'tomato', 'green', 'lime', 'pink', 'white', 'gold', 'orange', 'yellow', 'brown']


const sizeUp = (limit) => {
    console.log('pressed');
    const size = getSize()
    if (size < limit) {
        text.style.fontSize = size + 4 + 'px'
    }
}

const sizeDown = (limit) => {
    const size = getSize()
    console.log(typeof(text.style.fontSize));
    if (size > limit) {
        text.style.fontSize = size - 4 + 'px'
    }
}

const changeColor = (listOfColors) => {
    console.log(listOfColors.length);
    const x = Math.floor(Math.random() * listOfColors.length)
    console.log(x);
    text.style.color = listOfColors[x]
}

sizeUpBtn.addEventListener('click', () => sizeUp(100))
sizeDownBtn.addEventListener('click', () => sizeDown(10))

colorBtn.addEventListener('click', () => changeColor(colors))