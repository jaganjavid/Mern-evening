

var arr = [
    1,
    true,
    {
       name:"Javid"
    },
    function(name){
        var greeting = "Hello";
        console.log(`${greeting} ${name}`);
    },
    "Hey",
    undefined, 
    null,
    [1,2,3]
];


console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2].name);
arr[3]("Jagan");
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7][1]);


// function a(x, y){

// }

// a(5,6)