// const apples = 300 ;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total);
// const diff = apples - grapes;
// console.log(diff)
// let students = 100;
// students = students + 50;
// students += 50;
// students *= 2;
// console.log(students)
// const value = 27.5;
// console.log(Math.floor(value)); //27 округлює до цілого
// console.log(Math.ceil(value)); // 28 округлює до верху
// console.log(Math.round(value)) //28 просто округлює
//? cкласти фразу в один рядок з 3 змінних
// const companyName = `Syberdyne System`;
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots}` ;
// //const message = companyName + ` has `  +(repairBots + defenceBots) + ` bots ` ;
// console.log(message)
//? індекс маси тіла необхідно обкруглити до однієї цифри після коми
// let weight = `88,3`;
// let height = `1.75`;
// const newWeight = Number(weight.replace(',', '.'));
// console.log(newWeight)
// const newHeight = Number(height.replace(',', '.'))
// console.log(newHeight)
// // console.log(typeof Number(weight));
// // console.log(Number(weight))
// const bmi = newWeight / Math.pow(newHeight, 2);
// console.log(bmi.toFixed(1));
//?   Оператори порівняня
// console.log(`2` > `12`)          //true
// console.log(`2` < `12`)          //false
// console.log(`4` == 4)            // true
// console.log(`6` === 6)          //false
// console.log(1 == true)          //true
// console.log(1 === true)        // false
// console.log(`0` == false)      //true
// console.log(`0` === false)     //false
// console.log(`Papa` < `papa`)  //true
// console.log( undefined == null)  //true
// console.log(undefined === null)  //false
//todo Логічні оператори! && - запинається на false
// console.log(true && 3) // 3
// console.log(false && 3) //false
// console.log(true && 4 && `kiwi`) // kiwi
// console.log(true && 0 && `kiwi`) // 0
//todo || - запинається true
// console.log(true || 3)  //true
// console.log(true || 3 || 4) //true
// console.log(null || 2 || undefined) // 2
// console.log((1 && null && 2) > 0) //false
// console.log(null || (2 && 3) || 4) // 3
//todo ОПЕРАТОР НУЛЬОВОГО ЗЛИТТЯ ?? - розповсюджується на null i undefined
// const incomingValue = 5;
// const defaultValue = 10;
// const value = incomingValue ?? defaultValue;
// console.log(value) // 5

// const incomingValue = null;
// const defaultValue = 10;
// const value = incomingValue ?? defaultValue;
// console.log(value) // 10

// const incomingValue = undefined;
// const defaultValue = 10;
// const value = incomingValue ?? defaultValue;
// console.log(value) // 10

// const incomingValue = 0;
// const defaultValue = 10;
// const value = incomingValue ?? defaultValue;
// console.log(value) // 0

// const incomingValue = false;
// const defaultValue = 10;
// const value = incomingValue ?? defaultValue;
// console.log(value) // false
//!           LESSON 2
// const products = 10;
// const search = ``;
// const filters = 1;
// if (search && !products){
//     console.log(`Пошук не дав результату`);
// } else if(filters && !products ){
//     console.log(`Фільтри не дали результату`)
// } else {
//     console.log(`Кошик пустий`)
// }
//? Використовуючи конструкцію if..else ,  promt напиши код який матиме:
//? "Яка офіційна назва JavaScript?". Якщо користувач вводить `ECMAScript`
//? то показуй alert з рядком "Правильно!", в іншому випадку -
//? "Не знаєте? ECMAScript!"
// const answer = prompt(`Яка офіційна назва JavaScript?`)
// console.log(answer);
// if (answer === `ECMAScript`){
//     alert(`Правильно!`)
// } else {
//     alert("Не знаєте? ECMAScript!")
// }
//? Напиши скрипт для відображення годин та хвилин у консолі браузера у
//? вигляді рядка формату "14 г. 26 хв." Якщо значення змінної "minutes"
//? дорівнює "0" , то виводить рядок без хвилин .
// const hours = 14;
// const minutes = 0;
// let timeString;
// if (minutes !== 0){
//     timeString = `${hours} год. ${minutes} xв`;
// } else{
//     timeString = `${hours} год.`;
// }
// console.log(timeString)
//? Напиши скрипт який виводить у консоль рядок "Це позитивне число", якщо
//? у promt користувач ввів число більше нуля. Якщо було виведенно 0 виводь
//? в консоль "Це нуль!". Якщо передали від`ємне число, у консолі повинен
//? бути рядок "Це негативне число!"
// const userInput = Number(prompt(`Введіть число!`));
// // console.log(Number(userInput))
// if (userInput > 0){
//     console.log("Це позитивне число")
// }
// else if (userInput === 0){
//     console.log("Це нуль!")
// }
// else if (userInput < 0){
//     console.log("Це негативне число!");
// }
// else{
//     console.log(`Ви ввели не число!!!`)
// }
//? Напиши скрипт, який порівнює числа у змінних "a" та "b". Якщо обидва
//? значення більше "100", то виведи в консоль максимальне з них. В протиле-
//? жному випадку у консолі повинна бути сума значення "b" та числа 512.
// const a = 120;
// const b = 180;
// if (a > 100) {
//   if (b > 100) {
//     console.log(Math.max(a, b));
//   }  else {
//     console.log(b + 512);
//       }
// }
//   else {
// console.log(b + 512);
//   }
//* Легший спосіб
// if (a > 100 && b > 100){
//   console.log(Math.max(a, b))
// }else {
//   console.log(b + 512)
// }
//? Напиши скрипт який  перевіряє чи закінчується значення змінної 'link'
//? символ "/". Якщо ні, додай до кінця значення "link" цей символ. Використовуй
//? конструкцію 'if...else'.
// let link = 'https://my-site.com/about';
// if (!link.endsWith('/')){
// //  link = link + '/';
// //  link = `${link}/`;
// link += '/';
// }
// console.log(link)
//? Напиши скрипт який  перевіряє чи закінчується значення змінної 'link'
//? символ "/". Якщо ні, додай до кінця значення "link" цей символ, але
//? тільки в тому випадку, якщо в "link" є підрядок 'my-site'. 
//? Використовуй конструкцію 'if...else'.
// let link = 'https://somesite.com/my-site/about';
// if (!link.endsWith('/') && link.includes('my-site')){
//   link += '/';
// }
// console.log(link)
//? Тернарний оператор (рефакторинг)
// let link = 'https://somesite.com/my-site/about';
// link = !link.endsWith('/') && link.includes('my-site') ? link += '/' : link;
// console.log(link)
//!-----------------------------------------------------------------------
//? Напиши скрипт який виводитиме в консоль браузера рядок залежно від
//? значення змінної.

