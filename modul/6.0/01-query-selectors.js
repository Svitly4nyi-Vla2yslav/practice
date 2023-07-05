// const magicBtn = document.querySelector('.js-magic-btn');

// /*
//  * document.querySelector(selector) и document.querySelectorAll(selector)
//  *   selector - любой валидный CSS-селектор
//  *
//  * Что возвращают?
//  */

// const navEl = document.querySelector('.site-nav');
// console.log('navEl', navEl);

// const navLinksEl = document.querySelectorAll('.site-nav__link');
// console.log('navLinksEl', navLinksEl);

// /*
//  * Document.querySelector* и Element.querySelector*
//  */
// const element = document.querySelector('.element[element]');

// const element = document.querySelector('[element]');
// const element = document.querySelector('#element-2');
// const element = document.getElementById('element-2');
// const element = document.getElementsByTagName('div');
// const element = document.getElementsByClassName('element');

// const element = document.querySelector('#element-2');
// element.classList.add('test-class')
// element.classList.remove('element')
// element.classList.toggle('class-toggle')
// element.classList.replace('test-class', 'class-replace')
// element.textContent = 'Element = 3';
// element.style.color = 'green';
// element.style.marginTop = '20px'
// element.style.fontSize = '30px'
// element.style.color = null;
// console.log(element)

// const containerElement = document.querySelector('.container')
// const element = document.querySelector('#element-2');

// console.log(element.parentNode)
// console.log(containerElement.children)

// const containerElement = document.querySelector('.container');
// containerElement.dataset.position = '5';
// console.dir(containerElement.dataset.position);

// const newElement = document.createElement('div')
// newElement.classList.add('new-element')
// newElement.textContent = 'New Element';

// const containerElement = document.querySelector('.container');
// containerElement.append(newElement); // ⬇️
// containerElement.prepend(newElement); //⬆️ ⬆️

// const containerElement = document.querySelector('.container');
// console.log(containerElement.innerHTML);

// const newContainerElement = document.createElement('div');
// newContainerElement.classList.add('new-container');
// const oldContainerElement = containerElement.innerHTML;
// newContainerElement.innerHTML = oldContainerElement;
// document.body.append(newContainerElement);
// console.log()

// const containerElement = document.querySelector('.container');
// const newBlockElementsStr = `
// <div>
// <div class='new-block'>New Block Span 1</div>
// <div class='new-block'>New Block Span 2</div>
// </div>
// `;
// console.log(newBlockElementsStr);
// containerElement.insertAdjacentHTML('beforeend', newBlockElementsStr);

const colors = [
  {
    label: 'red',
    color: '#FF0000',
  },
  {
    label: 'green',
    color: '#00FF00',
  },
  {
    label: 'blue',
    color: '#0000FF',
  },
  {
    label: 'yellow',
    color: '#FFFF00',
  },
];
const btnElementArr = colors.map(buttonData => {
  const btnElement = document.createElement('button');
    btnElement.textContent = buttonData.label;
    // btnElement.style.color = buttonData.color;
    btnElement.style.margin = '20px';
    btnElement.style.backgroundColor = buttonData.color;
    const containerElement = document.createElement('div');
    containerElement.append(btnElement)
    containerElement.style.marginBottom = '10px';
    return containerElement;
});
console.log(btnElementArr)
document.body.append(...btnElementArr)