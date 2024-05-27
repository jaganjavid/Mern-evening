

const items = document.getElementsByClassName("collection-item");


console.log(items);
// console.log(items[0]);
// items[0].style.background = "green";
// items[0].style.color = "#ffffff";
// items[0].innerText = "Vanakam";


// for(let i = 0; i < items.length; i++){
    // console.log(i);
    // console.log(items[i]);

//     items[i].style.backgroundColor = "green";
// }

let lists = Array.from(items);

console.log(lists);

lists.forEach(function(item){
   item.style.backgroundColor = "green";
})


const arr = [1,2,3];

// console.log(arr);

// for(let i = 0; i < arr.length; i++){
//   console.log(i * 2);
// }

arr.forEach(function(number, index, array){

    console.log(number * index);

    // console.log(array);

})

