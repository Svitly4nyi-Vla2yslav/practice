const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
];

//? Array.prototype.every()
//? - По елементно перебирає оригінальний масив
//? - Повертає true якщо всі елементи масива задовільняють умову.
// const isAllOnline = players.every(player => player.online);
// console.table('isAllOnline:', isAllOnline)

//? Array.prototype.some()
//? - По елементно перебирає оригінальний масив
//? - Повертає true якщо хоча б один елемент масива задовільняють умову.
// const isAnyOnline = players.some(player => player.online);
// console.log('isAnyOnline:', isAnyOnline);

// const anyHardcorePlayers = players.some(player => player.timePlayed > 400)
// console.log(anyHardcorePlayers)