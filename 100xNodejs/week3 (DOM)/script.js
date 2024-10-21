

// let count = 0;
// const obj = ["work", "jooging", "sleeping", "studying"]
// function callback() {
//     let arr = obj[count];
//     document.querySelectorAll("h3")[0].innerHTML = arr
//     document.querySelectorAll("h3")[1].innerHTML = arr
//     count++;
//     // console.log(x);
// }

// // let y = document.querySelectorAll("h3");
// // console.log(y);
// setInterval(callback, 1000);


//======DELETING THE ELEMENT====

function deleteTodo(val){
    const element = document.getElementById("todo_"+ val);
    element.parentNode.removeChild(element);
}