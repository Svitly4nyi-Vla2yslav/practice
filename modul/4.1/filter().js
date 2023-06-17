//?           Array.prototype.filter()
//? - По елементно перебирає масив.
//? - Повертає новий масив (с елементами або пустий)
//? - Добавляє в повернений массив елементи які задовільняють виразу колбек-функції 
//? - якщо коллбек повернув true елемент добавляется в повернений массив 
//? - якщо коллбек повернув false елемент НЕ добавляється в повернений масив
// const numbers = [5, 10, 15, 20, 25];
// const filterNumbers = numbers.filter(number => number > 15 || number > 20);
// console.log(filterNumbers);
// console.log('numbers', numbers);


const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
];
// ! true
// const onlinePlayers = players.filter(player => player.online);
// console.table(onlinePlayers);
// 
// ! false
// const offlinePlayers = players.filter(player => !player.online);
// console.table(offlinePlayers);

//? Отримуем список хардкорних гравців у яких час більше 250 .
// const hardcorePlayers = players.filter(player => player.timePlayed > 250);
// console.table(hardcorePlayers);


























