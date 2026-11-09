// FETCH, THEN & cATCH

const btn = document.querySelector('button');
const img = document.querySelector('img');
const API_URL = 'https://dog.ceo/api/breeds/image/random';
// fetch(API_URL)
//     .then(res => console.log(res))
//     .then()
//     .then()
//     .then()
//     .then()
//     .catch(err => console.log(err))

btn.addEventListener('click', () => {
	fetch(API_URL)
		.then((res) => res.json())
		.then((data) => img.setAttribute('src', data.message))
		.catch((err) => console.log(err));
}) +
	// STATUSY

	// 400 - błąd: http.cat -> lista

	// AJAX (Async JS and XML) / JSON: XML - przestarzałe - zezwala na wysyłanie i pobieranie danych bez konieczności przeładowania strony.
	// JSON - repreazentacja TYLKO danych (musi być "")

	// ASYNC / SYNC
	// JS - język jednowątkowy (krok po kroku)
	// SYNC - może blokować działanie / renderowanie strony
	btn.addEventListener('click', () => {
		console.log('wykonuję się pierwszy!');
		const p = document.createElement('p');
		alert('stworzyłem paragraf!');
		p.textContent = 'test';
		document.body.append(p);
		console.log('koniec');
	});

// p sie doda po potwierzeniu elementu

console.log(1);
setTimeout(() => {
	console.log(2);
}, 800);
console.log(3);

// PROMISE
// Callback Hell - wielokrotne odwoływanie się do funkcji wewnątrz funkcji (podany poniżej)

console.log('-------PROMISE-------');

setTimeout(() => {
	console.log(1);
	setTimeout(() => {
		console.log(2);
		setTimeout(() => {
			console.log(3);
			setTimeout(() => {
				console.log(4);
				setTimeout(() => {
					console.log(5);
				}, 300);
			}, 300);
		}, 300);
	}, 300);
}, 300);

// zastąp je czytelniejszm promisem
// wykorzystywane jak np. obsłgujemy pobranie jakiś funkcji z serwera (dajemy je w przypadku jak nie jestesmy pewni rezultatu)
// taki troche try except (tylko że async)

const testPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		const success = false;

		if (success) {
			resolve('jest ok');
		} else {
			reject('błąd');
		}
	}, 1000);
});

testPromise.then((info) => console.log(info)).catch((err) => console.log(err));

// GET POST PUT PATCH

console.log('-------GET, POST, PUT, PATCH-------');
// get - pobierz, post - wysyła, put/patch - edycja, delete - usuwa | uzywane apropos API
const url = 'mmcschool.pl';

const www = {
	method: 'POST',
};

fetch(url, www);

// ASYNC AWAIT
// async pozwala stworzyć funkcję asynchroniczną, która wygląda synchronicznie (bez promise'ów)
// promisy źle wyglądają

console.log('Async&Await');
const checkAge = (age) => {
	return new Promise((resolve, reject) => {
		if (age >= 18) {
			resolve();
		} else {
			reject();
		}
	});
};

const doubleCheck = () => {
	return new Promise((resolve) => {
		console.log('Sprawdzam jeszcze raz...');
		setTimeout(() => {
			resolve('Faktycznie, wiek się zgadza');
		}, 1000);
	});
};

// checkAge(50)
// 	.then(() => {
// 		console.log('Chyba możesz wejść...');
// 		return doubleCheck();
// 	})
// 	.then((res) => console.log(res))
// 	.then(() => {
// 		console.log('Weryfikacja zakończona!');
// 	})
// 	.catch((error) => console.log(error));

// zamiast tego można asyncqa zrobić

async function test() {
	try {
		await checkAge(14);
		console.log('Chyba możesz wejść');
		await doubleCheck();
		console.log('Faktycznie, wiek się zgadza.');
		console.log('Weryfikacja zakończona!');
	} catch {
		console.log('Błąd, masz za mało lat.');
	}
}

test();

fetch(API_URL)
	.then((res2) => res2.json())
	.then((data) => console.log(data))
	.catch((error) => console.log(error));

async function test2() {
	try {
		const res2 = await fetch(API_URL);
		const data = await res2.json();
		console.log(data);
	} catch {
		console.log('błąd');
	}
}

test2();

// AXIOS - kolejna wersja pobierania API - uproszczony fetch

console.log('AXIOS');

const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');

fetch(API_URL)
	.then((res) => res.json())
	.then((res) => one.setAttribute('src', res.message));

axios.get(API_URL).then((res) => {
	two.setAttribute('src', res.data.message);
});

async function showImage() {
	const response = await axios.get(API_URL);
	console.log(response);
    three.setAttribute('src', response.data.message);
}


showImage()