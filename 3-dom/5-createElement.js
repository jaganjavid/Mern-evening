
// Create a element

const li = document.createElement("li");

// Add class
li.className = "collection-item";

// Add id
li.id = "test";

// Create a text node and append
li.appendChild(document.createTextNode("Hello"));

// Create a new link element
const link = document.createElement("a");

// Add a class
link.className = "delete-item secondary-content";

// Add icon to html
link.innerHTML = `<i class="fa fa-remove"></i>`;

// Link append to li
li.appendChild(link);

// put li to ul

document.querySelector(".collection").appendChild(li);

