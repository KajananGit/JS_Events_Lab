const toDoForm = document.querySelector("#todo-form");
const userInput = document.querySelector("#new-todo");
const toDoList = document.querySelector("#list");

userInput.addEventListener("input", (evt) => {
    console.log(evt);
});

toDoForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    console.log(evt.target["new-todo"].value);
    const newListItem = document.createElement("li");
    const newDeleteButton = document.createElement("button");
    const buttonText = document.createTextNode("DELETE");
    newListItem.innerText = evt.target["new-todo"].value;
    newDeleteButton.appendChild(buttonText);
    toDoList.appendChild(newListItem);
    toDoList.appendChild(newDeleteButton);
});

