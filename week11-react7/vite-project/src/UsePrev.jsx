import { useState } from "react"
import { usePrev } from "./Hooks/usePrev";

export default function UsePrev(){
    const [count , setCount] = useState(0);
    const value = usePrev(count);
    
    return(
        <div>
            <button onClick={()=>{
                setCount(x=> x+1)
            }}>click me {count}</button>
            
            <h2>{value}</h2>
        </div>
    )
}