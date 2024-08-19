const button = document.getElementById("button");
const input = document.getElementById("input");
const container = document.getElementById("container");
const List = document.createElement("ul");
List.className = "listContainer";
container.appendChild(List);
const arr = [];

let count = 0;

button.addEventListener("click", function () {
  let text = input.value;
  if (text.length == 0) {
  } else {
    arr.push(text);
  }
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
  let confirmBtn = document.createElement("button");
  confirmBtn.innerHTML = "Confirm";
  confirmBtn.className = "confirm";
  let buttonContainer = document.createElement("div");
  buttonContainer.className = "buttonContainer";
  for (let i = 0; i < arr.length; i++) {
    div.textContent = arr[i];
    List.appendChild(div);
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
    editInput.className = "editing-input";
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
      buttonContainer.appendChild(trash);
      buttonContainer.appendChild(confirmBtn);
      div.appendChild(buttonContainer);
    }
    doneBtn.addEventListener("click", function () {
      if (editInput.length == 0) {
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
});
