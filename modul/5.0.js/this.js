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