let toDoInput 
let errorInfo
let addBtn
let ulList


const main = () => {
    prepareDOMElements()
    prepareDOMEvents()
}

const prepareDOMElements = () => {
    // pobieramy wszystkie elementy
    toDoInput = document.querySelector('.todo-input')
    errorInfo = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.todolist ul')

}


const prepareDOMEvents = () => {
    // nadajemy nasłuchiwanie
}


document.addEventListener('DOMContentLoaded')