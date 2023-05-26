function addTask(){
    var taskInput = document.getElementById("add-task");
    var taskList = document.getElementById("task-list");

    var task = document.createElement("li");

    //delete button
    var deleteIcon = document.createElement("img");
    deleteIcon.src = "icons/delete.png";
    var deleteButton = document.createElement("button");
    deleteButton.append(deleteIcon);
    deleteButton.onclick = function () {
        taskList.removeChild(task);
    }

    //label
    var taskLabel = document.createElement("input");
    taskLabel.value = taskInput.value;
    taskLabel.onclick = function (){
        taskLabel.style.border = "default";
        taskLabel.style.backgroundColor = "default";
    }

    //checkbox
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = () => markTaskAsDone(taskLabel, checkbox);

    //append elements
    task.appendChild(checkbox);
    task.appendChild(taskLabel);
    task.appendChild(deleteButton);
    taskList.appendChild(task);

    //cleaning input
    taskInput.value = "";
}

function markTaskAsDone(label, checkbox){
    if(checkbox.checked){
        label.style.textDecoration = 'line-through';
    } else {
        label.style.textDecoration = 'none';
    }
}