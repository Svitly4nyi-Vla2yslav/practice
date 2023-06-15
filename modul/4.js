//? Функція зворотнього виклику (callback)
//? - Функція може приймати другі функції як параметри.
//? - Функція яка передається другій функції як аргумент називаеться "функція
//? зворотнього (відкладеного)виклику"(callback-функція).
//? - Функція яка приймає другу функцію як параметр або повертає функцію як результат
//? своєї роботи називається "функцією висшого порядку".

// const fnA = function (message, callback) {
//     console.log(message)
//     console.log(callback);
//     callback(100);
// }
// const fnb = function (number) {
//     console.log('це лог для виклику fnB', number)
// }
// fnA('hallo', fnb);
// !------------------------------------------------------------------------------------------
// const doMath = function (a, b, callback) {
//     const result = callback(a, b);
//     console.log(result);
// };
// const add = function (x, y) {
//     return x + y;
// };
// const sub = function (x, y) {
//   return x - y;
// };
// doMath(10, 8, sub);
// doMath(2, 3, add);
// ? реєстрація подій
// const buttonRef = document.querySelector('.js-button');
// console.log(buttonRef);
// const handleBtnClick = function () {
//     console.log('Клік по кнопці' + Date.now());
// };
// buttonRef.addEventListener('click', handleBtnClick);
//? Відложенний виклик
// const onGetPositionSucces = function (position) {
//     console.log(position);
// };
// const onGetPositionError = function (error) {
//   console.log(error);
// };
// window.navigator.geolocation.getCurrentPosition(
//     onGetPositionError,
//     onGetPositionSucces,
// );
// ? Відложений виклик: інтервали.
// const callback = function () {
//     console.log('через 3 секунди перед таймаутом');
// };
// console.log('В коді перед таймаутом');
// setTimeout(callback, 3000);
// console.log('В коді після таймаута');

// ? ----------------Фільтр------------------
// const filter = function (array, test) {
//     const filteredArray = [];
//     for (const el of array){
//     console.log(el);
//     const passed = test(el);
//     if (passed) {
// filteredArray.push(el);
//     }
//     };
//     return filteredArray;
// };
// ? 1. Надо передать функцію
// ? 2. Функція получає елемент масива
// ? 3. Якщо елемент масива задовільняє умову то функція поверне 'true'.
// ? 4. Якщо елемент масива НЕ задовільняє умову то функція поверне 'false'
// const callback1 = function (value) {
//     return value >=3;
// }
// const result1 = filter([1, 2, 3, 4, 5], callback1);

// console.log(result1);
// const callback2 = function (value){
//     return value <= 4;
// };
// const result2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);

// console.log(result2);

// const fruits = [
//    { name: '🍎', quantity: 200, isFresh: true},
//    { name: '🍇', quantity: 150, isFresh: false},
//    { name: '🍌', quantity: 100, isFresh: true},
// ];
// const getFruitsWithQuantity = function (fruit) {
//     return fruit.quantity >= 120;
// };
// const result3 = filter(fruits, getFruitsWithQuantity);
// console.log(result3)

// ?---------------Замикання--------------------------
// const fnA = function (parametr){
// const innerVariable = 'Значення внутрішньой змінной функції fnA';
// const innerFunction = function (){
//     console.log(innerVariable);
//     console.log('Це виклик innerFunction');
// }
// return innerFunction;
// };
// const fnB = fnA();
// fnB();
// console.log(fnB);
// ? ---------------------Кухар---------------------------------------------------
// const makeDish = function (sheffName, dish){
//     console.log(`${sheffName} готує ${dish}`)
// };
// makeDish('Mango', '🥧');
// makeDish('Mango', '🥚');
// makeDish('Mango', '🍵');

// makeDish('Poly', '🍽️');
// makeDish('Poly', '☕');
// makeDish('Poly', '🍔');
// const makeSheff = function (name){
//     const makeDish = function (dish){
//         console.log(`${name} готує ${dish}`)
//     };
//     return makeDish;
// };
// const mango = makeSheff('Mango');
// const poly = makeSheff('Poly');
// mango('🥧')
// mango('🥚')
// poly('☕')
// ?-------- Округлятор----🤷‍♂️-----------------

// const floatingPoint = 3.456789;
// const someInt = Math.round(floatingPoint);
// const withDecimals = Number(floatingPoint.toFixed(2));
// console.log(Number(floatingPoint.toFixed(3)));

// const number1 = 3.4775;
// const number2 = 4.98889;
// console.log(Number(number1.toFixed(2)));
// console.log(Number(number2.toFixed(4)));

// const rounder = function (number, place) {
//   return Number(number.toFixed(place));
// };
// console.log(rounder(2.343344, 3));
// console.log(rounder(4.7676768585, 4));
// console.log(rounder(9.8984949, 5))
// console.log(rounder(1.9799, 2));

