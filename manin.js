
let tasks = [];


function addTask(name, description) {
    let task = {
        name: name,
        description: description,
        completed: false
    };
    tasks.push(task);
}


function deleteTask(index) {
    tasks.splice(index, 1);
    showTasks();
}


function completeTask(index) {
    tasks[index].completed = true;
    showTasks();
}


function showTasks() {
    let taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        let listItem = document.createElement('li');
        listItem.textContent = task.name;


        if (task.completed) {
            listItem.classList.add('completed');
        }


        listItem.addEventListener('click', function () {
            completeTask(i);
        });
        listItem.addEventListener('contextmenu', function (event) {
            event.preventDefault();
            deleteTask(i);
        });

        taskList.appendChild(listItem);
    }
}


document.getElementById('taskForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let taskInput = document.getElementById('taskInput');
    let taskName = taskInput.value;
    if (taskName.trim() !== '') {
        addTask(taskName, '');
        showTasks();
        taskInput.value = '';
    }
});


showTasks();


function finishTaskList() {
    let confirmed = confirm("¿Deseas crear otra lista de tareas?");
    if (confirmed) {


        tasks = [];
        showTasks();

    } else {
        alert("Por hoy ya terminamos.");

    }
}


document.getElementById('finishBtn').addEventListener('click', finishTaskList);

