// !--------------------- Методи map(callback)--------------------------------------------------------
// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);

// console.log(planets)
// console.log(planetsLengths);
// !-----------------------------------------------------------------
//? Використовуючи метод map(), зроби так, щоб у змінній titles вийшов масив назв
//? книг(властивість title) з усіх об'єктів масиву books.
//? Оголошена змінна books
//? Значення змінної books - це масив
//? Оголошена змінна titles
//? Значення змінної titles - це масив ["The Last Kingdom", "Beside Still Waters",
//? "The Dream of a Ridiculous Man", "Redder Than Blood", "Enemy of God"]
//? Для перебирання масиву books використовується метод map() як чиста функція
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(titles1 => titles1.title);
// console.log(titles);

// ? Головний масив ////////////////////////////////////////////////////////
const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];
// ? Отимуєм масив імен всіх гравців.
// const playerNames = players.map(player => player.name);
// console.log('playerNames', playerNames);

// const playerIds = players.map(player => player.id);
// console.log('playerIds', playerIds);

// const res = players.map(player => {
//     return {
//         name: player.name,
//         online: player.online,
//     }
// });
// const res = players.map(({ name, online }) => ({ name, online}));
// console.log('res', res);
// // ? Збільшуємо кількість поінтів кожного гравця на 10 %.
// const upatedPlayers = players.map(player => ({
//   ...player,
//   points: player.points * 1.1,
// }));
// console.table(upatedPlayers);
// ? Знаходим певного гравця щоб його змінити.
// const playerIdToUpdate = 'player-1';
// const upatedPlayers1 = players.map(player => {
//   console.log(player.id);
//   if (playerIdToUpdate === player.id) {
//       console.log('⬆️ Ми знайшли кого треба обновити ⬆️');
//       return {
//           // 'Це буде новий обьєкт';
//           ...player,
//           timePlayed: player.timePlayed + 100,
//       };

//   }
//   return player;
//   return 'це старий обьєкт';

// });


 // ? --------Тернарний 🔽

// const playerIdToUpdate = 'player-1';
// const upatedPlayers1 = players.map(player => {
//   console.log(player.id);
//   return playerIdToUpdate === player.id
//     ? {
//         ...player,
//         timePlayed: player.timePlayed + 100,
//       }
//     : player;
// });
// console.table(upatedPlayers1);




















