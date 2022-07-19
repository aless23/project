"use strict";



// const options = {
// 	name: 'test',
// 	witdh: 888,
// 	height: 999,
// 	colors: {
// 		border: 'black',
// 		bg: 'red',
// 	}
// };

// console.log(options);
// цикл for in позволяет перебрать все ключи и значения объекта
// for (let key in options) {
// 	console.log(`Свойство ${key} имеет значение ${options[key]}`);
// }

// callback не начнёт своё исполнение до того момента пока другой код не завершится

// пример использования collback

// function learnJs(arg, callback) {
// 	console.log(`Я учу: ${arg}`);
// 	callback();
// }

// function done() {
// 	console.log('I was learn this lesson');
// }

// learnJs('Javascript', done);


// задержка перед выполнением, где 1000 = 1 сек.
// setTimeout(function(){

//}, 1000);

// перевод строк в число
// const test = "15px";
// console.log(parseInt(test));

// поиск по заданному значению
// const stro = "some fruits";

// console.log(stro.indexOf("f"));

// вырезает заданый кусочек (начало, конец)
// console.log(stro.slice(1,4));

// стрелочные функции используют в основном в обработчике событий

// Lesson GIT
// mkdir - создаёт новую папку
// cd название папки переходит в заданую папку
// cd .. перейти назад
// ls - Для просмотра файлов которые есть в папке (с аргументом -la),
// где -l выведет файлы и папки в виде списка, -a Отобразит все скрытые файлы
// git init - создание репозитория
// touch - создание файла (пустой)
// git log - посмотреть историю изменений (коммитов)
// git status = показывает статус всех файлов
// git commit -m "Комментарий изменений в проекте"
// git add название файла - добавляет файлы на обработку в коммит (committed - зафиксированы изменения)
// Рекомендуется создание проекта делить на несколько коммитов
// git commit  - закоммитеть (зафиксировать)
// git restore название файла - откатывает измененияв в файле на состояние последнего комита
// git diff -  показывает какие изменения были внесены в файл, с момента последнего коммита (фиксации)
// git diff --staged - позволяет увидеть, какие изменения ожидают файл
// git mv имя файла новое имя - повзоляет переименовывать, либо перемещать файлы в каталоги
// git rm название файла - удаляет указаный объект
// git rm --cached - удаляет изменения из коммита
// vim .gitignore - позволяет добавить в список файлы, которые не нуждаются в коммите
// (не нужно добавлять в репозиторий)
// vim зайти в текстовый редактор
// ### или # - задаются комментарии в редакторе VIM
// __название папки__/ - vim комманда для исключения из внимания
// git branch new-api - создание новой ветки с именем new-api
// git checkout new-api - переключиться на указанную ветку
// git merge - слияние веток
// git branch -d new-api - удаление веток
// git remote add origin ссылка с GitHub добавляет удалённый репозиторий с именем origin
// git remote -v подробный список доступных репозиториев
// (fetch - для чтения, push - для отправки)
// git push origin master (отправить изменения на сервер origin в ветку master)
// git clone ссылка с GitHub
// git pull origin master  получение проекта с правками от другого пользователя (случай когда работает несколько человек)
// git push --set-upstream origin master связывает локальную ветку master с удалённой, после чего достаточно команды git push
// git rebase master находясь на ветке (напр.new-api) позволяет перебазировать созданные коммиты на одну ветку с master
// git tag v1 создаёт тег для коммита с именем v1
// git tag -a R2323.4 -m "Release R2323.4" создаёт тег с именем R2323.4 и комментарием
// git push origin v1 отправляет тег v1 на сервер origin
// git push --tags отправляет все теги
// Главное правило для работы с GIT: не работать в ветке Master, это чистовик...лучше создать новую ветку под свой проект отдельно
// а уж далее когда закончится правка, сделать или merge либо rebase
// rebase делать лишь в том случае, когда уже забираем правки с сервера, и при этом есть уже свои коммиты
// таким образом мы избавляем себя от merge коммитов (цепочек созданных коммитов)
// git reset --hard хеш сумма, параметр hard говорит git передвинуть ветку, даже если в рабочем каталоге или индексе
// есть какие-то изменения

// const category = "toys";

// console.log('https://someurl.com/' + category);

// console, alert, prompt, confirm

// document.querySelector('#alerts').addEventListener('click', function () {
// 	alert('Ok, welldone!!');
// });

