import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [vis, setVis] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(function () {
    setInterval(function () {
      setCount(v => v + 1)
    }, 1000)
  }, [])

  useEffect(function() {
    setInterval(function () {
      setVis(x => !x)
    }, 5000)
  }, [])

  return (
    <>
      <Counter></Counter>
      <br></br>
      {/* {(true)?<ISVISIBLE></ISVISIBLE>:<h3>nikl bsdk</h3>} */}
      {vis ? <ISVISIBLE></ISVISIBLE> : count}
    </>
  )
}

function ISVISIBLE() {
  return (
    <>
      <h2>How are you sir</h2>
    </>
  )
}

function Counter() {

  const [count, setCount] = useState(0);
  console.log("hewsy");
  

  // useEffect

  useEffect(function () {
    setInterval(function (){
      increment()
    }, 1000)
  },[])


  function increment() {
    setCount(value => value + 1)
  }

  function decrement() {
    setCount(value => value - 1)
  }

  function reset() {
    setCount(value => value * 0)
  }
  let x = true
  return (
    <>
      <h3>{count}</h3>
      {(x) ? <h3>hey</h3> : <h2>hoa are you</h2>}
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
    </>
  )
}

export default App



// mounting the functions inside the component , re-rendring the full component , unmounting that is opposite of mounting
//useEffect hook
// useEffect contains the function [for mounting the particular thing] and dependency