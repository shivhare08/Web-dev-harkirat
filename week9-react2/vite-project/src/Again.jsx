import { useEffect, useState } from "react"

export default function Again(){
    const [Home , setHome] = useState(0);
    const [Notification , setNoti] = useState(0);
    function increase(){
        setHome(inc =>inc+1);
    }

    function decrease(){
        setNoti(dec => dec-1);
    }
    return (
        <>
            <Counter home = {Home} notification ={Notification}/>
            <button onClick={increase}>Home</button>
            <button onClick={decrease}>Notification</button>
        </>
    )
}

function Counter(props){
    
    //hr count pr change
    useEffect(()=>{
        console.log("on mount");
        return function(){
            console.log("on unmount");  
        }
    },[])

    useEffect(()=>{
        console.log("notification");
        return function(){
            console.log("cleanup notification");  
        }
    },[props.notification])

    //jese hi 5 hua count then log
    useEffect(function(){
        console.log("Home");
        return function(){
            console.log("cleanup Home");
        }
    },[props.home])

    //condion h ki jbbhi 5 hua then notification pr cleanup chle
    return <div>
        <h3>counter {props.home}  {props.notification}  </h3>
    </div>
}