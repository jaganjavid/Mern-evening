

const firstName = "Jagan";
const lastName = "Javid";
const age = 27;
const str = "Hello im jagan and im a web dev";
const tags = "Web, Mobile, Desktop";

let val;

val = firstName + lastName;


// Concatenation
val = firstName + " " + lastName;

// Append
val = "John";

// val = val + " Doe";
val += " Doe";

val = "Hello, my name is " + firstName + " and i am " + age;

// Length
val = firstName.length;

val = firstName[0];

// Concat
val = firstName.concat(" ", lastName);

// Change Case
val = firstName.toUpperCase(firstName);
val = firstName.toLowerCase(firstName);

// CharAt
val = firstName.charAt("2");
val = firstName.charAt(firstName.length - 1);

// Slice()

const fruit = "Kiwi";
val = fruit.slice(1,3);
val = fruit.slice(0);

// Split()
val = str.split(" ");
val = tags.split(",");

// Replace
val = str.replace("jagan", "Akash");

// Include
val = str.includes("web");
val = str.includes("app");

console.log(val);