import { loadTasksFromDB, save } from "./js/task_repo.js"
import { TaskForm } from "./js/task.js";

const taskNameInputE = document.getElementById("task-name");
const addTaskButton = document.getElementById("add-button");
const taskListE = document.getElementById("task-list");
let tasks = [];

//Load the tasks in the storage to show
loadTasksFromDB(reloadTasks);

function reloadTasks(data, error) {
  clearTaskElements();
  if (data) {
    tasks = data;

    for (const task in tasks) {
      if (Object.hasOwn(tasks, task)) {
        const item = tasks[task];
        appendTaskElement(item);
      }
    }
  }
}

const onAddNewTask = () => {
  const taskName = taskNameInputE.value;
  const empty = !taskName.trim();
  if (empty) return;

  addNewTask(taskName);
  tasks.push(taskName);
  clearInputText(taskNameInputE);
};

taskNameInputE.addEventListener("keydown", (ev) => {
  const submitted = ev.key == "Enter";
  if (!submitted) return;

  onAddNewTask();
});

addTaskButton.onclick = onAddNewTask;

function saveTaskOnDB(taskName) {
  const task = new TaskForm(taskName);
  save(task);
  return task;
}

function addNewTask(taskName) {
  const task = saveTaskOnDB(taskName);
  appendTaskElement(task);
}

function appendTaskElement(task) {
  const newTask = createTaskElement(task);
  taskListE.appendChild(newTask);
}

function clearTaskElements() {
  taskListE.innerHTML = "";
}

function createTaskElement(task) {
  const item = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = task.id;
  checkbox.onclick = () => markTaskAsDone(taskLabel, checkbox);

  const taskLabel = document.createElement("label");
  taskLabel.htmlFor = checkbox.id;
  taskLabel.textContent = task.name;

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
