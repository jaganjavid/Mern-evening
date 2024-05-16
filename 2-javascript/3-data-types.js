
// Primitive value

// String
const name = "Jagan";

console.log(name);
console.log(typeof name);
 
// Number
const age = 27;

console.log(age);
console.log(typeof age);

// Boolean
const hasKids = true;

console.log(hasKids);
console.log(typeof hasKids);

// Null
const box = null;
console.log(box);
// console.log(typeof box);

// Undefined
let undef;

console.log(undef);
console.log(typeof undef);

// Reference types

const myArr = ["Jagan", "Javid", 27, true, undefined, null];

console.log(myArr);
console.log(typeof myArr);
console.log(myArr[0]);
console.log(myArr[2]);

// Object 
// Key:Value pairs or Name:Value pairs

const car = {
    name:"BMW",
    color: "Black",
    year:2020,
    start: function(){
        console.log("Car Started");
    }
}

console.log(car);
console.log(typeof car);
console.log(car.name);