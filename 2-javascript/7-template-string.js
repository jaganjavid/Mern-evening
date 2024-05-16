
const name = "Javid";
const age = 27;
const job = "Web developer";
const city = "chennai";



let html;

// Without template strings

// html = "My name is " + name + " " + "im" + " " + age + " " + "my job is" + " " + job + " " + "from" + " " + city;

// Template strings (es6)

html = `My name is ${name} im ${age} my job is ${job} and im from ${city}`;


console.log(html);