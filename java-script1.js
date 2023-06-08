//?!-----------Module 3 \ lesson 5---------------------------------
//? Напиши скрипт, який для об`єкта 'user', послідовно
//? - замінює значення 'hobby' на 'skydiving'
//? - замінює значення 'premium' на 'false'
//? - виводить вміст об`єкта 'user' у форматі ключ:значення використовуючи
//? 'Object.keys()' та 'for...of'
//?
// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true ,
// };
// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;
// // delete user.hobby
// const keysArr = Object.keys(user)
// for (const key of keysArr){
//  console.log(`${key}: ${user[key]}`);
// }

//? У вас є об`кт де зберігаються зарплати нашої команди. Напишіть код
//? для підсумування всіх зарплат і збережіть результат у змінній 'sum'
//? Повинно вийти 390. Якщо об`єкт 'salaries' порожній то буду 0.
// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };
// function getSalarySum(companySalaries){
//  const valuesArr = Object.values(companySalaries);
// //  if (!valuesArr.length) return 0;
// let sum = 0;
// for (const value of valuesArr){
//     sum += value;
// }
// return sum;
// }
// console.log(getSalarySum(salaries))

//? Напишіть функцію 'calcTotalPrice(stones, stoneName)' яка приймає масив об'єктів
//? та рядок з назвою каменя. Функція рахує і повертає загальну вартість каміння з
//? таким ім'ям, ціною та кількістю об'єкта.
// const stones = [
//     {name: 'Smaragd', price: 1300, quantity: 4},
//     {name: 'Diamant', price: 2700, quantity: 3},
//     {name: 'Sapfir', price: 400, quantity: 7},
//     {name: 'Щебінь', price: 200, quantity: 2},
// ];

// function calcTotalPrice(stonesArr, stoneName){
//     for(const stone of stonesArr ){
//         if (stone.hasOwnProperty('name') && stone.name === stoneName){
//             console.log('Target stone price:', stone.price)
//           return stone.price * stone.quantity;
//         }
//     }
// }
// console.log(calcTotalPrice(stones, 'Щебінь'))

//? Напиши скрипт управління особистим кабінетом інтернет банку. Є об'єкт
//? 'account' в якому необхідно реалізувати методи для роботи з балансом
//? та історією транзакцій.
// ? Типів транзакцій всього два.
// ? Можна покласти або зняти гроші з рахунку.
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };
// let idcounter = 0;
// // ? Кожна транзакція це об'єкт із властивостями: id, type, amount

// const account = {
//   balance: 0,
//   transactions: [],
//   createTransaction(amount, type) {
//     idcounter += 1;
//     // const transactionObj = {
//     //     id: idcounter,
//     //     type,
//     //     amount,
//     // }
//     // return transactionObj;
//     return {
//       id: idcounter,
//       type,
//       amount,
//     };
//   },
//   deposit(amount) {
//     // console.log(this);
//     this.balance += amount;
//     const newTransaction = this.createTransaction(amount, Transaction.DEPOSIT);
//     this.transactions.push(newTransaction);
//   },
//   withdraw(amount) {
//     if (amount > this.balance) {
//       alert('Не достатньо коштів!!!');
//       return;
//     }
//     this.balance -= amount;
//     const newTransaction = this.createTransaction(amount, Transaction.WITHDRAW);
//     this.transactions.push(newTransaction);
//   },
//   getBalance() {
//     return this.balance;
//   },
//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//       if (transaction.id === id) {
//         return transaction;
//       }
//     }
//   },
//   getTransactionTotal(type) {
//     let total = 0;
//     for (const transaction of this.transactions) {
//       if (transaction.type === type) {
//         total += transaction.amount;

//       }
//     }
//     return total;
//   },
// };

// account.deposit(100);
// account.deposit(1000)
// account.withdraw(500)
// console.log(account.getBalance())
// console.log(account.getTransactionDetails(2))
// // account.withdraw(1000);

// console.log(account.getTransactionTotal(Transaction.DEPOSIT))
// console.log(account.getTransactionTotal(Transaction.WITHDRAW))
// console.log(account.transactions)

// ! -----Module 3 \ lesson 6 ------------------------------------
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/dfsf/dfsdfs/sdfsdfd/fsdsdsd/ddd.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// const {
//   today: {
//     low: todayLow,
//     high: todayHigh,
//     icon: todayIcon = 'https://www.flaticon.com/dfsf/dfsdfs/sdfsdfd/fsdsdsd/ddd.svg',
//   },
//   tomorrow: {
//     low: tomorrowLow,
//     high: tomorrowHigh,
//     icon: tomorrowIcon = 'https://www.flaticon.com/dfsf/dfsdfs/sdfsdfd/fsdsdsd/ddd.svg',
//   },
// } = forecast;
// console.log(todayLow, todayHigh, todayIcon, tomorrowLow, tomorrowHigh, tomorrowIcon);

//?!  Деструктуризація ------------------------------------
//? Перепиши функцію так щоб вона приймала один об'єкт парпметрів
//? замість набору незалежних.
// function calcBMI(params) {
//     console.log(params);
//     const { weight, height} = params
//   const numericWeight = Number(weight.replace(',', '.'));
//   const numericHeight = Number(height.replace(',', '.'));
//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }
// console.log(
//   calcBMI({
//     weight: '88,3',
//     height: '1.75',
//   })
// );
// console.log(
//   calcBMI({
//     weight: '68,3',
//     height: '1.65',
//   })
// );
// console.log(
//   calcBMI({
//     weight: '118,3',
//     height: '1.95',
//   })
// );

//? Перепиши функцію так щоб вона приймала один об'єкт парпметрів
//? замість набору незалежних.
// function printContactsInfo(props){
//     const {names, phones} = props;
//     const nameList = names.split(',');
//     const phoneList = phones.split(',');
//     for (let i = 0; i < nameList.length; i += 1){
//         console.log(`${nameList[i]}: ${phoneList[i]}`);
//     }
// }
// printContactsInfo({
//     names: 'Vlad,Luba,Julian,Eva',
//     phones: '384837384,859499304,848539294,84958294739'
// })

//! Глибока деструктуризація
//? Перепиши функцію так щоб вона приймала один об'єкт парпметрів
//? замість набору незалежних.

// function getBotReport(props) {
//   const {
//     companyName,
//     bots: { repair: repairBots, defence: defenceBots },
//   } = props;
//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// console.log(
//   getBotReport({
//     companyName: 'Cyberdyne Systems',
//     bots: {
//       repair: 150,
//       defence: 50,
//     },
//   })
// );

//? Напиши функцію так щоб приймала об'єкт параметрів із властивостями 'companyName'
//? та 'stock' та виводила репорт про кількість товарів на складі будь-якой
//? компанії.
// function getStockReport(props){
// const {companyName, stock} = props;
// let sum = 0;
// for (const stockValue of Object.values(stock)){
//     sum += stockValue;
// }
// return `${companyName} has ${sum} items in stock!`
// }
// console.log(
//   getStockReport({
//     companyName: 'Cyberdyne Systems',
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   }),
// );
// console.log(
//     getStockReport({
//         companyName: 'Belacci',
//         stock:{
//             shoes: 20,
//             skirts: 10,
//             hats: 5,
//         }
//     })
// )