// document.querySelector('#confirm').addEventListener('click', function () {
// 	var result = confirm('Вы уверены, что хотите нажать на эту кнопку?');
// 	if (result === true) {
// 		console.log(result);
// 	} else {
// 		console.log(result);
// 	}
// })


// var wrap = document.getElementById('wrapper');
// wrap.addEventListener('click', function (event) {
// 	var tagName = event.target.tagName.toLowerCase();

// 	tagName === 'p'
// 		? event.target.style.color = 'yellow'
// 		: console.log('это не параграф!');

// })

//event.target.classList.contains  запись проверяет наличие чего-либо


// var massiv = ['1', '2', '3',];
// massiv.forEach(element => console.log(element))

// var textCh = document.querySelectorAll('p');

// function colorText() {
// 	this.style.background = 'green';
// }

// textCh.forEach(element => element.onclick = colorText)

// синтаксис цикла forEach
// arr.forEach(function(element, index, array) {
// ...
// }
// textChange.forEach(function (element) {
// 	element.onclick = colorParagraph;
// })





// var divs = document.querySelectorAll('div');
// var link = document.querySelector('a');


// link.addEventListener('click', linkLieAdress)

// function linkLieAdress(event) {
// 	event.preventDefault();

// 	var div = divs[0];

	// if (div.style.display === 'none') {
	// 	div.style.display = 'flex';
	// } else {
	// 	div.style.display = 'none';
	// }
	//Эта запись равносильна нижеприведённой

// 	div.style.display = div.style.display === 'none'
// 		vopros 'flex'
// 		: 'none'



// }

// for (var i = 0; i < divs.length; i++) {
// 	divs[i].addEventListener('click', function (event) {
// 		event.stopPropagation();
// 		console.log(this.getAttribute('id'));
// 	})
// }


// console.log(this);

//this позволяет ссылаться на самого себя
// обходя вариант с переменными типа (let b = document.querySelector('.b-1').onclick = function () )

//Вариант, где this в контексте такого вызова функции
// указывает на тот элемент на котором произошло событие

// При использовании стрелочной функции
// => this указывает на window

// document.querySelector('.b-1').onclick = function () {
// 	console.log(this);
// 	this.style.background = 'blue';
// };

// function colorP() {
// 	this.style.background = 'blue';
// }

// let p = document.querySelectorAll('p');
// p.forEach(function (element) {
// 	element.onclick = colorP;
// })

// oleg.name = 'Olegs';

// function hello() {
// 	console.log('Heeey', this)
// }

// const person = {
// 	name: 'Oleg',
// 	age: 30,
// 	sayHello: hello,
// 	sayHelloWindow: hello.bind(document),
// 	logInfo: function () {
// 		console.log(`Name is ${this.name}`);
// 	}
// }


// Все события в JS работают на погружение

// var bloks = document.querySelectorAll('div');

// for (var i = 0; i < bloks.length; i++) {
// 	bloks[i].addEventListener('click', function () {
// 		console.log(this.getAttribute('id'));
// 	}, false) // если поставить true, меняется порядок выполнения события
// }

// var button = document.querySelector('.knopka');

// var chText = document.querySelector('h1');

// var input = document.querySelector('input');


// button.addEventListener('click', function () {
// 	chText.setAttribute('style', 'color:red;');
// 	chText.textContent = input.value;
// })


// var button = document.querySelector('.knopka');

// var changeText = document.querySelector('h1');

// var input = document.querySelector('input');

// добавляем событие при нажатии кнопки - мышкой

// function buttonClicker() {
// 	console.log('Clicked!');
// 	changeText.textContent = input.value;
// }

// this означает этот самый
// добавление события при наведении мышкой на поле тега (mouseenter)
// при этом функцию можно задавать прямо в скобках (анонимно)
// все свойства, слова которые пишутся через - в js пишут слитно через камелкей
// background - color => backgroundColor
// changeText.addEventListener('mouseenter', function () {
// 	this.style.color = 'red';
// 	this.style.backgroundColor = 'blue';
// })

// changeText.addEventListener('mouseleave', function () {
// 	this.style.color = 'black';
// })

// событие click - отвечает за кнопку мышки...
// весь перечень событий доступен на сайте MDN (mouse event)
// button.addEventListener('click', buttonClicker)

// с помощью метода .classList можем добавлять / изменять классы тега

// var box1 = document.querySelector('.boxing');
// box1.classList.add('red');


// Подключение к атрибутам тега h1

// var changeText = document.querySelector('h1');
// changeText.setAttribute('style', 'color:red;');

// var colorPic = {
// 	"color": "white",
// 	"font-size": "40px"
// };

