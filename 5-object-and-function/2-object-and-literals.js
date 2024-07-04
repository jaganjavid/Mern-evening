
var person = {
    // Property
    firstName: "Jagan",
    lastName: "Javid",
    age:27,
    address:{
        street:"222 main str",
        city:"Chennai",
        state: "TN"
    }, 
    // Method
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

console.log(person);
console.log(person.firstName);
console.log(person.lastName);