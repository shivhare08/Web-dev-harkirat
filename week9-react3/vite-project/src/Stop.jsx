import { useEffect, useState } from "react"

export default function Stop(){
    const [showTime , setTime] = useState(true);
    useEffect(()=>{     //in useEffect because normally count hooo
        setInterval(()=>{
            setTime((anything)=> !anything)
        },5000)
    },[])

    const Timer = function(){
        const [count , setCount] = useState(1);
        useEffect(()=>{     //useEffect bhi retrun krta h function or anyihign
            let clock = setInterval(()=>{
                console.log("runnning");    //it will running always with setTime duration
                setCount((prev) => prev+1);
            },1000);
            //cleanup code
            return function(){
                clearInterval(clock)
            }
        },[]);

        return (
            <div>
                {count}
            </div>
        )
    }

    return(
        <>  
        <h1>
            {showTime && <Timer/>}
        </h1>
        </>
    )
}
