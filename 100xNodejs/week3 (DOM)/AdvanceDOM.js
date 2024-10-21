// let count = 0;

// function addTodo(){
//     // //console.log("hlo");
//     // alert("mc")
//     // prompt("bsdk");
//     let InputValue = document.querySelector('#in');
//     const value = InputValue.value

//     const spanEl = document.createElement('span');
//     const buttonEl = document.createElement('button');
//     count = count+1;
//     spanEl.innerHTML = count + " " +value;
//     buttonEl.innerHTML = "click me";

//     const divEl = document.createElement('div');
//     divEl.appendChild(spanEl);
//     divEl.appendChild(buttonEl);

//     document.querySelector('body').appendChild(divEl);
    
// }


//Advancve Function LIke state , component and render called react

let data = [];
function addTodo(){
    data.push({
        title : document.querySelector("input").value,
        //description : document.querySelector("checkbox").value
    })
    render();
}
 console.log(data);
 
function deleteTodo(index){
    data.splice(index,1);
    render();
}

function deleteLastTodo(){
    data.splice(data.length - 1 , 1);
    render();
}

function deleteFirstTodo(){
    data.splice(0 , 1);
    render();
}

//this fun giving us the component or body or structure

function createTodoComponent(info , index){
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    //h1.setAttribute('style','color:white;')
    h1.setAttribute('class','setAt')

    const button = document.createElement('button');
    button.innerHTML = 'Delete';
    //for individual deleteing
    button.setAttribute('onclick',"deleteTodo(" + index +")")
    h1.innerHTML = info.title;
    div.append(h1);
    div.append(button);
    return div;
}

//this fun giving us the data
let count = 0;
function render(){
    document.querySelector('#data').innerHTML = "";
    for(let i=0;i<data.length;i++){
        const element = createTodoComponent(data[i] , i);   //element will come with compo like div h1
        document.querySelector("#data").appendChild(element)
    }
    // count++;
}


//render Push the data and create elements
// let count = 0;
// function render(){
//     for(let i=count;i<data.length;i++){
//         const todo = data[i];
//         const div = document.createElement('div');
//         const h2 = document.createElement('h2');
//         //const textarea = document.createElement('textarea');
//         const button = document.createElement('button');
//         button.innerHTML = 'Delete';
//         h2.innerHTML = todo.title;
//         //textarea.innerHTML = todo.description;
//         div.append(h2);
//         div.append(button);
//         //div.append(textarea)
//         document.querySelector('body').appendChild(div);
//     }
//     count++;
// }