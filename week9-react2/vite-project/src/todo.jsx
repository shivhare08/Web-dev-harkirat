import { useState } from "react"

//createing a component
function Component() {
    const [todo, changeTodo] = useState([
        { title: "hi", des: "hlo" }
    ]);

    function TodoData(props){
        return(
            <>
                <h2>{props.title}</h2>
                <h2>{props.des}</h2>
            </>
        )
    }

    function AddTodo() {
        let newArr = [];
        for (let i = 0; i < todo.length; i++) {
            newArr.push(todo[i]);
            //yha pr like ki pehle todo[0 1 2 jitne bhi] ho unko pehle new arry me
            //dalo then jo input me aya h fr wo daalo
            //jisse todo ke jitne bhi element h new ke sath sath sarre old wale bhi aayen
        }

        newArr.push({
            title: document.getElementById("one").value,
            des: document.getElementById("two").value
        });

        changeTodo(newArr);

    }
    return (
        <>
            <h1>todo list</h1>
            <input id="one" type="text" placeholder="write" />
            <input id="two" type="text" placeholder="write" />
            <button onClick={AddTodo}>Add todo</button>
            {todo.map((to)=>{
                <TodoData title={to.title} des={to.des} ></TodoData>
            })}
        </>
    )
}


export default function Todo() {
    return (
        <>
            <Component></Component>
        </>
    )
}