// var styleText = document.querySelector('a');
// Object.assign метод, который может объединить указанные стили с существующими стилями в style атрибут
// Object.assign(styleText.style, colorPic);

// changeText.innerHTML = '<h1 style = "color: red; font-size: 40px;">how are you?</h1>';




//  метод .setAttribute меняет значение аттрибутов тега
//  метод .getAttribute получает значение аттрибутов тега
// var ssilka = document.querySelector('a');
// var getHref = ssilka.getAttribute('href');
// ssilka.setAttribute('title', 'olala');
// ssilka.setAttribute('href', 'https://ya.ru');
// ssilka.textContent = 'Yandex';
// console.log();


//Обращение к DOM - дереву по новому методу:
//через .querySelector(ALL)
// var div = document.querySelector('#playground');
// var p = document.querySelectorAll('.text');
// var h1 = document.querySelector('h1');
// с помощью .innerHTML можно подключаться
//а также изменять код HTML
// .textContent позволяет выводить содержимое тегов
// h1.textContent = 'Editing text'
// div.innerHTML = '<h2 style = "color: red;">From javascript</h2>'
// console.log(p);
// console.log(div.innerHTML);
// console.log(h1);

// var input = document.querySelector('input')
//чтобы вывести содержимое поля input
// console.log(input.value);
//Для обращения к дочернему элементу блока DIV (который
// идёт после первого)
// var div2 = document.querySelector('div#playground > div ul')


//Обращение к DOM - дереву по старому методу:
// var div = document.getElementById('playground');
// var p = document.getElementsByClassName('text');
// var h1 = document.getElementsByTagName('h1');
// console.log(div);
// console.log(p);
// console.log(h1);

// var carName = 'Mazda';
// var carYear = 2006;
// var personYear = 1991;

// function getYearsAuto(year) {
// 	var currentYear = 2022;
// 	const result = currentYear - year;
// 	return result;
// }

// function diferenceYear(year, name) {
// 	if (getYearsAuto(year) < 10) {
// 		console.log('Возраст ' + name + 'меньше 10 лет');
// 	} else {
// 		console.log('Возраст ' + name + 'старше 10 лет');
// 	}
// }

// diferenceYear(carYear, 'машины ');
// diferenceYear(personYear, 'человека ');

// Написание функции двумя способами:
// нахождение разницы времени
// function getYear(year) {
// 	const numYear = new Date().getFullYear();
// 	return numYear - year;
// }

// console.log(getYear(1992));

// const getYearS  = (year) => new Date().getFullYear() - year;
// console.log(getYearS(1993));


// Использование свойства .reduce
// const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'orange',
// 	'apple', 'banana', 'cherry', 'orange', 'fig',];

// const count = fruitBasket.reduce((numbCount, fruit) => {
// 	numbCount[fruit] = (numbCount[fruit] || 0) + 1;
// 	return numbCount;
// }, {});

// console.log(count);

// Если параметр 1, скобки можно не ставить,
// если несколько  - можно воспользоваться оператором
// return
//Если операция 1, можно записать всё в 1 строку
// let a = (d, c) => {
//
//
// 	return c;
// }


// Второй способ стрелочной функции:
// let subNum = (a) => a * 3;

// console.log(subNum(3));


// Стрелочная функция: скобки обязательны, или вместо
// можно записать 1 параметр;

// let textNum2 = () => {
// 	console.log('hello' + ' World 2');
// }

// Работа с оператором Switch & case
// let colorCar = 'dyellow';

// switch (colorCar) {
// 	case 'blue':
// 		console.log('Цвет машины синий')
// 		break
// 	case 'yellow':
// 		console.log('Цвет машины жёлтый')
// 		break
// 	default:
// 		console.log('Цвет машины не определён');
// }


/*
let arrResult = arrOnes.filter(function (item, index, array) {
	return item.age === 20;
});
console.log(arrResult);
*/
/*Использование свойства find и стрелочной функции для поиска значения
let arrResult = arrOnes.find(item => item.age === 23);
console.log(arrResult);*/
/*
Управление элементами страницы с помощью DOM.
const elemBody = document.documentElement;
console.log(elemBody);

const elemHtml = document.body;
console.log(elemHtml);
*/

