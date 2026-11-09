let toDoInput;
let errorInfo;
let addBtn;
let ulList;
let newToDo;

let popUp
let popUpInfo
let toDoToEdit
let popUpInput
let popUpAddBtn
let popUpCloseBtn

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};

const prepareDOMElements = () => {
	// pobieramy wszystkie elementy
	toDoInput = document.querySelector('.todo-input');
	errorInfo = document.querySelector('.error-info');
	addBtn = document.querySelector('.btn-add');
	ulList = document.querySelector('.todolist ul');

	popUp = document.querySelector('.popup')
	popUpInfo = document.querySelector('.popup-info')
	popUpInput = document.querySelector('.popup-input')
	popUpAddBtn = document.querySelector('.accept')
	popUpCloseBtn = document.querySelector('.cancel')
};

const prepareDOMEvents = () => {
	addBtn.addEventListener('click', addNewToDo);
	ulList.addEventListener('click', checkClick);
	popUpCloseBtn.addEventListener('click', closePopUp);
	popUpAddBtn.addEventListener('click', changeToDoText);
	toDoInput.addEventListener('keyup', enterKeyCheck)
};

/*
    1. Tworzy nowy li
    2. Dodawać nowy element do ul list
    3. F. odpalana na przycisk ADD
    4. Pobieranie treści z inputa
    5. Dodaj zabezpieczenie
*/

const addNewToDo = () => {
	if (toDoInput.value !== '') {
		newToDo = document.createElement('li');
		newToDo.textContent = toDoInput.value;
		createToolsArea();
		ulList.append(newToDo);
		toDoInput.value = '';
		errorInfo.textContent = '';
	} else {
		errorInfo.textContent = 'Wpisz treść zadania!';
	}
};

const createToolsArea = () => {
	const tools = document.createElement('div');
	tools.classList.add('tools');
	let btn1 = document.createElement('button');
	let btn2 = document.createElement('button');
	let btn3 = document.createElement('button');
	btn1.classList.add('complete');
	btn2.classList.add('edit');
	btn3.classList.add('delete');

	let i1 = document.createElement('i');
	i1.classList.add('fas');
	i1.classList.add('fa-check');
	btn1.append(i1);

	btn3.innerHTML = '<i class="fas fa-times"></i>';

	btn2.textContent = 'EDIT';
	tools.append(btn1, btn2, btn3);

	newToDo.append(tools);
};

const checkClick = (e) => {
	if (e.target.matches('.complete')) {
		e.target.closest('li').classList.toggle('completed')
		e.target.classList.toggle('completed')
	} else if(e.target.matches('.edit')) {
		editTodo(e)
	} else if (e.target.matches('.delete')) {
		deleteToDo(e)
	}
};

const editTodo = e => {
	toDoToEdit = e.target.closest('li')
	console.log(toDoToEdit.firstChild);
	popUpInput.value = toDoToEdit.firstChild.textContent
	popUp.style.display = "flex";
}

const closePopUp = () => {
	popUp.style.display = "none"
	popUpInfo.textContent = ''
}

const changeToDoText = () => {
	if (popUpInput.value !== '') {
		toDoToEdit.firstChild.textContent = popUpInput.value
		popUpInfo.textContent = ''
	} else {
		popUpInfo.textContent = "Musisz podać jakąś treść!"
	}
}

const deleteToDo = (e) => {
	e.target.closest('li').remove();
	const allToDos = document.querySelectorAll('li')
	if (allToDos.length === 0) {
		errorInfo.textContent = "Brak zadań na liście"
	}
}

// KEYBOARD EVENTS

const enterKeyCheck = e => {
	if (e.key === 'Enter') {
		console.log('enter');
		addNewToDo()
	}
}

document.addEventListener('DOMContentLoaded', main);
