
// console.log(this);

function a(){
    console.log(this);
}

var b = function(){
    console.log(this);
}

a();
// b();

var c = {
    name: "The c Object",
    log: function(){

        // console.log(this); // the c object

        var self = this;

        var setName = function(newName){

            // console.log(this) // window

            self.name = newName;
        }

        setName("The C Object Updated");


    }
}

c.log();
console.log(c.name);