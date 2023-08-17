const inputTask = document.getElementById("input-task");
const inputTaskbtn = document.getElementById("input-task-btn");
const taskContainer = document.getElementById("task-container");

function keyPress() {
  if (inputTask.value === "") {
    alert("Please enter a task");
    return;
  }

  let div = document.createElement("div");
  div.classList.add("task");
  div.innerHTML = `<p id="saved-task" class="saved-task">${inputTask.value}</p>`;

  //Check Button
  let checkBtn = document.createElement("button");
  let checkBtnstatus = "unchecked";

  checkBtn.classList.add("check-btn");
  checkBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
  div.appendChild(checkBtn);

  checkBtn.addEventListener("click", function () {
    if (checkBtnstatus === "checked") {
      div.style.textDecoration = "none";
      checkBtnstatus = "unchecked";
    } else if (checkBtnstatus === "unchecked") {
      div.style.textDecoration = "line-through";
      checkBtnstatus = "checked";
    }
  });

  //Delete Button
  let deleteBtn = document.createElement("button");

  deleteBtn.classList.add("delete-btn");
  deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  div.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", function () {
    deleteBtn.parentElement.remove();
  });

  taskContainer.appendChild(div);
  inputTask.value = "";
}

inputTaskbtn.addEventListener("click", keyPress);
inputTask.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    keyPress();
  }
});
