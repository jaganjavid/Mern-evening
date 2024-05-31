

const clearBtn = document.querySelector(".clear-tasks");

// Mouse Event

// Single Click
// clearBtn.addEventListener("click", runEvent);

// Double click
// clearBtn.addEventListener("dblclick", runEvent);

// Mouse down
// clearBtn.addEventListener("mousedown", runEvent);

// Mouse up
// clearBtn.addEventListener("mouseup", runEvent);

// Mouse Enter
// clearBtn.addEventListener("mouseenter", runEvent);

// Mouse Leave
clearBtn.addEventListener("mouseleave", runEvent);



function runEvent(event){
   console.log(`Event Type : ${event.type}`);
   console.log(event);
}