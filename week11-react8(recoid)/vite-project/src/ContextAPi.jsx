import { createContext, useContext, useState } from "react"

const CountContext = createContext();

export default function ContextApi(){
    const [count , setCount] = useState(0);
    return(
        <>
            <CountContext.Provider value={{
                count:count,
                setCount:setCount
            }}>
                <Parent/>
            </CountContext.Provider>
        </>
    )
}



function Parent(){
    const {count} = useContext(CountContext)
    return(
        <>  
            <h2>{count}</h2>
            <Increment/>
            <Decrement/>
        </>
    )
}

function Increment(){
    const {setCount} = useContext(CountContext);
    function Incre(){
        setCount(x=>x+1);
    }

    return(
        <button onClick={Incre}>Increment</button>
    )
}


function Decrement(){
    const {setCount} = useContext(CountContext);
    function Decre(){
        setCount(x=>x-1);
    }

    return(
        <>
            <button onClick={Decre}>Decrement</button>
        </>
    )
}
