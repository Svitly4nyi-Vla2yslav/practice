// ? Наслідування
// ? - extends
// ? - super()

// class Hero {
//   constructor(name, xp) {
//     this.name = name;
//     this.xp = xp;
//   }
//   gainXp(amount) {
//     console.log(`${this.name} получає ${amount} опита`);
//     this.xp += amount;
//   }
// }

// class Warior extends Hero {
//   constructor(name, xp, weapon) {
//     super(name, xp);
//     this.weapon = weapon;
//   }
//   attack() {
//     console.log(`${this.name} атакує використовуючи ${this.weapon}`);
//   }
// }
// class Mage extends Hero {
//   constructor(name, xp, spells = []) {
//     super(name, xp);
//     this.spells = spells;
//   }
//   cast() {
//     console.log(`${this.name} щось там кастуєт 🧙`);
//   }
// }

// class Hero {
//   constructor({ name = 'hero', xp = 0 } = {}) {
//     this.name = name;
//     this.xp = xp;
//   }
//   gainXp(amount) {
//     console.log(`${this.name} получає ${amount} опита`);
//     this.xp += amount;
//   }
// }

// class Warior extends Hero {
//   constructor({ weapon, ...restProps } = {}) {
//     super(restProps || {});
//     this.weapon = weapon;
//   }
//   attack() {
//     console.log(`${this.name} атакує використовуючи ${this.weapon}`);
//   }
// }
// class Berserk extends Warior {
//   constructor({ warcry, ...restProps } = {}) {
//     super(restProps);
//     this.warcry = warcry;
//   }
//   babyRage() {
//     console.log(this.warcry);
//   }
// }
// const ajax = new Berserk({
//   name: 'ajax',
//   xp: 500,
//   weapon: 'axe',
//   warcry: 'waaaaaaaaaah',
// });
// console.log(ajax);
// ajax.babyRage();
// ajax.attack();
// ajax.gainXp(1000);

// class Mage extends Hero {
//   constructor({ spells, ...restProps } = {}) {
//     super(restProps || {});
//     this.spells = spells;
//   }
//   cast() {
//     console.log(`${this.name} щось там кастуєт 🧙`);
//   }
//! }
// const mango = new Warior ({ name: 'mango', xp: 1000, weapon: 'Leopard - 2' });
// console.log(mango);
// mango.attack();
// mango.gainXp(1000);

// const poly = new Mage({ name: 'poly', xp: 500, spells: ['фаербол'] });
// console.log(poly);
// poly.cast();
// poly.gainXp(200);
// ! Деструктуризація