//?  Якщо значення змінної "hours":

//? - меньше "17" виводь рядок "Pending"
//? - більше або дорівнює 17 і меньше або дорівнюе 24, виводь рядок "Expires".
//? - більше 24, виводь рядок "Overdue".
// const hours = 10;
// if (hours < 17){
//   console.log('Pending');
// }
// else if (hours >= 17 && hours <= 24 ){
//   console.log("Expires")
// }
// else if(hours > 24) {
//   console.log("Overdue")
// }
//!-------------------------------------------------------------------------
//? Напиши скрипт для відображення часу дедлайну здачі проєкту. Використовуй
//? конструкцію if...else

//? - Якщо до дедлайну 0 днів - виведи рядок "Сьогодні"
//? - Якщо до дедлайну 1 день - виведи рядок "Завтра"
//? - Якщо до дедлайну 2 дні - виведи рядок "Післязавтра"
//? - Якщо до дедлайну 3+ днів - виведи рядок "Дата у майбутньому"

// const daysUntilDeadline = 5;
// if (daysUntilDeadline === 0){
//   console.log("Сьогодні");
// } else if(daysUntilDeadline === 1){
//   console.log("Завтра");
// }else if(daysUntilDeadline === 2){
//   console.log("Післязавтра");
// } else{
//   console.log("Дата у майбутньому");
// }
//? Рефакторинг в switch
// const daysUntilDeadline = 3;
// switch (daysUntilDeadline){
//   case 0:
//     console.log("Сьогодні");
//     break;
//   case 1:
//     console.log("Завтра");
//     break;
//   case 2:
//     console.log("Післязавтра");
//     break;
//   default:  
//   console.log("Дата у майбутньому");   
// }

// !  Цикл for
// ? Напиши цикл for, який виводить у консоль браузера числа за зростання 
//? від "min" до "max", але тільки якщо числа кратні 5.

