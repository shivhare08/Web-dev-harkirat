// The useRef Hook allows you to persist values between renders.

import { useRef, useState } from "react"

// It can be used to store a mutable value that does not cause a re-render when updated.

// It can be used to access a DOM element directly.

function UseReference(){
    // window.setTimeout(function(){
    //     document.getElementById("name").focus()
    // },2000)
    
    const inputRef = useRef();
    const inputRef2 = useRef();

    function inputChange(){
        inputRef.current.focus()
    }

    window.setTimeout(function(){
        inputRef2.current.focus()
    },5000)

    return(
        <>
            <input ref={inputRef} type={"text"} placeholder={"enter name"}></input>
            <input ref={inputRef2} type={"text"} placeholder={"enter surname"}></input>
            <button onClick={inputChange}>submit</button>


            {/* Clock */}
            <Clock/>
        </>
    )
}

//A clock with a start and stop functionallity

function Clock(){
    const [count , setCount] = useState(0);
    // const [timer , setTimer] = useState(0);
    const timer = useRef();
    
    function start(){
        let value = setInterval(function(){
            setCount(c => c+1)
        },1000)

        timer.current = value;
        // setTimer(value);
    }

    function stop(){
        clearInterval(timer.current)
    }
    return(
        <>
            <h2>{count}</h2>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
        </>
    )
}

export default UseReference