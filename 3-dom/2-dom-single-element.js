
// console.log(document.getElementById("task-title"));


const taskTitle = document.getElementById("task-title");

// Change Style

taskTitle.style.backgroundColor = "blue";
taskTitle.style.color = "#ffffff";
taskTitle.style.padding = "20px";

// Change Content
taskTitle.innerText = "Jagan";
taskTitle.innerHTML = "<span>Javid</span>";


// document.querySelector("");

console.log(document.querySelector("#task-title")); // id
console.log(document.querySelector(".collection")); // class
console.log(document.querySelector("h5")); // tags

document.querySelector("li").style.backgroundColor = "blue";
document.querySelector("ul li").style.backgroundColor = "green";
document.querySelector("ul li:nth-child(3)").style.backgroundColor = "orange";
document.querySelector("ul>li:first-child").style.backgroundColor = "brown";