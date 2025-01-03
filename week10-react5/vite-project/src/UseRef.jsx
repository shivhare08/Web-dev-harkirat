import { useEffect, useRef, useState } from "react";
import { BrowserRouter , Routes , Route, Outlet } from "react-router-dom";

function Clock(){
    const [value , setValue] = useState(0);
    //const [timer , setTimer] = useState(0); iski jgha use Ref

    const timer = useRef();
    
    function startClock(){
        let Totaltime = setInterval(()=>{
            setValue((x) => x+1)
            // setTimer(Totaltime);  iski jgha useRef
            timer.current = Totaltime
        },1000)
    }

    function stopClock(){
        clearInterval(timer.current)
        //this will stop after the timer ki current value lene kr
    }
    //pr yha pr re-render to frbhi horha h upr wali approch se
    return(
        <>
            <h1>{value}</h1>
            <h2></h2>
            <button onClick={startClock}>start</button>
            <button onClick={stopClock}>stop</button>
        </>
    )
}

function UseRef() {
    // window.setTimeout(function(){
    //     document.getElementById("name").focus()
    // },2000)
    function focusmode() {
        document.getElementById("name").focus()
    }

    const inputRef = useRef(null);
    function reference(){
        inputRef.current.focus()
    }
    

    return (
        <>
        {/* <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/happy" element={<Happy/>}/>
                    <Route path="/happy/sad" element={<Sad/>}/>
                </Route>
            </Routes>
        </BrowserRouter> */}

        <Clock/>
            <h3>signin</h3>
            <h1 id="dummy">hey dummy</h1>
            <input id="name" placeholder="first" />
            <input id="second"  ref={inputRef} type="text" placeholder="second"></input>
            <input id="password" placeholder="third" type="text"></input>
            <button onClick={reference}>submit</button>
            {/* <button onClick={focusmode}>submit</button> */}
        </>
    )
}

function Layout(){
    return (
        <>
        <h1>Header</h1>
            <Outlet/>
        <h1>Footer</h1>
        </>
    )
}

function Happy(){
    return (
        <>
            <h2>HEY happy man</h2>
        </>
    )
}

function Sad(){
    return (
        <>
            <h2>Sad</h2>
        </>
    )
}

export default UseRef;