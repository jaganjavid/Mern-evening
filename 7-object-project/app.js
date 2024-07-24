
// Book constructor

function Book(title, author, isbn){

    this.title = title;
    this.author = author;
    this.isbn = isbn;

}



function UI(){


    UI.prototype.addBookToList = function(book){
        
        const list = document.querySelector("#book-list");

        // Create tr element
        const row = document.createElement("tr");

        row.innerHTML = `
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.isbn}</td>
                <td class="delete">
                    <span class="btn btn-danger">X</span>
                </td>
        `;

        list.appendChild(row);

    }

    UI.prototype.clearField = function(){

        document.querySelector("#title").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#isbn").value = "";

    }

    UI.prototype.clearTasks = function(){
        document.querySelector("#book-list").innerHTML = "";
    }

    UI.prototype.deleteTask = function(icon){

        if(icon.parentElement.className === "delete"){
            icon.parentElement.parentElement.remove();
        }

    }

    UI.prototype.showAlert = function(message, className){

        this.clearAlert();
       
        // Create div
        const div = document.createElement("div");

        // Add class
        div.className = `alert alert-${className}`;

        // Add inner Text
        div.innerText = `${message}`;

        // Added in to show alert div
        document.querySelector(".show-alert").appendChild(div);


        setTimeout(function(){
            document.querySelector(".alert").remove();
            this.clearAlert();
        }, 3000)

    }

    UI.prototype.clearAlert = function(){

        const currentAlert = document.querySelector(".alert");

        if(currentAlert){
            currentAlert.remove();
        }

    }
}






// Event for submit

document.querySelector("#book-form").addEventListener("submit", function(e){

    e.preventDefault();

   
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#isbn").value;

    const book = new Book(title, author, isbn);


    // console.log(book);


    const ui = new UI();
   

    // Validation

    if(title === "" || author === "" || isbn === ""){
        ui.showAlert("please fill all the fields","danger");
    } else {
        
        ui.addBookToList(book);
        ui.clearField();
        ui.showAlert("Book added","success");
        
    }


})


document.querySelector("#book-list").addEventListener("click", function(e){

    const ui = new UI();

    ui.deleteTask(e.target);

    ui.showAlert("Book removed","success");

})

// Clear Task event
document.querySelector(".clear").addEventListener("click", function(){

    const ui = new UI();
    ui.clearTasks();
    ui.showAlert("Book cleared","success");

})


// setTimeout(function(){
//    console.log("Hello");
// }, 3000)