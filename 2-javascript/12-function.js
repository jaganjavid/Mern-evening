
// Two Phases

// 1 - Creatation
// 2 - Excutation


// Function statement

// greet();

// function greet(firstName = "John", lastName = "Doe"){

    // Default Value

    // if(typeof firstName === "undefined"){
    //     firstName = "John"
    // }

    // if(typeof lastName === "undefined"){
    //     lastName = "Doe"
    // }


//     console.log(`Hello ${firstName} ${lastName}`);
// }

// Call Function
// greet("Jagan", "Javid");
// greet();
// greet();
// greet();
// greet();

// Function expression

// add(5, 5);
// const add = function(x, y){
//   console.log(x + y);
// }

// add(5, 5);

// IIFE (Immediately Invoked Function Expression)

(function(name){
    console.log("Hello " + name);
})("Jagan");

