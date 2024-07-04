

function greet(firstName, lastName,language){

    return `${firstName} ${lastName} I speak ${language}`;

}

function tamilGreet(language){
    return greet("Jagan", "Javid", language);
}

function englishGreet(language){
    return greet("Akash", "Kumar", language);
}


console.log(tamilGreet("Tamil"));
console.log(englishGreet("English"));