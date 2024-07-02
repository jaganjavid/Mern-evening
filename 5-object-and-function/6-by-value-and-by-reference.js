

// By Value (Primitive Types)

var a = 5;

var b = a;

a = 2;


console.log(a);
console.log(b);

// By Reference (all object (including function))

var c = {
    greeting: "Hai"
}

var d; 

d = c;

// c.greeting = "Vanakam";
d.greeting = "Hola";

console.log(c);
console.log(d);