// ! Основи ООП
// ? Функції-конструктори
// ? - Іменовані
// ? - Оператори new
// ? - Властивості Function.prototype

// const Car = function ({ brand, model, price } = {}) {
//   //   const { brand, model, price } = config;
//   //   console.log(config);
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
//   this.changePrice = function (newPrice) {
//     this.price = newPrice;
//   };
// };
// Car.prototype.sayHi = function () {
//   console.log('Car.prototype.sayHi -> this', this);
//   console.log('😍');
// };
// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };
// console.log(Car.prototype);
// const myCar = new Car({
//   brand: 'Audi',
//   model: 'Q3',
//   price: 35000,
// });
// console.log(myCar);

// const myCar1 = new Car({
//   brand: 'BMW',
//   model: 'X6',
//   price: 50000,
// });
// console.log(myCar1);

// const myCar2 = new Car({
//   brand: 'Opel',
//   model: 'Astra',
//   price: 3000,
// });
// console.log(myCar2);
// myCar.sayHi();
// myCar1.sayHi();
// myCar2.sayHi();
// myCar2.changePrice(10000)
// !----------------------------------------------------
// const User = function ({ email, password } = {}) {
//   this.email = email;
//   this.password = password;
// };
// User.prototype.changeEmail = function (newEmail) {
//   this.email = newEmail;
// };

// const mango = new User({ email: 'mango@mail.com', password: 1111111 });

// mango.changeEmail('my-new-@email.com');
// console.log(mango);

// ? Статичні властовості і методи
// ? - Статичні властивості і методи доступні тільки на самому конструкторі
// ? - В статичних методах немає this

// User.message =
//   'Я статична властивість, мене нема на екземплярах або в прототипі ';
// User.logInfo = function (obj) {
//   console.log(obj);
// };
// User.logInfo(mango);
// console.log(mango);

