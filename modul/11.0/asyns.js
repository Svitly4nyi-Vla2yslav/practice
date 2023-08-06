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



// const fetchUsers = async () => {
//     try {
//       const response = await fetch("https://jsonplaceholder.typicode.com/users");
//       const users = await response.json();
//       console.log(users);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
  
//   fetchUsers();

// const fetchFriends = async () => {
//   const token = await fetch("my-api.com/me");
//   const user = await fetch(`my-api.com/profile?token=${token}`);
//   const friends = await fetch(`my-api.com/users/${user.id}/friends`);
//   return friends;
// };

// fetchFriends()
//   .then(friends => console.log(friends))
//   .catch(error => console.error(error));

// const fetchUsers = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await response.json();
//   return users;
// };

// fetchUsers().then(users => console.log(users));


// const fetchUsers = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();
//     console.log(users);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// fetchUsers();
// const fetchUsers = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await response.json();
//   return users;
// };

// fetchUsers()
//   .then(users => console.log(users))
//   .catch(error => console.log(error));


// const fetchUsers = async () => {
//   const baseUrl = "https://jsonplaceholder.typicode.com";
//   const firstResponse = await fetch(`${baseUrl}/users/1`);
//   const secondResponse = await fetch(`${baseUrl}/users/2`);
//   const thirdResponse = await fetch(`${baseUrl}/users/3`);

//   const firstUser = await firstResponse.json();
//   const secondUser = await secondResponse.json();
//   const thirdUser = await thirdResponse.json();

//   console.log(firstUser, secondUser, thirdUser);
// };

// fetchUsers();

// const fetchUsers = async () => {
//   const baseUrl = "https://jsonplaceholder.typicode.com";
//   const userIds = [1, 2, 3];

//   // 1. Створюємо масив промісів
//   const arrayOfPromises = userIds.map(async userId => {
//     const response = await fetch(`${baseUrl}/users/${userId}`);
//     return response.json();
//   });

//   // 2. Запускаємо усі проміси паралельно і чекаємо на їх завершення
//   const users = await Promise.all(arrayOfPromises);
//   console.log(users);
// };

// fetchUsers();


const fetchUsersBtn = document.querySelector(".btn");
const userList = document.querySelector(".user-list");

fetchUsersBtn.addEventListener("click", async () => {
  try {
    const users = await fetchUsers();
    renderUserListItems(users);
  } catch (error) {
    console.log(error.message);
  }
});

async function fetchUsers() {
  const baseUrl = "https://jsonplaceholder.typicode.com";
  const userIds = [1, 2, 3, 4, 5];

  const arrayOfPromises = userIds.map(async (userId) => {
    const response = await fetch(`${baseUrl}/users/${userId}`);
    return response.json();
  });

  const users = await Promise.all(arrayOfPromises);
  return users;
}

function renderUserListItems(users) {
  const markup = users
    .map(
      (user) => `<li class="item">
        <p><b>Name</b>: ${user.name}</p>
        <p><b>Email</b>: ${user.email}</p>
        <p><b>Company</b>: ${user.company.name}</p>
      </li>`
    )
    .join("");
  userList.innerHTML = markup;
}
