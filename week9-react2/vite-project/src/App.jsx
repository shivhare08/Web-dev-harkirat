import { useState } from 'react'


//function ke andr hi use state work krrha h
//const [state , changeState] = useState(0);
function Counter() {
  const [count, changeCount] = useState(0);

  function increment() {
    changeCount(count + 1)
  }

  function decrease() {
    changeCount(count - 0.5)
  }

  function reset() {
    changeCount(count * 0)
  }

  //it is return to APP
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>Increase count</button>
      <button onClick={decrease}>Decrease count</button>
      <button onClick={reset}>Reset count</button>

    </>
  )
}


// TODO APP
function Component() {
  const [todo, changeTodo] = useState(
    [
      { title: "z", des: "x" }
    ]
  );

  function TodoData(props) {
    console.log(props.title);
    return (
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
    //console.log(todo);
    
    changeTodo(newArr);

  }
  return (
    <>
      <h1>todo list</h1>
      <input id="one" type="text" placeholder="write" />
      <input id="two" type="text" placeholder="write" />
      <button onClick={AddTodo}>Add todo</button>
      {todo.map((to) => { 
        <TodoData title={to.title} des={to.des} ></TodoData>
      })}
    </>
  )
}

export default function App() {
  return (
    <>
      <Counter></Counter>
      <Component></Component>
      <Condition></Condition>
    </>

    //ek trha se ye function h or ye counter function ne return kiya
    // tabhi to aarha yha
  )
}


let x = true;
function Condition(){
  
  return (
    <>
      <div>
        {(!x)?<h2>hlo div</h2>:<h2>bye div</h2>}
      </div>
    </>
  )
}