// const rounder = function (place) {
//   return function (number) {
//     return Number(number.toFixed(place));
//   };
// };
// const rounder2 = rounder(2);
// const rounder3 = rounder(3);
// console.log(rounder2(3.858858));
// console.log(rounder3(3.858858));
// console.log(rounder2(3.858858, 2));
// console.log(rounder3(3.858858, 3));

// ? Особисті дані і функції - приховані реалізації. Інтерфейс

// const salaryManagerFactory = function (employeeName, baseSalary = 0) {
//   let salary = baseSalary;

//   const changeBy = function (amount) {
//     salary += amount;
//   };
//   return {
//     raise(amount) {

//       if (amount > 5000){
//         return "А ти батенька не зажрався?😄"
//       }
//       salary += amount;
//     },
//     lower(amount) {
//         salary -= amount;
//     },
//     current() {
//       return `Поточна зарплатa ${employeeName} - ${salary}$`;
//     },
//   };
// };
// const salaryManager = salaryManagerFactory('Vlad', 5000);
// console.log(salaryManager.raise(5001))
// console.log(salaryManager.current());

//? Стрілочні функції ---------------------------------------------------
//? - Оголошення --------------------------------------------------------
//? - Явне і не явне повернення -----------------------------------------
//? - Аргументи ---------------------------------------------------------
//? - Не явне повернення об`єкта ----------------------------------------

// const add = function (a, b, c){
//     console.log(a, b, c);
//     return a + b + c;
// };
// console.log(add(5, 10, 15));

// const addArrow = (a, b, c) => {
//     console.log(a, b, c);
//     return a + b + c;
// };
// console.log(addArrow(5, 10, 15));

// const addArrow1 = (a, b, c) => a + b + c;
// console.log(addArrow1(5, 10, 15));
// ?---------------------------------------------------------------------

//   const add = function (a, b, c){
//     console.log(arguments);
//     return a + b + c;
// };
// console.log(add(5, 10, 15));

// const addArrow = (a, b, c) => {

//     return a + b + c;
// };
//    console.log(addArrow(5, 10, 15));
// ? ====================================================================
//  const fnA = function () {
//     return {
// a: 5,
//     };
//  };
//  console.log(fnA());

//  const fnB = () => ({arrowB: 5});
//  console.log(fnB());
// ?=====================================================================
// const onGetPositionSucces = (position) => {
//     console.log(position);
// };
// const onGetPositionError = (error) => {
//   console.log(error);
// };
// window.navigator.geolocation.getCurrentPosition(
//     onGetPositionError,
//     onGetPositionSucces,
// );
// ?================================================================

// const callback1 = function (value) {
//     return value >=3;
// }
// const result1 = filter([1, 2, 3, 4, 5], callback1);

// console.log(result1);
// const callback2 = function (value){
//     return value <= 4;
// };
// const result2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);

// console.log(result2);

// const fruits = [
//    { name: '🍎', quantity: 200, isFresh: true},
//    { name: '🍇', quantity: 150, isFresh: false},
//    { name: '🍌', quantity: 100, isFresh: true},
// ];
// const getFruitsWithQuantity = function (fruit) {
//     return fruit.quantity >= 120;
// };
// const result3 = filter(fruits, getFruitsWithQuantity);
// console.log(result3)
// !!!!!!!   =>----------------------------------------------------------
//* const getFruitsWithQuantity = fruit => fruit.quantity >= 120;
//*

//todo const result3 = filter(fruits, fruit => fruit.quantity >= 120);
// console.log(result3)

// ?   Рефакторинг в стрілочні функції------
// const numbers = [1, 5, 2, 4, 3];
// // const greaterThenTwo = numbers.filter(function (num) {
// //     return num > 2;
// // });
// const greaterThenTwo = numbers.filter(num => num > 2);
// console.log(greaterThenTwo);

// const multByTwo = greaterThenTwo.map(num => num * 3);
// // const multByTwo = greaterThenTwo.map(function (num) {
// //     return num * 3;
// // });
// console.log(multByTwo);
// !-----------------------------------------------------------------

// const callback1 = value => value >= 3;

// const result1 = [1, 2, 3, 4, 5].filter(callback1);
// console.log(result1);

// const callback2 = value => value <= 4;

// const result2 = [1, 2, 3, 4, 5, 6, 7, 8].filter(callback2);
// console.log(result2);
// !-----------------------------------------------------------------
// const salaryManagerFactory = (employeeName, baseSalary = 0) => {
//   let salary = baseSalary;

//   const changeBy = function (amount) {
//     salary += amount;
//   };
//   return {
//     raise(amount) {

//       if (amount > 5000){
//         return "А ти батенька не зажрався?😄"
//       }
//       salary += amount;
//     },
//     lower(amount) {
//         salary -= amount;
//     },
//     current() {
//       return `Поточна зарплатa ${employeeName} - ${salary}$`;
//     },
//   };
// };
// const salaryManager = salaryManagerFactory('Vlad', 5000);
// console.log(salaryManager.raise(5001))
// console.log(salaryManager.current());
