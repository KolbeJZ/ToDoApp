// Global data.
// @TODO: `lists` should equal whatever is in localStorage, or an empty object if nothing is in localStorage. Do localStorage check here.
// const listsLocalStorage = localStorage.getItem('MyLists')
// const lists = listsLocalStorage ? JSON.parse(listsLocalStorage) : {};
const lists = {}
let activeList = {}
// @TODO: If data exists in localStorage:
//  1. Assign it to `lists`.
//  2. addList() for each list in `lists`.
//  3. Make the first list active.
//  4. addTask() for each task in `activeList.taskList` (add tasks to the DOM).
// Add global event listeners.
document.getElementById('add-list-button').addEventListener("click", addList)
document.getElementById('add-task-button').addEventListener("click", addTask)

// Use the '#add-list-button' to create a new list after giving it a name.
  //User types in the input box ('#list-input') and gives a list a name
  //and presses the '#add-list-button' to add that List
  // When the user clicks '#add-list-button' 
    // create list (const list = {title: '', edit: HTMLElement, delete: HTMLElement, taskList: [{title: '', edit: HTMLElement, delete: HTMLElement, completed: boolean}])
    // create a list HTMLElement 
    // organize the HTML for list element from the list data
    // append it to the DOM 
function addList(){
  const title =  document.getElementById("list-input").value;
  const list = {title: title, editButton: "list-edit-button", deleteButton: "list-delete-button", taskList: []}
  let listElement = document.createElement("div");
  let listTitleElement = document.createTextNode(title);
  listTitleElement.addEventListener("click", function (event) {
    activateList(title)
  });
  

  // let editButton = document.createElement("button");
  // let editText = document.createTextNode('edit');
  // editButton.appendChild(editText);
  // editButton.setAttribute('id', 'edit-list-button');
  // editButton.setAttribute('class', 'btn btn-outline-primary')

  let deleteButton = document.createElement("button");
  let deleteText = document.createTextNode('delete');
  deleteButton.appendChild(deleteText);
  deleteButton.setAttribute('id', 'delete-list-button');
  deleteButton.setAttribute('class', 'btn btn-outline-danger');
  deleteButton.addEventListener("click", function(event) {
    listElement.parentNode.removeChild(listElement);
    if (title === activeList.title) {
      activateList(Object.keys(lists)[0]);
    }
    delete lists[title];
    saveLists();
  });

  listElement.appendChild(listTitleElement)
  // listElement.appendChild(editButton);
  listElement.appendChild(deleteButton);
  listElement.setAttribute('id', 'new-list-' + title );
  listElement.setAttribute('class', 'new-list');
  document.getElementById("new-lists").appendChild(listElement);
  lists[title] = list;
  
  activateList(title);
  saveLists();
}

function saveLists() {
  localStorage.setItem('MyLists', JSON.stringify(lists));
}
  
// User can click on a specific list to have different tasks in different lists

function activateList() {
  activeList = lists[title]
  // @TODO: Remove all markup from DOM in #new-tasks
    $(`list.${title}`).click(function(){
       $("#new-tasks").remove();
    });
  // @TODO: Create markup from each task in activeList.taskList.

  // @TODO: Add markup to DOM.
  
}
  // Users can create any number of tasks within the list, using 'add-task-button'
    // User types in the input box ('add-todo') and gives it a task name
    // and presses the 'add-task-button' to add that task
      //this 'new-tasks' needs to appear with a edit button 'task-edit-button' and a delete button 'task-delete-button
function addTask() {
  const title =  document.getElementById("add-todo").value;

  const task = {title: title, completed: false};

  activeList.taskList.push(task);

  let taskElement = document.createElement('div');
  taskElement.setAttribute('class', 'task');
  let inputElement = document.createElement('input');
  inputElement.setAttribute('id', `new-task-${title}`);
  inputElement.setAttribute('type', 'checkbox');
  inputElement.setAttribute('name', 'task-name-1');
  let pElement = document.createElement('p');
  pElement.setAttribute('class', 'task-text');
  let buttonElement1 = document.createElement('button');
  buttonElement1.setAttribute('id', `edit-${title}`);
  buttonElement1.setAttribute('class', 'btn btn-outline-primary');
  let buttonElement2 = document.createElement('button');
  buttonElement2.setAttribute('id', `delete-${title}`);
  buttonElement2.setAttribute('class', 'btn btn-outline-danger');
  pElement.innerHTML = title;
  buttonElement1.innerHTML = 'Edit';
  buttonElement2.innerHTML = 'Delete';

  task.taskElement = taskElement;

  buttonElement2.addEventListener('click', (event) => deleteTask(event, title));
  
  taskElement.appendChild(inputElement);
  taskElement.appendChild(pElement);
  taskElement.appendChild(buttonElement1);
  taskElement.appendChild(buttonElement2);

  document.getElementById("new-tasks").appendChild(taskElement);

  saveLists()
}
  // Users can delete any 'new-tasks' using 'task-delete-button'
function deleteTask(event, title) {
  let taskToRemove
  let tasks = activeList.taskList.filter(function (task, index) {
    if (task.title === title) {
      taskToRemove = task;
      activeList.taskList.splice(index, 1);
      return false;
    } else {
      return true;
    }
  })

  taskToRemove.taskElement.remove();
  saveLists()
}

// Users can edit the 'new-tasks' name using 'task-edit-button'
function editTask() {
  // @TODO: Update task title in the `<list>.taskLists`.

  // @TODO: Update task title in the DOM.
  // list[taskList].title;
  // @TODO: Save to localStorage.

}


  // Users can mark 'new-tasks' as complete using 'new-task-name'
function completeToDo(element) {

  // @TODO: Mark task's checkbox in DOM.

  const cb = document.getElementById(`new-task-${title}`);
  document.querySelector(`#new-task-${title}:checked`) !== null
  // // @TODO: Set `<task>.complete` to `true`.
  task.completed = true;
  console.log('test', task.complete)
  // @TODO: Save to localStorage.
}
  // Users can delete all completed tasks ('new-task-name1') 
function deleteCompletedTasks() {
  // @TODO: Iterate over each task in the activeList. For each task:
  let tasks = activeList.forEach(function (task, index) {

  }) 
  //  1. Delete it from `<list>.taskList`.
  //  2. Delete it from the DOM.
  
  // @TODO: Save to localStorage.
}
