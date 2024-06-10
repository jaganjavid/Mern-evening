
// Define UI Vars
const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");

// Load all event listeners

loadEventListeners();

function loadEventListeners(){

    // DOM Load Event

    document.addEventListener("DOMContentLoaded", getTasks);

    // Add Task Event
    form.addEventListener("submit", addTask);

    // Remove Element
    taskList.addEventListener("click", removeTask);

    // Clear Task Event
    clearBtn.addEventListener("click", clearTask);

}

function getTasks(){
    
    let tasks;

    if(localStorage.getItem("tasks") === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.forEach(function(item){
         //   Create a li Element
    const li = document.createElement("li");

    // Add class
    li.className = "collection-item";

    // Create a Text node
    li.appendChild(document.createTextNode(item));

    // Create a a element
    const link = document.createElement("a");

    // Add class to link
    link.className = "delete-item secondary-content";

    // Add Icon HTML
    link.innerHTML = `<i class="fa fa-remove"></i>`;
    
    // add link to li
    li.appendChild(link);

    // Add li to ul
    taskList.appendChild(li);
    })

}

// Add task

function addTask(e){
    
    e.preventDefault();

   if(taskInput.value === ""){
     alert("Please fill the form");
   } else{
     
    //   Create a li Element
    const li = document.createElement("li");

    // Add class
    li.className = "collection-item";

    // Create a Text node
    li.appendChild(document.createTextNode(taskInput.value));

    // Create a a element
    const link = document.createElement("a");

    // Add class to link
    link.className = "delete-item secondary-content";

    // Add Icon HTML
    link.innerHTML = `<i class="fa fa-remove"></i>`;
    
    // add link to li
    li.appendChild(link);

    // Add li to ul
    taskList.appendChild(li);

    // Store In JS
    storeTaskInLocalStorage(taskInput.value);

    // Clear the task input value
    taskInput.value = "";
    
     
   }

}

function storeTaskInLocalStorage(task){
  
    let tasks;

    if(localStorage.getItem("tasks") === null){
        tasks = [];
        console.log(1);
    }else{
       
        tasks = JSON.parse(localStorage.getItem("tasks"));

        console.log(2);
    }
    
    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));


}


// Remove Task

function removeTask(e){

    if(e.target.parentElement.className === "delete-item secondary-content"){
        if(confirm("Are you sure")){
            e.target.parentElement.parentElement.remove();
        }
    }

}

function clearTask(){

    // taskList.innerHTML = null;
    // taskList.innerHTML = "";

    const li = document.querySelectorAll("li");

//    for(let i = 0; i<li.length; i++){
        // console.log(li[i]);
        // li[i].remove();
//    }

    li.forEach(function(element){
       element.remove();
    })

}



// JSON

// const arr = [1,2,3];

// console.log(arr);

// const arrToString = JSON.stringify(arr);

// const stringToArray = JSON.parse(arrToString);

// console.log(arrToString);
// console.log(stringToArray);