// const max = 100;
// const min = 26;
// for(let i = min; i <= max; i++){
//   if (i % 5 === 0){
//    console.log(i);
//   }
// }
//? Напиши скрипт який матиме логін за допомогою "promt" та логувати 
//? результат у консолі браузера.

//?-Якщо відвідувач вводить "Адмін", то "promt" запитує пароль.

//?-Якщо ні чого не не введено або натиснуто клавішу "Esc" - вивести рядок
//? "Скасовано"

//?-В іншому випадку вивести рядок "Я вас не знаю".
//?    ПАроль перевіряти так:
//? - Якщо введено пароль "Я адмін", то вивести рядок "Здрастуйте".
//? - Інакше виводить рядок "Невірний пароль"
//? -
// const inputValue = prompt("Логін")
// if (inputValue === "Адмін"){
//   const password = prompt("Пароль");
//   if (password === "Я адмін"){
//     alert("Здрастуйте")
//   }else {
//     alert("Невірний пароль");
//   }
// } else if (inputValue === '' || inputValue === null ){
//   alert("Скасовано");
// } else {
//   alert("Я вас не знаю");
// }
// !  LESSON 3 ---------------МАСИВИ------------------------------
//? Створіть масив "genres" з елементами "Jazz" та "Blues".
//? Додайте "Роке-н-рол" до кінця.
//? Виведіть у консоль перший елемент масиву.
//? Виведіть у консоль останій елемент масиву. Код повинен працювати для
//? масиву довільної довжини.
//? Видаліть перший елемент та виведіть його у консоль.
//? Вставьте "Country" та "Reggae" на початок масиву.

// const genres = ["Jazz", "Blues"];
// genres.push("Роке-н-рол")
// const firstElement = genres.shift();
// console.log(firstElement);
// console.log(genres[genres.length - 1])
// genres.unshift("Country", "Reggae");
// console.log(genres)

//? Напиши скрипт для обчислення площі прямокутника зі сторона, значення 
//? яких зберігається у змінной "values" у вигляді рядка. Значення гарантовано 
//? розділені пробілом.
// const values = "8 11";
// const valueArr = values.split(" ");
// console.log(valueArr)
// console.log(Number(valueArr[0]) * Number(valueArr[1]));

//? Напиши скрипт для перебору масиву "fruits" циклом for. Для кожного 
//? елементу масиву виведи в консоль рядок у форматі "номер_елемента: значення_елемента."
//? Нумерація елемента повинна починатися з "1".
// const fruits = ["🍌", "🍋", "🍎", "🍇", "🍑"];
// for (let i = 0; i < fruits.length; i += 1){
//   console.log(`Element ${i + 1}: `, fruits[i])
// }

//? Напиши скрипт, виводить у консоль ім'я та телефонний номер користувача.
//? У зміних 'names' та 'phones' зберігаються рядки імен та телефонних номерів
//? розділені комами. Порядковий номер імен та телефонів у рядках вказують
//? на відповідність. Кількість імен та телефонів гарантовано однакова.
// const names = "Jacob,William,Solomon,Artemis";
// const phones = "89001234567,89001112233,890055566377,890055566300";
//  const namesArr = names.split(",");
//  const phonesArr = phones.split(",");
//  for (let i = 0; i < namesArr.length; i += 1){
// console.log(`${namesArr[i]}: `, phonesArr[i]);
//  }

//? Напиши скрипт, який виводить у консоль усі слова рядка крім першого і
//? останього. Результуючий рядок не повинен починатися або закінчуватися
//? символ пробілу. Скрипт повинен працювати для будь-якого рядка.
// const string = 'Welcome to the future';
// const wordsArr = string.split(' ');
// wordsArr.pop();
// wordsArr.shift();
// console.log(`>${wordsArr.join(' ')}<`)

//? Напиши скрипт, який "розгортає" рядок (зворотній порядок букв) 
//? і виводить його в консоль.
// const string = "Welcome to future";
// // // let newString = '';
// // // for (let i = string.length - 1;i >= 0;i -= 1){
// // // newString += string[i]
// // // }
// // // console.log(newString)
// // const charsArr = string.split('');
// // const reversArr = charsArr.reverse();
// // console.log(reversArr.join(''))
// console.log(string.split('').reverse().join(''));

