// const fetchFriends = () => {
//     return fetch("my-api.com/me").then(token => {
//       console.log(token);
//     });
//   };

//   const fetchFriends = () => {
//     return fetch("my-api.com/me")
//       .then(token => {
//         return fetch(`my-api.com/profile?token=${token}`);
//       })
//       .then(user => {
//         console.log(user.id);
//       });
//   };

// const fetchFriends = () => {
//     return fetch("my-api.com/me")
//       .then(token => {
//         return fetch(`my-api.com/profile?token=${token}`);
//       })
//       .then(user => {
//         return fetch(`my-api.com/users/${user.id}/friends`);
//       });
//   };
  
//   fetchFriends()
//     .then(friends => console.log(friends))
//     .catch(error => console.error(error));



// const fetchUsers = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const users = await response.json();
//     return users;
// }

// fetchUsers().then(users => console.log(users))



const fetchUsers = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await response.json();
      console.log(users);
    } catch (error) {
      console.log(error.message);
    }
  };
  
  fetchUsers();