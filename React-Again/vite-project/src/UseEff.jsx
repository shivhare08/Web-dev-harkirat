import { useEffect , useState} from "react"

function UseEff(){
    const [count , setCount] = useState(0);
    const [count1 , setCount1] = useState(0);
    const [count2 , setCount2] = useState(2);

    function increment(){
        setCount(c=>c+1)
    }

    function decrement(){
        setCount1(c=>c-1)
    }

    function reset(){
        setCount2(c=>c*2)
    }
    return(
        <>
            <Navbar></Navbar>
            <Comp count={count} count1={count1} count2={count2}></Comp>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </> 
    )
}

function Comp(prop){

    useEffect(function(){
        console.log("count");
    },[prop.count])

    useEffect(function(){
        console.log("count1");

        return function(){
            console.log("clear the things"); 
        }
    },[prop.count1])

    useEffect(function(){
        console.log("count2");
    })
    
    return(
        <>
            <h2>{prop.count}</h2>
            <h2>{prop.count1}</h2>
            <h2>{prop.count2}</h2>
        </>
    )
}


function Navbar(){

    return(
        <>
            <div style={{backgroundColor: "#000000bd" , color:"white" , display:"flex" ,justifyContent:"space-evenly"}}>
                <h3>Home</h3>
                <h3>About</h3>
                <h3>Friends</h3>
                <h3>Message</h3>
                <h3>Notification</h3>
            </div>
        </>
    )
}

export default UseEff