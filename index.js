
const usersContainer = document.getElementById("usersContainer");
const todosContainer = document.getElementById("todosContainer");
const albumsContainer = document.getElementById("albumsContainer");

async function myDatas() {
  const usersRes = await fetch("https://jsonplaceholder.typicode.com/users");
  const todosRes = await fetch("https://jsonplaceholder.typicode.com/todos");
  const albumsRes = await fetch("https://jsonplaceholder.typicode.com/albums");

  const users = await usersRes.json();
  const todos = await todosRes.json();
  const albums = await albumsRes.json();

  users.forEach((user, i) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="https://picsum.photos/200?random=${i}">
      <p><strong>${user.name}</strong></p>
      <p>${user.email}</p>
      <p>${user.address.city}</p>
    `;
    usersContainer.append(card);
  });



  todos.forEach((todo, i) => {
    const card = document.createElement("div");
    card.className = "cardtodo";
    card.innerHTML = `
      <img src="https://picsum.photos/200?random=${i}">
      <p><strong>${todo.title}</strong></p>
    `;
    todosContainer.append(card);
  });

  albums.forEach((album, i) => {
    const card = document.createElement("div");
    card.className = "cardalbum";
    card.innerHTML = `
      <img src="https://picsum.photos/200?random=${i}">
      <p><strong>Album:</strong> ${album.title}</p>
      <p>User ID: ${album.userId}</p>
    `;
    albumsContainer.append(card);
  });
}

myDatas();