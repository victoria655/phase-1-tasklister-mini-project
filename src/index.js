
document.addEventListener("DOMContentLoaded", () => {
  // Select the form and task list elements
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  // Add event listener for form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get the task description from the input field
    const taskInput = document.getElementById("new-task-description");
    const taskText = taskInput.value.trim();

    if (taskText === "") return; // Ignore empty input

    // Create a new task item
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    // Create a delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.style.marginLeft = "10px";
    deleteButton.addEventListener("click", () => taskItem.remove());

    // Append button to task item and task item to task list
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    // Clear input field
    taskInput.value = "";
  });
});
