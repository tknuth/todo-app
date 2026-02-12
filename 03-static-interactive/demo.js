for (const item of document.querySelectorAll("ul li")) {
  item.addEventListener("click", function () {
    item.classList.toggle("checked");
  });
}

document.querySelector("#add-todo").addEventListener("click", function () {
  const todoInput = document.querySelector("#todo-input");
  const todoText = todoInput.value.trim();
  if (todoText != "") {
    const newTodo = document.createElement("li");
    newTodo.textContent = todoText;
    newTodo.addEventListener("click", function () {
      newTodo.classList.toggle("checked");
    });
    document.querySelector("ul").appendChild(newTodo);
    todoInput.value = "";
  }
});
