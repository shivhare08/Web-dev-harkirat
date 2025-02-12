import { useState } from "react"

export default function DarkMode(){
    return(
        <div className="h-screen bg-black">
            <Content/>
            <Button/>
        </div>
    )
}

function Content(){
    return(
        <>
            <h1 className="text-2xl bold text-center text-white">Hey, This is Mode Project</h1>
        </>
    )
}

function Button(){
    const [mode , setMode] = useState(false);

    function Change(){
        setMode(x => !x);
    }
    return(
        <>
            <button onClick={Change} 
            className="bg-blue-200 border w-16 h-8 text-light-800">
            {mode?<h2>Dark</h2> : <h2>Light</h2>}
            </button>
        </>
    )
}