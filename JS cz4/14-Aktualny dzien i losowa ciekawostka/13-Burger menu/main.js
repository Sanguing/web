const hamburgerBtn = document.querySelector('.burger');
const hamburgerIcon = document.querySelector('.fa-bars');
const closeIcon = document.querySelector('.fa-times');
const hamburgerMenu = document.querySelector('ul');

console.log(hamburgerBtn);
console.log(hamburgerIcon);
console.log(closeIcon);

const hamburgerMenuToggle = () => {
	hamburgerMenu.classList.toggle('active');
    hamburgerBtn.classList.toggle('open')
	closeIcon.classList.toggle('hide');
	hamburgerIcon.classList.toggle('hide');
    hamburgerBtn.classList.toggle('activeBtn')
};

hamburgerBtn.addEventListener('click', hamburgerMenuToggle);
