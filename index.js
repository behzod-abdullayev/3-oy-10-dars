const postsContainer = document.getElementById("postsContainer")
const commentsContainer = document.getElementById("commentsContainer")
const albumsContainer = document.getElementById("albumsContainer")
const photosContainer = document.getElementById("photosContainer")
const todosContainer = document.getElementById("todosContainer")
const usersContainer = document.getElementById("usersContainer")

async function myFunc() {
    const post = await fetch ("https://jsonplaceholder.typicode.com/posts")
    const comment = await fetch ("https://jsonplaceholder.typicode.com/comments")
    const album = await fetch ("https://jsonplaceholder.typicode.com/albums")
    const photo = await fetch ("https://jsonplaceholder.typicode.com/photos")
    const todo = await fetch ("https://jsonplaceholder.typicode.com/todos")
    const user = await fetch ("https://jsonplaceholder.typicode.com/users")



    const post1 = await post.json()
    const comment1 = await comment.json()
    const album1 = await album.json()
    const photo1 = await photo.json()
    const todo1 = await todo.json()
    const user1 = await user.json()



    post1.forEach((post, i) => {
        const card = document.createElement("div")
        card.className = "cardPost"
        card.innerHTML = `
        <img src = "https://picsum.photos/200?random=${i}">
        <p><strong>${post.userId}</strong></p>
        <p>${post.title}</p>
        <p>${post.body}</p>
        `
        postsContainer.append(card)
    });


    

    comment1.forEach((comment, i) => {
        const card = document.createElement("div")
        card.className = "cardComment"
        card.innerHTML = `
        <img src = "https://picsum.photos/200?random=${i}">
        <p><stong>${comment.postId}</strong></p>
        <p>${comment.name}</p>
        <p>${comment.email}</p>
        <p>${comment.body}<p>
        `
        commentsContainer.append(card)
    });

album1.forEach((album, i) => {
    const card = document.createElement("div")
    card.className = "cardAlbum"
    card.innerHTML = `
    <img src = "https://picsum.photos/200?random=${i}">
    <p><strong>${album.userId}</strong></p>
    <p>${album.title}</p>

    `
    albumsContainer.append(card)
});


photo1.forEach((photo, i) => {
    const card = document.createElement("div")
    card.className = "cardPhoto"
    card.innerHTML = `
        <img src = "https://picsum.photos/200?random=${i}">
        <p><strong>${photo.albumId}</strong></p>
        <p>${photo.title}</p>
        <p>${photo.url}</p>
        <p>${photo.thumbnailUrl}</p>
    `
    photosContainer.append(card)
});


todo1.forEach((todo, i )=> {
    const card = document.createElement("div")
    card.className = "cardTodo"
    card.innerHTML = `
    <img src = "https://picsum.photos/200?random=${i}">
    <p><strong>${todo.userId}</strong></p>
    <p>${todo.title}</p>
    <p>${todo.completed}</p>
    `
    todosContainer.append(card)
});


user1.forEach((user, i) => {
const card = document.createElement("div") 
card.className = "cardUser"
card.innerHTML = `
<img src = "https://picsum.photos/200?random=${i}">
<p><strong>${user.id}</strong></p>
<p>${user.name}</p>
<p>${user.username}</p>
<p>${user.email}</p>
<p>${user.address.city}</p>
`   
usersContainer.append(card)
});



}


myFunc()



