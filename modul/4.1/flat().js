// ? Array.prototype.flat(depth);
// ? - Метод flatMap(callback) - аналогічний методу map(), але застосовується
// ? у випадках, коли результат - це багатовимірний масив, який необхідно
// ?  «розгладити».
// ? - По замовчуванню глибина 1.

const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]];
// console.log(array.flat(1));
// console.log(array.flat(2));
// console.log(array.flat(3));

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];
// const allTags = tweets.map(t => t.tags).flat();
// const allTags = tweets.flatMap(t => t.tags);
// const allTags = tweets.reduce(
//   (oldAcc, tweet) => [...oldAcc, ...tweet.tags],
//   []
// );
// !
// const allTags = tweets
//   .flatMap(t => t.tags)
//   .reduce(
//     (acc, tag) => ({
//       ...acc,
//       [tag]: acc[tag] ? acc[tag] + 1 : 1,
//     }),
//     {}
//   );
// console.log(allTags);
