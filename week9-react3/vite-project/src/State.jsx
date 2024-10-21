import { useState } from "react"

function Toggle() {
    //whenever it change the state the it re-render the page or full component 
    const [isVisible, setisVisible] = useState(false);


    //this logic will not re-rendering 
    //becouse we havent usea d state variable
    let any = true;
    function myfun() {
        any = !any;
    }

    return (
        <>
            {/* this logic will not re-rendering 
            becouse we havent usea d state variable */}
            <button onClick={myfun}>click me</button>
            {any && <h3>my function</h3>}


            <button onClick={() => setisVisible(!isVisible)}>click me</button>
            {isVisible && <h1>hey chase me buddy</h1>}
            {/* or */}
            {(isVisible) ? <h2>hey buddy</h2> : null}
        </>
    )
}

function NotificationIcon() {
    const [noti,isnoti] = useState(0);

    function change(){
        // isnoti((value)=>value+1)
        // or
        isnoti(noti+1)
    }
   
    return (
        <div>
            <div style={{width:"30px", backgroundColor:"red" ,height : "20px", borderRadius:"40px" , color:"white"}}> {noti}</div>
            <h1>❤️</h1>
            <button onClick={change}>like</button>
        </div>
    )
}

function State() {
    return (
        <>
            <Toggle></Toggle>
            <NotificationIcon></NotificationIcon>
        </>

    )

}


export default State