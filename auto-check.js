// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];
// // Change code below this line
// const getUserNames = users => users.map(user => user.name);

//   // Change code above this line
//   ;
// // Change code below this line
// const getUserNames = (users) => {
//   const names = users.map((user) => user.name);
//   return names;
//   };
//   // Change code above this line
//   console.log(getUserNames(users));
// !
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);
// console.log(evenNumbers);
// console.log(oddNumbers);
// !
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(first => first % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(first => first % 2 !== 0);

// const eachElementInSecondIsEven = secondArray;
// const eachElementInSecondIsOdd = secondArray;

// const eachElementInThirdIsEven = thirdArray;
// const eachElementInThirdIsOdd = thirdArray;

// console.log(eachElementInFirstIsEven)
// console.log(eachElementInFirstIsOdd);
// console.log(eachElementInSecondIsEven);
// console.log(eachElementInSecondIsOdd);
// console.log(eachElementInThirdIsEven);
// console.log(eachElementInThirdIsOdd);
// !
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction', 'mysticism'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism', 'adventure'],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter(
//   (genreses, index, book) => book.indexOf(genreses) === index
// );
// console.log(allGenres);
// console.log(uniqueGenres);
// !
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

// const MIN_RATING = 8;
// const AUTHOR = 'Bernard Cornwell';
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);
// console.table(topRatedBooks);
// console.table(booksByAuthor)
// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];

// // Change code below this line

// const getUsersWithEyeColor = (users, color) => {
//   const blue = users.filter(user => user.eyeColor === color);
//   return blue;
// };
// // Change code above this line
// console.log(getUsersWithEyeColor(users , "brown"));
// !
const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
    age: 39,
  },
];
// // Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) => {
//   const ageUsers = users.filter(user => user.age < maxAge && user.age > minAge);
//   return ageUsers;

// };
// // Change code above this line
// console.log(getUsersWithAge(users, 20, 30));
// !
// // Change code below this line
// const getUsersWithFriend = (users, friendName) => {
//   const userNames = users.filter(user => user.friends.includes(friendName));
//   return userNames;
// };
// // Change code above this line
// console.log(getUsersWithFriend(users, "Briana Decker"))
// !
// Change code below this line
// const getFriends = users => {
//   const allFriends = users.flatMap(user => user.friends);
//   const oneFriends = allFriends.filter((friend, index, array) => array.indexOf(friend) === index);
//   return oneFriends;
// };

// console.log(getFriends(users));

// Change code above this line

// const allTags = tweets.reduce(
//   (oldAcc, tweet) => [...oldAcc, ...tweet.tags],
//   []
// );
// const tagsStats = allTags.reduce((acc, tag) => ({
//   ...acc,
//   [tag]: acc[tag] ? acc[tag] + 1 : 1,
// }));

// Change code below this line
// const getActiveUsers = (users) => {
//   const activeUsers = users.filter(user => !user.isActive);
//   return activeUsers;

// };
// console.log(getActiveUsers(users))
// Change code above this line
// const onlinePlayers = players.filter(player => player.online);
// console.table(onlinePlayers);
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
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);

// console.log(bookWithTitle);
// console.log(bookByAuthor);
// !
// Change code below this line
// const getUserWithEmail = (users, email) => {
//   const userEmail = users.find(user => user.email === email);
//   return userEmail;

// };
// // Change code above this line

// console.log(getUserWithEmail(users, 'elmahead@omatom.com'));
// !
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((acc, playtime) => acc + playtime);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;
// !
// console.log(totalPlayTime)
// const numbers = [5, 10, 15, 20, 25];
// const total = numbers.reduce((acc, number) => {
//     console.log('number', number);
//     console.log('acc', acc);
//     return acc + number;
// }, 0);
// !------------------------------------------------------------------
// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce(
//   (totalTime, { playtime, gamesPlayed }) =>
//     totalTime + playtime / gamesPlayed,
//   0
// );
// const averagePlayTime = totalAveragePlaytimePerGame / players.length;