// let arr = [1, 2, 3, 4, 5, 6];
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] % 2 != 0) {
// 		console.log(arr[i]);
// 		count++;
// 	}

// }

// console.log(`Таких чисел ${count}`);



/*
DOM Javascript
Методы для комуникации с пользователем

1) alert('Привет!'); Выводит диалоговое окно при загрузке стр.

С помощью Confirm. Результатом будет: всплывающее окно
с вариантом выбора, который будет передан в переменную или
константу.
2)let dialogResult = confirm('Вы хотите стать Frontend Developer?');
console.log(dialogResult);

С помощью метода prompt. Будет предоставлена возможность
ввести свои данные в pop-up окошке, и передать значение
в переменную или константу.
3)let dialogResult = prompt'Вы хотите стать Frontend Developer?');
console.log(dialogResult);
*/

//let arr = ['Oleg', 'Julia', 'Dima',];
/*
let divis = (numbers, divisor) => numbers.filter(num => num % divisor === 0)

console.log(divis([1, 2, 3, 4, 5 , 6,], 2));
*/
/*
for (let v of arrNum){
	if (v % 2 ===0){
		console.log(v);
	}
}
*/
/*
Перенаправляет пользователя на сайт...
console.log(location.href);
location.href = "https://youtube.com";
*/
/*
узнаём ширину браузерного окна
const windowWide = window.innerWidth;
console.log(`Ширина браузерно окна: ${windowWide} px`);
*/
/*
Добавляем вконец массива элемент..newArr - это 
ещё одна ссылка на массив...
let arr = ['Oleg', 'Julia', 'Ola'];
let newArr = arr;
newArr.push('Jordan');
console.log(arr.length);
*/

/*
Использование стрелочной функции...
let resultSumm = (num1, num2) => num1 + num2;
console.log(resultSumm(1, 3));
*/

/*
Задача нахождения делителя delNum массива arrNum: 
function getNum(arrNum, delNum) {
	let resultNum = arrNum.filter(function (item, index, array) {
		return item % delNum === 0;
	});
	return resultNum;
}

console.log(getNum([1, 2, 3, 4, 5, 6,], 2));
*/



/*
for(let i=0; i<arrNum.length; i++){
	if(arrNum[i] % 2 === 0){
		console.log(arrNum[i]);
	}
}
*/
/*
for (let v of arrNum){
	if (v % 2 ===0){
		console.log(v);
	}
}
*/
/*
Метод перебора forEach
Выполняет функцию для каждого
элемента массива

arr.forEach(funcShow);
function funcShow(array){
	console.log(array);
}
*/
/*
for(let arrItem of arr){              1 - й способ вывести массив с помощью цикла
	console.log(arrItem);
}

for (let i = 0; i < arr.length; i++) {       2 - й способ вывести массив с помощью цикла
	console.log(arr[i]);
}
*/

/*

Проверка является ли объект массивом 
или наоборот
с помощью Array.isArray(значение)
let obj = {};
let arr1 = [];
console.log(typeof (obj));
console.log(typeof (arr1));

if (Array.isArray(arr1)) {
	console.log('This is massiv');
} else {
	console.log('This is not massiv');
}
*/


/*
метод .split позволяет разделить
строку на элементы массива. 
указав (',',2) их через запаятую,
где 2 это число элементов которые 
будет выведено на экран.

В то время как противоположным 
методом будет .join
let arr = ['Oleg', 'Julia', 'Dima',];
let result = arr.join(',');
console.log(result);


2-й способ
let arr = ['Oleg', 'Julia', 'Dima',];
console.log(String(arr));

let result = arr.split(',',2);
console.log(result);
*/
/*
let arrOnes = [
	{ name: 'Oleg', Surname: 'Lukash', age: 23, },
	{ name: 'July', Surname: 'Kharchenko', age: 21, },
	{ name: 'Dmitry', Surname: 'Bezruk', age: 20, },
]


Поиск по всему массиву заданых значений, помощью свойства filter
let arrResult = arrOnes.filter(function (item, index, array) {
	return item.age === 20;
});
console.log(arrResult);

*/
/*Использование свойства find и стрелочной функции для поиска значения
let arrResult = arrOnes.find(item => item.age === 23);
console.log(arrResult);
*/
/*
свойство функции .map выбирает заданные символы массива

let results = arr.map(function (item, index, array) {
	return item[0];
});

console.log(arr);
console.log(results);
*/

/*


let arrResult = arrOnes.find(function (items, index, array) {
	return items.age === 21;
});
console.log(arrResult);

*/


/*
копирование всего массива
в другой массив, с возможностью
добавить дополнительный 
элемент.
let arrSecond =  arrOnes.concat('kiss');
console.log(arrSecond);
*/
/*
копирование заданного элемента
в массиве в другой массив.
let arrSecond =  arrOnes.slice(1,2);
console.log(arrSecond);
*/
/*
удаление заданого элемента.
-1 порядок с конца.
arrOnes.splice(-1, 1);
console.log(arrOnes);
*/
/*
Добавление элемента 
обязательно ставить 0 !!!
иначе просто заменит.
arrOnes.splice(1, 0, 'Kick');
console.log(arrOnes);
*/
/*
Замена заданого элемента.
arrOnes.splice(1, 1, 'Kick');
console.log(arrOnes);
*/
/*
Вывод удалённого элемента
let removesData = arrOnes.splice(1, 1);
console.log(`Удалено: ${removesData}`);
console.log(arrOnes);
*/
/*
Удаляет указанный элемент массива
(порядковый номер элемента,
	колличество для удаления после
	него)
arrOnes.splice(1,1);
console.log(arrOnes);
*/
/*
Добавляет элемент(ы) вначало
массива, со смещением.
arrOnes.unshift('Lukash','Luck');
console.log(arrOnes);
*/
/*
Удаляет последний элемент 
массива.
arrOnes.pop();
console.log(arrOnes);
*/
/*
Удаляет первый элемент со
смещением.
arrOnes.shift();
console.log(arrOnes);
*/
/*
Добавляет вконец массива 
элементы.
arrOnes.push('Lukash','Luck');
console.log(arrOnes);
*/
/*
\n в тексте делает перенос на новую строку
let textTest = 'Hello!\nHow are You?\\this is enter string)';
console.log(textTest);
*/

/*
include - проверяет наличие символа (переменная.include('значение которое ищем', здесь можно задать 
позицию с которой начнётся поиск))

let testString = "фрилансер";
console.log(testString.includes('лан'));
*/

/*
Проверка на ошибочность 
вычислений: isNaN()

let value = 58 + " Freelancer";
if (isNaN(value)) {
	console.log(`Result, ${value} : is NaN`);
} else {
	console.log("Result is not NaN");
}
*/
/*
parseFloat, parseInt -
извлекает из строки => числа.
let value = parseFloat("135.58px");
console.log(value);
*/
/*
Number.EPSILON добавляет очень 
маленькое число для правильного
вычисления..
let numTest = 12.35 + Number.EPSILON;
console.log(numTest);
*/
/*
округление(floor (в меньшую)
ceil (в большую)
round (к ближайшему целому))
let num = Math.round(5.5);
console.log(num);

округление десятков
let num = Math.round(5.845 * 10) / 10;
console.log(num);
*/
/*
Запись числа в любой системе 
счислений...(по умолч. 10-чная)
let num = 255;
console.log(num.toString(8));
*/
/*
Запись вложенной функции в объект 
через стрелочный синтаксис

let userInfo = {
	name: "vasya",
	age: 30,
	showInfo() {

		let show = () => console.log(`${this.name},${this.age}`);
		show();
	}
}
userInfo.showInfo();
*/

/*
Вывод значения свойств объекта
через FOR IN

let userInfo = {
	name: "vasya",
	age: 30,
}
for (const key in userInfo) {
	const value = userInfo[key];
	console.log(value);
}*/
/*
let usrInfo = {
	temps: "speeds",
	name: undefined,
	age: 30,
	adress: {
		city: "kiyv",
		street: "european",
	}
}

for (let datas in usrInfo) {
	console.log(datas);
	console.log(usrInfo[datas]);
}


if ("name" in usrInfo) {
	console.log(usrInfo.name);
}

usrInfo.age = 30;
console.log(usrInfo);
*/
/*
function getCityName(oneName, secondName) {
	return {
		oneName,
		secondName,
	};
}
console.log(getCityName("Oleg", 23));
*/


/*let firstPosition;

let userInfo = {
	name: "Oleg",
	age: 30,
	[firstPosition]: 23,
	adress: {
		city: "Poltava",
		street: "European",
	}
};

console.log(userInfo.adress.street);
console.log(userInfo[firstPosition]);
*/
/*
let kens = "age";
console.log(userInfo[kens]);*/
/*
let num = 0;
for (; num < 5; num++) {
	console.log(num);
	if (num == 2) break;
}
console.log(`Цикл закончен на: ${num}`);
*/
/*let num = 0;
while (num < 5) {
	console.log(num);
	num++;
}*/

/*let messages = (92 > '11' && 53 < 100) ? "Trues" : "Falses";
console.log(messages);*/
