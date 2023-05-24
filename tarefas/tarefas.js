function addTask(){
    var taskInput = document.getElementById("add-task");
    var taskList = document.getElementById("task-list");

    var task = document.createElement("li");

    //delete button
    // var deleteIcon = document.createElement("i");
    // deleteIcon.className = "fa-light fa-delete-left";
    var deleteButton = document.createElement("button");
    //deleteButton.append(deleteIcon);
    deleteButton.onclick = function () {
        taskList.removeChild(task);
    }

    //label
    var taskLabel = document.createElement("input");
    taskLabel.value = taskInput.value;
    taskLabel.style.border = "none";
    taskLabel.style.backgroundColor = "transparent";
    taskLabel.onclick = function (){
        taskLabel.style.border = "default";
        taskLabel.style.backgroundColor = "default";
    }

    //radio button
    var radio = document.createElement("input");
    radio.type = "radio";
    radio.onclick = function () {
        taskLabel.style.textDecoration = 'line-through';
    }

    //append elements
    task.appendChild(radio);
    task.appendChild(taskLabel);
    task.appendChild(deleteButton);
    taskList.appendChild(task);

    //cleaning input
    taskInput.value = "";
}

