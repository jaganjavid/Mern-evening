

function Person(firstName, lastName){

    this.firstName = firstName;
    this.lastName = lastName;
    // this.getFullName = function(){
    //     return `Hai ${this.firstName} ${this.lastName}`;
    // }

}

Person.prototype.getFullName = function(){
    return `Hello ${this.firstName} ${this.lastName}`;
}






const javid = new Person("Jagan", "Javid");

// javid.__proto__.__proto__.getFullName = function(){
//         return `Vanakam ${this.firstName} ${this.lastName}`;
// }




console.log(javid.getFullName());
console.log(javid);



const arr = [1,2,3];

console.log(arr);

