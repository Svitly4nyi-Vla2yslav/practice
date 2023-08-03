// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(response => response.json())
//   .then(posts => console.log(posts))
//   .catch(error => console.log(error));

//   const postId = 55;

// fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//   .then(response => response.json())
//   .then(post => console.log(post))
//   .catch(error => console.log(error));

// const postToAdd = {
//     author: "Mango",
//     body: "CRUD is awesome",
//   };
  
//   const options = {
//     method: "POST",
//     body: JSON.stringify(postToAdd),
//     headers: {
//       "Content-Type": "application/json; charset=UTF-8",
//     },
//   };
  
//   fetch("https://jsonplaceholder.typicode.com/posts", options)
//     .then(response => response.json())
//     .then(post => console.log(post))
//     .catch(error => console.log(error));


// // Change value of id property to update different post
// const postToUpdate = {
//     id: 1,
//     body: "😂 це весело))",
//   };
 
  
//   const options = {
//     method: "PATCH",
//     body: JSON.stringify(postToUpdate),
//     headers: {
//       "Content-Type": "application/json; charset=UTF-8",
//     },
//   };
  
//   fetch(`https://jsonplaceholder.typicode.com/posts/${postToUpdate.id}`, options)
//     .then(response => response.json())
//     .then(post => console.log(post))
//     .catch(error => console.log("ERROR" + error));



// const postIdToDelete = 10;

// fetch(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`, {
//   method: "DELETE",
// })
//   .then(() => console.log("Post deleted"))
//   .catch(error => console.log("Error:", error));