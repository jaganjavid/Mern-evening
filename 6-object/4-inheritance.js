

function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

// Greeting

Person.prototype.greeting = function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
}


const javid = new Person("Jagan", "Javid");

console.log(javid.greeting());

// Customer

function Customer(firstName, lastName, phone, membership){

    Person.call(this, firstName, lastName);
    this.phone = phone;
    this.membership = membership;


}



// Inherit the person prototype methods to customer
Customer.prototype = Object.create(Person.prototype);


const jc = new Customer("Jagan", "Javid", "111-1111-111", "standard");

console.log(jc);

console.log(jc.greeting());


