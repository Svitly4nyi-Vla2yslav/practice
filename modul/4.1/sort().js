// ? Array.prototype.sort(callback(curruntEl, nextEl){})
// ? - Сортує і змінює вихідний масив.
// ? - Повертає змінений масив, тобто посилання на відсортований вихідний.
// ? - За замовчуванням сортує за зростанням.
// ? - Сортування відбувається шляхом приведення значень до рядка і порівняння
// ? порядкових номерів у таблиці Unicode.

const numbers = [1, 9, 6, 2, 3];
// numbers.sort()
// console.log('numbers', numbers);

const letters = ['b', 'B', 'a', 'A'];
// letters.sort()
// console.log('letters', letters);

// ? ------За спадінням / За зростанням .

// numbers.sort((curEl, nextEl) => {
//     return curEl - nextEl;
// //todo  return nextEl - curEl;
// })
// console.log(numbers)
// ? Як зробити копию масива щоб не сортувати оригінальний
// ? - Array.prototype.slice()
// ? - операція spread
// const copy = [...numbers];
// copy.sort();
const copy = [...numbers].sort((a, b) => b - a); // на спадіння
const copy1 = [...numbers].sort((a, b) => a - b); // на зростання
// console.log('copy', copy);
// console.log('copy1', copy1);

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];
// ? по ігровому часу
// const sortedByBestPlayers = [...players].sort((prevPlayer, nextPlayer) => {
//   return prevPlayer.timePlayed - nextPlayer.timePlayed;
// });
// console.table(sortedByBestPlayers);
// !
// const sortedByWortsPlayer = [...players].sort(
//   (prevPlayer, nextPlayer) => nextPlayer.timePlayed - prevPlayer.timePlayed
// );

// console.table(sortedByWortsPlayer);
