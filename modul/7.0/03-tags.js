/*
 * Делегирование
 * - один из многих
 * - несколько из многих и Set
 */

// // const tagsContainer = document.querySelector('.js-tags');
// const tagsContainer = document.querySelector('.js-tags');
// let selectedTag = null;
// // let selectedTag = null;
// // tagsContainer.addEventListener('click', onTagsContainerClick);

// tagsContainer.addEventListener('click', onTagsContainerClick);
// function onTagsContainerClick(evt) {
// //   console.log(evt.target);
//   // function onTagsContainerClick(evt) {
// //   if (evt.target.nodeName !== 'BUTTON') {
// //     return;
// //   }
//     if (evt.target.nodeName !== 'BUTTON') {
//       return;
//     }
//     const currentActiveBtn = document.querySelector('.tags__btn--active');
//     // console.log(currentActiveBtn)
//     if (currentActiveBtn) {
//         currentActiveBtn.classList.remove('tags__btn--active');
//     }
//         //! currentActiveBtn?.classList.remove('tags__btn--active');

//     // evt.target.classList.add('.tags__btn--active');
//     const nextActiveBtn = evt.target;
//     nextActiveBtn.classList.add('tags__btn--active');
//     selectedTag = nextActiveBtn.dataset.value;
//     console.log(selectedTag)
// }

//   const currentActiveBtn = document.querySelector('.tags__btn--active');

//   if (currentActiveBtn) {
//     currentActiveBtn.classList.remove('tags__btn--active');
//   }

//   const nextActiveBtn = evt.target;
//   nextActiveBtn.classList.add('tags__btn--active');
//   selectedTag = nextActiveBtn.dataset.value;

//   console.log(selectedTag);
// }
// const tagsContainer = document.querySelector('.js-tags');
// // const tagsContainer = document.querySelector('.js-tags');
// const selectedTags = new Set();
// // const selectedTags = new Set();

// tagsContainer.addEventListener('click', onTagsContainerClick);

// function onTagsContainerClick(evt) {
//   if (evt.target.nodeName !== 'BUTTON') {
//     return;
//   }
// //   evt.target.classList.toggle('tags__btn--active');
// //   selectedTags.add(evt.target.dataset.value);
//   const btn = evt.target;
//   console.log(btn.classList.contains('tags__btn--active'));
//     const tag = btn.dataset.value;
//   const isActive = btn.classList.contains('tags__btn--active');

//     if (isActive) {
//       selectedTags.delete(tag);
//     } else {
//       selectedTags.add(tag);
//     }
//   btn.classList.toggle('tags__btn--active');
// //   selectedTags.add(btn.dataset.value);

//   console.log(selectedTags);
// }
