const Car = function ({ brand, model, price } = {}) {
  //   const { brand, model, price } = config;
  //   console.log(config);
  this.brand = brand;
  this.model = model;
  this.price = price;
};

Car.prototype.changePrice = function (newPrice) {
  this.price = newPrice;
};
// console.log(Car.prototype);

Car.description = 'Клас описуючий автомобіль';

Car.logInfo = function (carObj) {
//   console.log('Car.logInfo -> carObj', carObj);
};

const myCar = new Car({
  brand: 'Audi',
  model: 'Q3',
  price: 35000,
});
// !-------------------------------------------
class Car1 {
  static description = 'Клас описуючий автомобіль';
  static logInfo(carObj) {
    // console.log('Car.logInfo -> carObj', carObj);
  }
  //   #test = 'test';
  constructor({ brand, model, price } = {}) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  changePrice(newPrice) {
    this.price = newPrice;
  }
  get _price() {
    return this.price;
  }
  set _price(newPrice) {
    this.price = newPrice;
  }
  set _model(newModel) {
    this.model = newModel;
  }
  //   setModel(newModel) {
  //     this.model = newModel;
  //   }
  get _model() {
    return this.model;
  }
  //   getModel(newModel) {
  //     return this.model;
  //   }
}
// console.log(Car1.description);
const carInstance = new Car1({
  brand: 'Audi',
  model: 'Q3',
  price: 35000,
});
//
// console.log();
// Car1.logInfo(carInstance)
// carInstance.changePrice(2000)
// console.log(carInstance.getModel());
// carInstance.setModel('Q4');
// console.log(carInstance.getModel());

// console.log(carInstance);
// console.log(carInstance._model);
// carInstance.model = 'Astra';
// console.log(carInstance._model);
// carInstance._price = 50000;
// console.log(carInstance._price);

// const obj = {
//   a: 100,
//   get _a() {
//     return this.a;
//   },
//   set _a(x) {
//     this.a = x;
//   },
// };
// console.log(obj);
