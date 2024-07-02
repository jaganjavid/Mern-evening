

const objectLiterals = {
    firstName:"Jagan",
    isAProgrammer: true
}

console.log(objectLiterals);

console.log(JSON.stringify(objectLiterals));

var jsonValue = JSON.parse(`{"firstName":"Jagan","isAProgrammer":true}`);

console.log(jsonValue);