// console.log(totalAveragePlaytimePerGame);
// console.log(averagePlayTime);
// !
// const totalTimePlayed = players.reduce(
//   (totalTime, player) => totalTime + player.timePlayed,
//   0,
// );
// !--------------------
// // Change code below this line
// const calculateTotalBalance = users => {
//   const totalBalance = users.reduce((acc, { balance }) => acc + balance, 0);
//   return totalBalance;

// };
//! Change code above this line
// Change code below this line
// const getTotalFriendCount = users => {
//   const totalFriends = users.reduce(
//     (acc, userName) => acc + userName.friends.length,
//     0
//   );
//   return totalFriends;
// };
// console.log(getTotalFriendCount)
//! Change code above this line
// !----------------------------

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
// Change code below this line

// const sortedByAuthorName = [...books].sort((nameA, nameB) =>
//   nameA.author.localeCompare(nameB.author)
// );

// const sortedByReversedAuthorName = [...books].sort((nameA, nameB) =>
//   nameB.author.localeCompare(nameA.author)
// );

// const sortedByAscendingRating = [...books].sort(
//   (ratingA, ratingB) => ratingA.rating - ratingB.rating
// );

// const sortedByDescentingRating = [...books].sort(
//   (ratingA, ratingB) => ratingB.rating - ratingA.rating
// );

// console.table(sortedByAuthorName);
// console.table(sortedByReversedAuthorName);
// console.table(sortedByAscendingRating);
// console.table(sortedByDescentingRating);
// Change code below this line
//? const sortByAscendingBalance = users.sort(
//?   (sortA, sortB) => sortA.balance - sortB.balance
//? );
// const sortByAscendingBalance = users => {
//   const sortBalance = users.sort(
//     (sortA, sortB) => sortA.balance - sortB.balance
//   );
//   return sortBalance
// };

// Change code above this line
//? console.table(sortByAscendingBalance);

// Change code below this line
// const sortByDescendingFriendCount = users => {
//   return [...users].sort((a, b) => b.friends.length - a.friends.length);
// };
// Change code above this line
//? console.table(sortByDescendingFriendCount);

// Change code below this line
// const sortByName = users => {
//   return [...users].sort((nameA, nameB) =>
//     nameA.name.localeCompare(nameB.name)
//   );
// };
//! Change code above this line

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
//   {
//     title: 'The Dreams in the Witch House',
//     author: 'Howard Lovecraft',
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// Change code below this line

// const names = [...books]
//   .filter(ratingFilter => ratingFilter.rating > MIN_BOOK_RATING)
//   .map(nameAuthor => nameAuthor.author)
//   .sort((nameA, nameB) => nameA.localeCompare(nameB));
// console.log(names);
//! Change code below this line
// const getNamesSortedByFriendCount = users => {
//   return [...users]
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map(friend => friend.name);
// };
//! Change code above this line
// console.table([...users])

// const getSortedFriends = users => {
//   return [...users]
//     .flatMap(user => user.friends)
//     .filter((elem, index, array) => array.indexOf(elem) === index)
//     .sort((a, b) => a.localeCompare(b));
// };
// console.log([...users])
// !                      ====
// !!                    ||___            💛
// !                      ___||  MODUL    💙
// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish',
// };
// // Change code below this line

// const child = Object.create(parent);

// // Change code above this line
// child.name = 'Jason';
// console.log(child.hasOwnProperty('name'));
// child.age = 27;
// console.log(parent.hasOwnProperty('heritage'));
// console.log(parent.hasOwnProperty('surname'));
// console.log(child.name);
// console.log(child.hasOwnProperty('surname'));
// console.log(child.hasOwnProperty('heritage'));
// console.log(child.age);
// !000000000000000000000000000
// class Car {
//   // Change code below this line
//   constructor({brand, model, price}) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code above this line
// }
// ;
// console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }))
// !111111111
// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code below this line
//   getPrice() {
//     return this.price;
//   }
//   changePrice(newPrice) {
//     this.price = newPrice;
//   }

//   // Change code above this line
// }
// !0000000000
// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(newItem) {
    
//    return this.items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     this.items = this.items.filter(item => item !== itemToRemove);
//   }
// }

// // Change code above this line
// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
