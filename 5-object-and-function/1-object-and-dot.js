

var person = new Object();

person.firstName = "Jagan";
person.lastName = "Javid";
person.age = 27;
person.address = new Object();

person.address.street = "111 main st";
person.address.city = "chennai";
person.address.state = "TN";


// Method
person.getFullname = function(){

    return `${this.firstName} ${this.lastName}`;

}

console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.address.street);
console.log(person.getFullname());