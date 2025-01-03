//all about custom hooks
import { useState } from "react"

function App() {
 
  return (
    <>
      <Counter/>
      <Counter/>
      <br/>
      <Counter/>
    </>
  )
}

//this is a custom hook that i can use again and again
function useCounter(){
  const [count , setCount] = useState(0);

  function increase(){
    setCount(x => x+1);
  }
  return {
    count : count,
    increase : increase
  }
}

function Counter(){

  const {count , increase} = useCounter();
  return <>
    <button onClick={increase}>click me {count}</button>
  </>
}

export default App
