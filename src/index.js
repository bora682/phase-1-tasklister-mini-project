document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskInput = event.target.elements["new-task-description"].value;
    buildToDo(taskInput);
    event.target.reset();
  });
  
  // your code here
function buildToDo(task) {
  const taskList = document.getElementById("tasks");
  const li = document.createElement("li");
  li.textContent = task;
  taskList.appendChild(li);
}

});
