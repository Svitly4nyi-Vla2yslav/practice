// ? Наслідування
// ? - extends
// ? - super()

class Hero {
  constructor( name , xp ) {
    this.name = name;
    this.xp = xp;
  }
  gainXp(amount) {
    console.log(`${this.name} получає ${amount} опита`);
    this.xp += amount;
  }
}

class Warior extends Hero {
  constructor(name, xp) {
    super(name, xp);
  }
  gainXp() {}
}
const mango = new Warior('mango', 1000 );
console.log(mango)