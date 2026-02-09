let dataLoad = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
};

// function click(){
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }

const postData = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      displayData(data);
    });
};

// const displayData = (posts) => {
//   //1.get the container
//   const postContainer = document.getElementById("post-container");
//   postContainer.innerHTML ="";
//   // console.log(postContainer);

//   posts.forEach((post) => {
//     // console.log(post);
//     // console.log(post.title);

//     //2.create html element
//     const li = document.createElement("li");
//     li.innerText = post.title;
//     console.log(li)

//     //3.append the element to the container
//     postContainer.appendChild(li);
//   });
// };

const displayData = (posts) => {
  //1. get the container and empty the container
  const postContainer = document.getElementById("post-container");
  postContainer.innerHTML = "";

  posts.forEach((post) => {
    // console.log(post)
    // 2. create html element
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="post-card">
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      </div>
    `;

    //3. append the element to the container
    postContainer.appendChild(div);
  });
};

postData()