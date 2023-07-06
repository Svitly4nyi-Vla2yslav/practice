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

// const colors = [
//   {
//     label: 'red',
//     color: '#FF0000',
//   },
//   {
//     label: 'green',
//     color: '#00FF00',
//   },
//   {
//     label: 'blue',
//     color: '#0000FF',
//   },
//   {
//     label: 'yellow',
//     color: '#FFFF00',
//   },
// ];
// const btnElementArr = colors.map(buttonData => {
//   const btnElement = document.createElement('button');
//     btnElement.textContent = buttonData.label;
//     // btnElement.style.color = buttonData.color;
//     btnElement.style.margin = '20px';
//     btnElement.style.backgroundColor = buttonData.color;
//     const containerElement = document.createElement('div');
//     containerElement.append(btnElement)
//     containerElement.style.marginBottom = '10px';
//     return containerElement;
// });
// console.log(btnElementArr)
// document.body.append(...btnElementArr)
// !--------------------------------------------------------

// ? Створити спосок технологій що вивчаються на курсі Fullstack за допомогою js

// const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node']

// const itemArr = technologies.map((technology) => {
//   return `<li>${technology}</li>`
// })
// const listElement = `<ul>${itemArr.join('')}</ul>`
// console.log(itemArr)

// console.log(listElement)
// document.body.insertAdjacentHTML('beforeend', listElement)

// Завдання 3
// Створити сайт з такою розміткою використовуючи лише JS. В html файлі має бути пусто

// <main id="main">
//   <h1 id="title">- Michel Legrand -</h1>
//
//   <figure id="img-div">
//     <img id="image"
//          src="https://i.discogs.com/LGcISJRXQR30Q--KBtFgh8nf5bAY-UT9PfVp4mPM4_8/rs:fit/g:sm/q:90/h:788/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTg0MjM2/LTE0Nzc2ODIxNDgt/NDUyOC5qcGVn.jpeg"
//          alt="Michel Legrand conducting his orchestra.">
//       <figcaption id="img-caption">Michel Legrand conducting his orcherstra.</figcaption>
//   </figure>
//
//   <article id="tribute-info">
//     <div id="intro">
//       <p>Michel Legrand (1932 - 2019) was a famous French musician.</p>
//     </div>
//
//     <p><u>Here are some major facts about him:</u></p>
//
//     <ul>
//       <li>He was born in Paris, France on February 24th, 1932.</li>
//       <li>His father was himself a conductor and composer, and his mother, who was Armenian, was the sister of a conductor.</li>
//       <li>His sister was a Soprano and a member of the Swingle Singers.</li>
//       <li>Along his career, he composed more than two hundred film and television scores.</li>
//       <li>He was also a Jazz player and worked with giants like Miles Davis or Stan Getz.</li>
//       <li>He won a huge amount of awards, including Oscars, Grammy Awards and Golden Globes.</li>
//       <li>He died of sepsis during the night of the 25<sup>th</sup> to 26<sup>th</sup> January 2019 in the
//         American Hospital of Paris.</li>
//       <li>He was interred at the P&egrave;re Lachaise Cemetery in Paris, France.</li>
//     </ul>
//
//     <blockquote id="quote">
//       <p>Writing is a mental thing, while playing is essentially a physical feeling.</p>
//       <cite>-- Michel Legrand</cite>
//     </blockquote>
//   </article>
// </main>

const article = {
  title: '- Michel Legrand -',
  image: {
    src: 'https://i.discogs.com/LGcISJRXQR30Q--KBtFgh8nf5bAY-UT9PfVp4mPM4_8/rs:fit/g:sm/q:90/h:788/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTg0MjM2/LTE0Nzc2ODIxNDgt/NDUyOC5qcGVn.jpeg',
    desc: 'Michel Legrand conducting his orchestra.',
  },
  intro: 'Michel Legrand (1932 - 2019) was a famous French musician.',
  facts: {
    label: 'Here are some major facts about him:',
    items: [
      'He was born in Paris, France on February 24th, 1932.',
      'His father was himself a conductor and composer, and his mother, who was Armenian, was the sister of a conductor.',
      'His sister was a Soprano and a member of the Swingle Singers.',
      'Along his career, he composed more than two hundred film and television scores.',
      'He was also a Jazz player and worked with giants like Miles Davis or Stan Getz.',
      'He won a huge amount of awards, including Oscars, Grammy Awards and Golden Globes.',
      'He died of sepsis during the night of the 25th to 26th January 2019 in the American Hospital of Paris.',
      'He was interred at the P&egrave;re Lachaise Cemetery in Paris, France.',
    ],
  },
  quote: {
    text: 'Writing is a mental thing, while playing is essentially a physical feeling.',
    author: '-- Michel Legrand',
  },
};

const titleElement = `
<h1 id="title">${article.title}</h1>
`;
const imgElement = `
  <figure id="img-div">
    <img id="image"
         src="${article.image.src}"
         alt="${article.image.desc}">
      <figcaption id="img-caption">${article.image.desc}</figcaption>
  </figure>
`;
const introElement = `
<div id="intro">
      <p>${article.intro}</p>
    </div>
`;

const listTitleElement = `
<p><u>${article.facts.label}</u></p>
`;

const factsArr = article.facts.items.map(fact => {
  return `<li>${fact}</li>`;
});

const quoteElement = `
<blockquote id="quote">
      <p>${article.quote.text}</p>
      <cite>${article.quote.author}</cite>
    </blockquote>
`;
const mainElement = `
<main id='main'>
${titleElement}
${imgElement}
<article id='tribute-info'>
${introElement}
${listTitleElement}
<ul>
${factsArr.join('')}
</ul>
${quoteElement}
</article>
</main>
`;
document.body.insertAdjacentHTML('afterbegin', mainElement)

// const titleElement = `
//   <h1 id="title">${article.title}</h1>
// `;
//
// const imgElement = `
//   <figure id="img-div">
//     <img id="image" src="${article.image.src}" alt="${article.image.desc}">
//       <figcaption id="img-caption">${article.image.desc}</figcaption>
//   </figure>
// `;
//
// const introElement = `
//   <div id="intro">
//     <p>${article.intro}</p>
//   </div>
// `;
//
// const listTitleElement = `<p><u>${article.facts.label}</u></p>`;
// const factsArr = article.facts.items.map((fact) => {
//   return `<li>${fact}</li>`
// })
//
// const quoteElement = `
//     <blockquote id="quote">
//       <p>${article.quote.text}</p>
//       <cite>${article.quote.author}</cite>
//     </blockquote>
// `;
//
// const mainElement = `
//   <main id="main">
//     ${titleElement}
//     ${imgElement}
//     <article id="tribute-info">
//        ${introElement}
//        ${listTitleElement}
//        <ul>
//          ${factsArr.join('')}
//        </ul>
//        ${quoteElement}
//     </article>
//   </main>
// `;
//
// document.body.insertAdjacentHTML('afterbegin', mainElement);
