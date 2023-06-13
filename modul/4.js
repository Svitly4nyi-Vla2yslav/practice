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
// // ? 1. Надо передать функцію 
// // ? 2. Функція получає елемент масива
// // ? 3. Якщо елемент масива задовільняє умову то функція поверне 'true'.
// // ? 4. Якщо елемент масива НЕ задовільняє умову то функція поверне 'false'
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