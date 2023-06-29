// ! Ланцюжок прототипів.
// ? [[Prototype]] i __proto__
// ? Object.getPrototypeOf() // const objA = Object.create(objB)
// const objC = {
//   z: 5,
// };

// const objB = Object.create(objC);
// objB.y = 2;
// console.log(objC);
// // console.log(objC.hasOwnProperty('z'))
// console.log(objB);
// // console.log(objB.y);
// // console.log(objB.z);
// const objA = Object.create(objB);
// objA.x = 1;
// console.log(objA);

// const dummyObj = Object.create({ message: 'Це властивість обьєкта прототипа' })
// dummyObj.message = 'Це власні властивості обьєкта'
// console.log('dummyObj', dummyObj)
// console.log(dummyObj.message);

// ? Алгоритм пошуку властивості в ланцюжку прототипів
// ? - Пошук починається в власних властивостях
// ? - Якщо властивості немає в власних, пошук переходе до ланцюжка  прототипів
// ? - Пошук завершується при першому співпадінні (є така властивість)
// ? - Повертається значення властивості.

// const objA = {
//   x: 1,
// };
// console.log('objA', objA);
// console.log(objA.y);
