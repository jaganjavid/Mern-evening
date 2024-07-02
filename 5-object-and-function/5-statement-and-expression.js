
// greet();

// Function Statement

function greet(){
    console.log("Hai");
}

// greet();


// Function expression

// anonymousGreet();

var anonymousGreet = function(){
    console.log("Hello");
}

// anonymousGreet();

// Pass them around

function log(a){
   a();
}

// log("Hello");
// log(5);
// log(true);
// log([]);
// log({});
log(anonymousGreet);

// Create them on a fly
log(function(){
    console.log("Vanakam");
})

console.log((5 + 5));