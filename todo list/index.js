const button = document.getElementById("button");
const input = document.getElementById("input");
const container = document.getElementById("container");
const List = document.createElement("ul");
List.className = "textContainer";
container.appendChild(List);
const arr = [];

let count = 0;

button.addEventListener("click", function () {
  let text = input.value;
  arr.push(text);
  console.log(arr);
  let div = document.createElement("div");
  let differentId = count++;
  div.id = differentId;
  div.className = "text";
  let trash = document.createElement("button");
  trash.id = "trashCan";
  let editButton = document.createElement("button");
  editButton.type = "submit";
  editButton.innerHTML = "Edit";
  editButton.className = "edit";
  editButton.id = "edit-button";
  let buttonContainer = document.createElement("div");
  buttonContainer.className = "buttonContainer";
  for (let i = 0; i < arr.length; i++) {
    div.textContent = arr[i];
    List.appendChild(div);
    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(trash);
    div.appendChild(buttonContainer);
  }
  function deleteList() {
    let idContainer = document.getElementById(differentId);
    idContainer.remove();
  }
  trash.addEventListener("click", function () {
    deleteList();
  });
  function editList() {
    let editInput = document.createElement("input");
    input.type = "text";
    input.value = text.textContent();
    input.focus();
  }
  editButton.addEventListener("click", function () {
    editList();
  });
});
