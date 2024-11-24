// Selecting DOM elements
const addTaskBtn = document.getElementById('add-task-btn');
const newTaskInput = document.getElementById('new-task');
const todoList = document.getElementById('todo-list');

// Array to store tasks
let tasks = [];

// Add task event listener
addTaskBtn.addEventListener('click', function() {
    
    const taskText = newTaskInput.value.trim();

    if (taskText !== "") {
        const task = { id: Date.now(), text: taskText, completed: false };
        tasks.push(task);
        renderTasks();
        newTaskInput.value = "";  // Clear input after adding the task
    }
});

// Render tasks
function renderTasks() {
    todoList.innerHTML = ''; // Clear the list first

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.dataset.id = task.id;

        const textNode = document.createTextNode(task.text);
        li.appendChild(textNode);

        // Add Edit button
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('edit-btn');
        editBtn.addEventListener('click', function() {
            editTask(task.id);
        });
        li.appendChild(editBtn);

        // Add Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', function() {
            deleteTask(task.id);
        });
        li.appendChild(deleteBtn);

        // Toggle completion
        li.addEventListener('click', function() {
            toggleCompletion(task.id);
        });

        if (task.completed) {
            li.classList.add('completed');
        }

        todoList.appendChild(li);
})

// Toggle task completion
function toggleCompletion(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = !task.completed;
        renderTasks(); // Re-render to show updated state
    }
}

// Edit task
function editTask(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        const newText = prompt("Edit your task:", task.text);
        if (newText !== null && newText.trim() !== "") {
            task.text = newText.trim();
            renderTasks(); // Re-render with updated text
        }
    }
}

// Delete task
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks(); // Re-render after deleting the task
}}