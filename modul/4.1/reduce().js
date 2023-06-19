const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];
//? масив.reduce((previousValue, element, index, array) => {
//?   // Тіло колбек-функції
//? }, initialValue);
//? Не змінює оригінальний масив.
//? Поелементо перебирає оригінальний масив.
//? Повертає все, що завгодно.
//? Робить все, що завгодно.

// const numbers = [5, 10, 15, 20, 25];
// const total = numbers.reduce((acc, number) => {
//     console.log('number', number);
//     console.log('acc', acc);
//     return acc + number;
// }, 0);
// !
// const total = numbers.reduce((acc, number) => acc + number, 0);
// console.log(total);

// ? Рахуєм загальну зарплату
// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };
// const totalSalary = Object.values(salary).reduce(
//   (total, value) => total + value,
//   0
// );
// console.log(totalSalary);
//?
// const totalTimePlayed = players.reduce(
//   (totalTime, player) => totalTime + player.timePlayed,
//   0,
// );
// console.table(totalTimePlayed);
// !
// const cart = [
//   { label: '🍎', price: 100, quantity: 2 },
//   { label: '🍌', price: 120, quantity: 3 },
//   { label: '🍋', price: 70, quantity: 4 },
// ];
// const totalAmount = cart.reduce(
//   // (total, item) => total + item.price * item.quantity, //? aбо
//   (total, {price, quantity}) => total + price * quantity,
//   0
// );
// console.log(totalAmount);

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];
// const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// console.log(likes); // 32
// const countLikes = tweets => {
//   return tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// };
// !
// console.log(countLikes(tweets)); // 32
const allTags = tweets.reduce(
  (oldAcc, tweet) => [...oldAcc, ...tweet.tags],
  []
);
// // // tags.push(...tweet.tags);
// // // return tags;
// console.log(allTags);
// const tagsStats = allTags.reduce((acc, tag) => {
//   console.log(acc);
//   if (acc[tag]) {
//     return acc;
//   }
//   acc[tag] = 1;
//   return acc;
// }, {});
// console.log(tagsStats);
// !
// const tagsStats = allTags.reduce((acc, tag) => ({
//   ...acc,
//   [tag]: acc[tag] ? acc[tag] + 1 : 1,
// }));
// return acc[tag] ? { ...acc, [tag]: acc[tag] + 1 } : { ...acc, [tag]: 1 };
// console.log(tagsStats);
// // // !
// const user = {
//   name: 'Mango',
// };
// const key = 'name'
// console.log(user[key]);



