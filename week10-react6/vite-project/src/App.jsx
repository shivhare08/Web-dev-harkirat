import { useState } from "react"
import PropDrilling from "./PropDrilling";
import CountComp from "./Count";
import RecoidLib from "./Recoil";
RecoidLib
function App() {

  return (
    <>
      <div>
        <RecoidLib/>
        <hr/>
        <CountComp/>
        <hr/>
        <PropDrilling/>
        <LightBulb />
      </div>
    </>
  )
}

function LightBulb() {
  const [bulbOn , setBulbon] = useState(true);
  
  return (
    <div>
      <BulbState bulbOn={bulbOn} />
      <ToggleBulbState setBulbon={setBulbon} />
    </div>
  )
}


//but how to change the component from different component
function BulbState({bulbOn}){
  const style = {backgroundColor:"white", color:"green"}
  const black = {backgroundColor:"black", color:"white"}
  return (
    <div>
      {bulbOn ? <h1 style={style}>On</h1> : <h1 style={black}>Off</h1>}
    </div>

  )
}

function ToggleBulbState({setBulbon }) {
  function toggle(){
    setBulbon(currentState => !currentState)
  }

  return (
    <>
      <div>
        <button onClick={toggle}>Toggle the bulb</button>
      </div>
    </>
  )
}

export default App