//?!--------------- Cортування масиву із циклом
//? Напиши скрипт сортування масиву рядків в алфавітному порядку за першою 
//? літерою елемента.
// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// for (let i = 0; i < langs.length; i += 1){
//     for (let j = i + 1; j < langs.length; j += 1){
//         if (langs[i] > langs[j]){
//          const thirdValue = langs[i];
//          langs[i] = langs[j];
//          langs[j] = thirdValue
//         }
//     }
// }
// console.log(langs)

//!    Пошук елемента!
//? Напиши скрипт пошуку найменшого числа у масиві. Код повинен працюваати
//? для будь-якого масиву чисел. Використовуй цикл для розвязання задачі.
// const numbers = [2, 17, 94, 1, 23, 37];
// // let min = numbers[0];
// // for (let number of numbers){
// //     if (number < min){
// //         min = number
// //     }
// // }
// // console.log(min);
// let min ;
// for (let number of numbers){
//     if (min === undefined || number < min){
//         min = number
//     }
// }
// console.log(min);

//!  ----------------МОДУЛЬ 2 УРОК 4-------------------------------------
//? індекс маси тіла необхідно обкруглити до однієї цифри після коми
// let weight = `88,3`;
// let height = `1.75`;

// console.log(newWeight)

// console.log(newHeight)
// function calcBMI(weight, height){
// const newWeight = Number(weight.replace(',', '.'));
// const newHeight = Number(height.replace(',', '.'));
// return (newWeight / Math.pow(newHeight, 2)).toFixed(1)
// }
// const bmi = calcBMI( '88,3', '1.75')
// console.log(bmi)

//? Найменше з чисел  
//? Напиши функцію "min(a, b)", яка повертає найменше з чисел "a" та "b".
// function min(a, b){
//   return Math.min(a, b)  
// }

// console.log(min(2, 5))
// console.log(min(3, -1))
// console.log(min(1, 1))

//? Напиши функцію "getRectArea(dimensions)" для обчислення площі прямокутника 
//? зі сторона, значення яких зберігається у змінной "values" у вигляді рядка.
//?  Значення гарантовано розділені пробілом.
// function getRectArea(dimensions){
// // const values = "8 11";
// const valueArr = dimensions.split(" ");
// const width = Number(valueArr[0]);
// const height = Number(valueArr[1]);
// return width * height;
// }
// console.log(getRectArea('8 11'))
//!----------- 06\06\2023------------------------------------
//? Напиши функцію `logItems(items)`, яка отримує масив та використовує
//? цикл `for` який для кожного елемента масиву буде виводити в консоль
//? повідомлення у форматі "<номер елемента>" - "<значення елемента>".
//? Нумерація елементів повинна починатися з '1'.

//? Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax',] з 
//? індексом буде виведено "1 - Mango" а для індексу 2 виведе "3 - Ajax"
 
// function logItems(itemsArr){
//   for (let i = 0; i < itemsArr.length; i += 1){
//     console.log(`Element ${i + 1}:`, itemsArr[i])
//   }
// }
// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(["🍌", "🍋", "🍎", "🍇", "🍑"]);

//? Напиши функцію 'printContactsInfo(names, phones)' яка виводить у консоль
//? ім'я та телефонний номер користувача. У параметри `names` та 'phones'
//? будуть передані рядки імен та телефонних номерів, розділені комами.
//? Порядковий номер імен та телефонів у рядках вказують на відповідність.
//? Кількість імен і телефонів гарантовано однакова.
//? 
// function printContactsInfo(names, phones){
//    const namesArr = names.split(",");
//  const phonesArr = phones.split(",");
//  for (let i = 0; i < namesArr.length; i += 1){
// console.log(`${namesArr[i]}: `, phonesArr[i]);
//  }
// }
//  printContactsInfo(
// 'Jacob,William,Solomon,Artemis',
// "89001234567,89001112233,890055566377,890055566300"
// )

// //? Напиши функцію 'findLargestNumber(numbers)' яка шукає найбільше число
// //? в масиві. 
// function findLargestNumber(numbersArr){
//   let max
// for (let number of numbersArr){
//   if (max === undefined || number > max){
//     max = number
//   }
// }
// return max
// }
// console.log(findLargestNumber([2, 17, 94, 1, 23, 37]));
// console.log(findLargestNumber([49, 4, 7, 83, 12]));