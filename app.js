
// Function to display tasks from Local Storage
function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    // Retrieve tasks from Local Storage and parse them
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${task} <button onclick="deleteTask(${index})">Delete</button>`;
        taskList.appendChild(li);
    });
}

// Function to add a task to the list
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();

    if (task) {
        // Retrieve tasks, add new task, and save them back to Local Storage
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));

        // Clear input and update the task display
        taskInput.value = '';
        displayTasks();
    }
}

// Function to delete a task from the list
function deleteTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.splice(index, 1); // Remove the task at the specified index
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
}

// Display tasks when the page loads
displayTasks();
