// document.addEventListener('click', clickHandler)
// function clickHandler(event) {
//   console.log(event);
// }

// const obj = {
//   price: 30,
//   count: 10,
// };
// function calcTotalPrice() {
//   console.log(this.price * this.count);
// }

// const buttonElement = document.querySelector('button');
// buttonElement.addEventListener('click', calcTotalPrice.bind(obj));
// function changeStyle() {
//   console.dir(this);
//   this.style.backgroundColor = 'yellow';
//   this.textContent = '💥Magik💥';
// }

// let count = 0;
// const buttonElement = document.querySelector('button');
// const counterElement = document.querySelector('.counter');
// buttonElement.addEventListener('click', buttonClick);
// buttonElement.addEventListener('click', showMessage);
// function showMessage() {
//     console.log('hallo')
// }
// function buttonClick() {
//   if (count > 19) {
//     buttonElement.removeEventListener('click', buttonClick);
//     return;
//   }
//   count += 1;
//   counterElement.textContent = count;
// }
