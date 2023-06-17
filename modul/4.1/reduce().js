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
const totalTimePlayed = players.reduce(
  (totalTime, player) => totalTime + player.timePlayed,
  0,
);
console.table(totalTimePlayed);
