import { initializeDB } from "./js/indexDatabase.js";

initializeDB()

const taskNameInputE = document.getElementById("task-name");
const addTaskButton = document.getElementById("add-button");
const taskListE = document.getElementById("task-list");
const tasks = ["Colocar comida pro catioro"];

//Load the tasks in the storage to show
for (const task in tasks) {
  if (Object.prototype.hasOwnProperty.call(tasks, task)) {
    const item = tasks[task];
    addNewTask(item);
  }
}

const onAddNewTask = () => {
  const taskName = taskNameInputE.value;
  const empty = !taskName.trim();
  if (empty) return;

  tasks.push(taskName);
  addNewTask(taskName);
  clearInputText(taskNameInputE);
}

taskNameInputE.addEventListener("keydown", (ev) => {
  const submitted = ev.key == "Enter";
  if (!submitted) return;

  onAddNewTask()
});

addTaskButton.onclick = onAddNewTask;

function addNewTask(taskName) {
  const newTask = createTaskElement(taskName);
  taskListE.appendChild(newTask);
}

function createTaskElement(taskName) {
  const item = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = Date.now();
  checkbox.onclick = () => markTaskAsDone(taskLabel, checkbox);

  const taskLabel = document.createElement("label");
  taskLabel.htmlFor = checkbox.id;
  taskLabel.textContent = taskName;

  item.appendChild(checkbox);
  item.appendChild(taskLabel);

  return item;
}

function markTaskAsDone(label, checkbox) {
  if (checkbox.checked) {
    label.style.textDecoration = "line-through";
  } else {
    label.style.textDecoration = "none";
  }
}

function clearInputText(input) {
  input.value = "";
}
