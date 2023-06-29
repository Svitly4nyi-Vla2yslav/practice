//? this - значення контексту всередині функції(не стрілочної) визначається не на
//? момент її створення, а на момент виклику.Тобто значення this визначається тим,
//?     як викликається функція, а не де вона була оголошена.
// const user = {
//   tag: 'Mango',
//   showTag() {
//     // console.log('showTag -> this', this);
//   },
// };
//  user.showTag();

// ? Виклик без контекста
// ? В сувором режимі = undefined
// ? не в сувором режимі = window
// const foo = function () {
//   //   console.log('foo -> this', this);
// };
// foo();
// ? Як метод об'єкта але оголошено як зовнішня функція.
// ? В контексті обьєкта.
// const showTag = function () {
//   console.log('showTag -> this', this);
//   console.log('showTag -> this.tag', this.tag);
// };
// // showTag()
// const user = {
//   tag: 'Mango',
// };
// user.showUserTag = showTag;
// console.log('user', user);
// user.showUserTag()
// ? Виклик без контекст, але обьявлена як метод обьекта.
// const user = {
//   tag: 'Mango',
//   showTag() {
//     console.log('showTag -> this', this);
//     console.log('showTag -> this.tag', this.tag);
//   },
// };
// user.showTag();
// const outerShowTag = user.showTag;
// outerShowTag();
// ? Контекст в коллбек функціях.
// const user = {
//   tag: 'Mango',
//   showTag() {
//     console.log('showTag -> this', this);
//     console.log('showTag -> this.tag', this.tag);
//   },
// };
// user.showTag();
// const xyz = user.showTag;
// xyz();
// !
// const user = {
//   tag: 'Mango',
//   showTag() {
//     console.log('showTag -> this', this);
//     console.log('showTag -> this.tag', this.tag);
//   },
// };
// const invokeAction = function (action) {
//   console.log(action);
//   action();
// };
// invokeAction(user.showTag);
// user.invokeAction();
// !
// const fn = function () {
//   console.log('fn ->', this);
// };
// fn()
// !
// const book = {
//   title: 'React for beginners',
//   showThis() {
//     console.log('showThis -> this', this);
//   },
//   showTitle() {
//     console.log('showTitle -> this.title', this.title);
//   },
// };
// book.showThis()
// !
// const outerShowThis = book.showThis;
// outerShowThis();

//! ? Тренуємось ===============================================================
// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log('changeColor -> this', this);
//   };
//   return changeColor;
// };
// const updateColor = makeChangeColor();
// updateColor('yellov');

// const hat = {
//   color: 'blue',
//   updateColor,
// };
// hat.updateColor('orange');
// !-----------------------------

// const counter = {
//   value: 0,
//   increment(value) {
//     console.log('increment -> this', this);
//     this.value += value;
//   },
//   descrement(value) {
//     console.log('descrement -> this', this);
//     this.value -= value;
//   },
// };
// const updateCounter = function (value, operation) {
//  operation(value);
// };
// updateCounter(10, counter.increment);
// updateCounter(5, counter.descrement);
// !====================================💤
// ?===================================🫰==💩=============================
// todo   ======================== 💰  ================================

//?????????? call i aplply
// const showThis = function (a, b, r) {
//   console.log(a, b, r);
//   console.log('showThis -> this', this);
// };
// showThis();
// const objA = {
//   a: 5,
//   b: 10,
// };
// showThis.call(objA, 10, 20, 30, 40, 50);
// showThis.apply(objA, [5, 1, 1]);
// const objB = {
//   a: 4,
//   b: 443,
// };
// showThis.call(objB, 12, 22, 32, 42, 52);
// showThis.apply(objB, [54437, 448, 3]);
// const changeColor = function (color) {
//   console.log('changeColor -> this', this);
//   this.color = color;
// };
// const hat = {
//   color: 'black',
// };
// changeColor.call(hat, 'orange');
// console.log(hat);
// const sweater = {
//   color: 'green',
// };
// changeColor.call(sweater, 'blue');
// console.log(sweater);

// // ?    копія і привязка bind()
// const changeHatColor = changeColor.bind(hat);
// const changeSweaterColor = changeColor.bind(sweater);
// // changeColor();
// changeHatColor('yelow');
// changeSweaterColor('Vlad');
// console.log(sweater)
// console.log(hat)

// ? counter bind()
// ?
// const counter = {
//   value: 0,
//   increment(value) {
//     console.log('increment -> this', this);
//     this.value += value;
//   },
//   descrement(value) {
//     console.log('descrement -> this', this);
//     this.value -= value;
//   },
// };
// const updateCounter = function (value, operation) {
//  operation(value);
// };
// updateCounter(1000, counter.increment.bind(counter));
// updateCounter(0, counter.descrement.bind(counter));
// console.log(counter)
// !!!!!!!!!!!!!!!!!!!!!!!  Cкипт !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const counter = {
//   value: 0,
//   increment(value) {
//     console.log('increment -> this', this);
//     this.value += 1;
//   },
//   descrement(value) {
//     console.log('descrement -> this', this);
//     this.value -= 1;
//   },
// };
// const decrementBtn = document.querySelector('.js-descrement');
// const incrementBtn = document.querySelector('.js-increment');
// const valueEl = document.querySelector('.js-value');

// decrementBtn.addEventListener('click', function () {
//   console.log('Клікнули на дескремент');
//   counter.descrement();
//   console.log(counter);
//   valueEl.textContent = counter.value;
// });
// incrementBtn.addEventListener('click', function () {
//   console.log('Клікнули на інкремент');
//   counter.increment();
//   console.log(counter);
//   valueEl.textContent = counter.value;
// });
