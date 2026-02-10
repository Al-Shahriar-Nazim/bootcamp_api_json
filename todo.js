const todoLoad = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => displayTodo(data));
};

const displayTodo = (todos) => {
  //step-1 get the container
  const container = document.getElementById("container");
  container.innerHTML = "";

  todos.forEach((todo) => {
    // console.log(todo);
    //step - 2 create html element
    const todoCard = document.createElement("div");
    todoCard.innerHTML = `
    <div class="todo-card">
      <h4>${todo.title}</h4>
      <p>Status: ${
        todo.completed == true
          ? `<i class="fa-solid fa-square-check"></i>`
          : `<i class="fa-regular fa-square-check"></i>`
      }
     
    
       </p>
      </div>
    `;
    container.appendChild(todoCard);
  });
};

todoLoad();
