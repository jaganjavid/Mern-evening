
// Define UI Vars
const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");

// Load all event listeners

loadEventListeners();

function loadEventListeners(){

    // Add Task Event
    form.addEventListener("submit", addTask);

    // Clear Task Event
    clearBtn.addEventListener("click", clearTask);

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

    // Clear the task input value
    taskInput.value = "";
    
     
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