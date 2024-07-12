
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
}



// Event for submit

document.querySelector("#book-form").addEventListener("submit", function(e){

    e.preventDefault();

   
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#isbn").value;

    const book = new Book(title, author, isbn);
    const ui = new UI();
   

    // Validation

    if(title === "" || author === "" || isbn === ""){
        alert("Please fill the form");
    } else {
        
        ui.addBookToList(book);
        ui.clearField();
        
    }


})


// Clear Task event
document.querySelector(".clear").addEventListener("click", function(){

    const ui = new UI();
    ui.clearTasks();

})