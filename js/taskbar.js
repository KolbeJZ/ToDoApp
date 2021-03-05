const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");



inputBox.onkeyup = ()=>{
    let userEnteredValue = inputBox.value; //getting user entered value
    if(userEnteredValue.trim() != 0){ //if the user value isn't only spaces
      addBtn.classList.add("active"); //active the add button
    }else{
      addBtn.classList.remove("active"); //unactive the add button
    }
  }

  function addNewMessage(chatId) {
    const newMessage = new Message(text);
    chats[chatId].addMessage(newMessage);
    print();
  }
  
  
  addBtn.onclick = ()=>{ //when user click on plus icon button
    let userEnteredValue = inputBox.value; //getting input field value
    let getLocalStorageData = localStorage.getItem("New Todo"); //getting localstorage
    if(getLocalStorageData == null){ //if localstorage has no data
      listArray = []; //create a blank array
    }else{
      listArray = JSON.parse(getLocalStorageData);  //transforming json string into a js object
    }
    listArray.push(userEnteredValue); //pushing or adding new value in array
    localStorage.setItem("New Todo", JSON.stringify(listArray)); //transforming js object into a json string
    showTasks(); //calling showTask function
    addBtn.classList.remove("active"); //unactive the add button once the task added
  }
  showTasks(); //calling showTask function
  
  function showTasks(){
    let getLocalStorageData = localStorage.getItem("New Todo");
    if(getLocalStorageData == null){
      listArray = [];
    }else{
      listArray = JSON.parse(getLocalStorageData); 
    }
    
    let newLiTag = "";
    listArray.forEach((element, index) => {
      newLiTag += `<label id="delete-task"><input type="checkbox" width = 100px<li>${element}\t<button class="edit" onclick="deleteTask(${index})">Delete</button></li></input></label> </br>`;
    });
    todoList.innerHTML = newLiTag; //adding new li tag inside ul tag
    inputBox.value = ""; //once task added leave the input field blank
  }
  // delete task function
  function deleteTask(index){
    let getLocalStorageData = localStorage.getItem("New Todo");
    listArray = JSON.parse(getLocalStorageData);
    listArray.splice(index, 1); //delete or remove the li
    localStorage.setItem("New Todo", JSON.stringify(listArray));
    showTasks(); //call the showTasks function
  }
  // edit task function