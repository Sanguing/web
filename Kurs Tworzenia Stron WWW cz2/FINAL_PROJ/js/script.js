document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar');
	const allNavItems = document.querySelectorAll('.nav-link');
	const navList = document.querySelector('.navbar-collapse');

	function addShadow() {
		if (window.scrollY >= 100) {
			nav.classList.add('shadow-bg');
		} else {
			nav.classList.remove('shadow-bg');
		}
	}

	allNavItems.forEach((item) =>
		item.addEventListener('click', () => {
			navList.classList.remove('show');
		}),
	);

	window.addEventListener('scroll', addShadow);
});

// 1. kliknięcie link -> zamknięcie nawigacji
// 2. need all linki pobrać do zmiennej
// 3. klasa show odpowiada za rozwinięcie się nawigacji
