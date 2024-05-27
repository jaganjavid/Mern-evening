
let val;

const list = document.querySelector(".collection");
const listLastItem = document.querySelector(".collection-item:last-child");


val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[1];
val = list.childNodes[3];
val = list.childNodes[3].nodeName;
val = list.childNodes[1].nodeName;
val = list.childNodes[0].nodeName;

// Element
// Attr
// Text Node     
// Comment

// Get the children element node

val = list.children; // ***
val = list.children[0];
// val = list.children[1].innerText = "Hello";
val = list.children[1].children[0].className;

// First Child
val = list.firstElementChild;

// Last Child
val = list.lastElementChild;

// Count the child element
val = list.childElementCount;


val = listLastItem;

// Get Parent Node
val = listLastItem.parentElement;

// Get pervious sibling
// val = listLastItem.previousElementSibling.previousElementSibling;

// Get next sibling
val = listLastItem.nextElementSibling;

console.log(val);