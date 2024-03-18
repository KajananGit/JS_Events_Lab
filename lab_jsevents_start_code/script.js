const toDoForm = document.querySelector("#todo-form");
const userInput = document.querySelector("#new-todo");
const toDoList = document.querySelector("#list");

userInput.addEventListener("input", (evt) => {
    console.log(evt);
});

toDoForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const newListItem = document.createElement("li");
    newListItem.innerText = evt.target.value;
    toDoList.appendChild(newListItem);
});

