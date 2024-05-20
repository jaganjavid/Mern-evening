
// If ... else

// if(something){
//     do something
// } else{
//     do something else
// }


const id = 100; // number

// Equal to  == 

if(id == "100"){
    console.log("CORRECT");
}else{
    console.log("INCORRECT")
}


if(id != "100"){
    console.log("CORRECT");
}else{
    console.log("INCORRECT")
}

// Equal to both value and type

if(id === 100){
    console.log("CORRECT");
}else{
    console.log("INCORRECT")
}

if(id !== "100"){
    console.log("CORRECT");
}else{
    console.log("INCORRECT")
}

// Test if undefined

let greet = "Hello"; 


if(typeof greet === "undefined"){
    console.log(`Yeah im undefined cos im not having value, ${greet}`);
} else {
    console.log(`Yeah im defined cos im having value ${greet}`);
}

// Greate or less than

if(id >= 99){
    console.log("CORRECT");
}else{
    console.log("INCORRECT")
}

if(id <= 99){
    console.log("CORRECT");
}else{
    console.log("INCORRECT")
}

// if else

const color = "blue";

if(color === "blue"){
    console.log("Im blue");
} else if(color === "green"){
    console.log("Im green");
} else{
    console.log("I dont know the color");
}

// Logical - && operator both value TRUE OR FALSE

const name = "jagan";
const age = 50;

if(age > 0 && age < 12){
    console.log(`${name} is a child`);
} else if(age > 13 && age < 19){
    console.log(`${name} is a teenager`);
} else{
    console.log(`${name} is adult`);
}

// OR - || check only one true or false

if(age < 16 || age > 65){
    console.log(`${name} can not the race`); 
}else{
    console.log(`${name} can run the race`); 
}

// Ternary operator
console.log(100 === 100 ? "Correct" : "INCORRECT");