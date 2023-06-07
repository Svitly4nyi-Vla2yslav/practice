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

