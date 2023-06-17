//? Array.prototype.find()
//? - По елементно переберає оригінальний масив.
//? - Повертає перший елемент що задовільняє умову або undefined.

// const numbers = [5, 10, 15, 20, 25];
// const number = numbers.find(number => number === 10)
// console.log(number)

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
];
//! Шукаєм гравця по ід
// const playerIdToFind = 'player-3';
// const playerWithId = players.find(player => player.id === playerIdToFind)
// console.table(playerWithId)
// ! Шукаєм гравця по імені
// const playerNameToFind = 'Poly';
// const playerWithName = players.find(player => player.name === playerNameToFind)
// console.table(playerWithName);

// const findPlayerById = (allPlayer, playerId) => {
//     return allPlayer.find(player => player.id === playerId)
// };
// console.table(findPlayerById(players, 'player-1'));
// console.table(findPlayerById(players, 'player-4'));








































