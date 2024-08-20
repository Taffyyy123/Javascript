const button = document.getElementById("button");
const input = document.getElementById("input");
const container = document.getElementById("container");
const List = document.createElement("ul");
List.className = "listContainer";
container.appendChild(List);
let arr = [];
const confirmContainer = document.createElement("div");
container.appendChild(confirmContainer);
confirmContainer.className = "confirmContainer";

let count = 0;

button.addEventListener("click", function () {
  let text = input.value;
  if (text.length == 0) {
  } else {
    arr.push(text);
  }
  let div = document.createElement("div");
  let differentId = count++;

  const date = new Date();
  const formatter = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
  const formattedTime = formatter.format(date);
  let divContainer = document.createElement("div");
  divContainer.className = "text";
  divContainer.id = differentId;
  div.className = "text";
  let trash = document.createElement("button");
  trash.id = "trashCan";
  let editButton = document.createElement("button");
  editButton.type = "submit";
  editButton.innerHTML = "Edit";
  editButton.className = "edit";
  editButton.id = "edit-button";
  let confirmBtn = document.createElement("button");
  confirmBtn.innerHTML = "Confirm";
  confirmBtn.className = "confirm";
  let buttonContainer = document.createElement("div");
  buttonContainer.className = "buttonContainer";
  for (let i = 0; i < arr.length; i++) {
    div.textContent = arr[i];
    divContainer.appendChild(div);
    List.appendChild(divContainer);
    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(confirmBtn);
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
    editInput.id = "editingInput";
    let doneBtn = document.createElement("button");
    doneBtn.innerHTML = "Done";
    doneBtn.className = "editing-done";
    let editBtnContainer = document.createElement("div");
    editBtnContainer.appendChild(doneBtn);
    editBtnContainer.appendChild(editInput);
    editBtnContainer.className = "editButtons";
    div.appendChild(editBtnContainer);
    function clickingDone() {
      const di = document.getElementById(`${differentId}`);
      di.textContent = editInput.value;
      buttonContainer.appendChild(editButton);
      buttonContainer.appendChild(confirmBtn);
      buttonContainer.appendChild(trash);
      div.appendChild(buttonContainer);
    }
    doneBtn.addEventListener("click", function () {
      let edit = document.getElementById("editingInput");
      if (edit.length == 0) {
        console.log("working");
      } else {
        clickingDone();
        console.log("failed");
      }
    });
  }
  editButton.addEventListener("click", function () {
    editList();
  });
  confirmBtn.addEventListener("click", function () {
    const confirmID = document.getElementById(`${differentId}`);
    confirmContainer.appendChild(confirmID);
    confirmBtn.remove();
    editButton.remove();
  });
  input.value = "";
  arr = [];
});
