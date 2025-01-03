import { createContext, useContext, useState } from "react"

const CountContext = createContext();

// But this ContextApi is not optimise than go into RECOIL
function CountProvider({children}){
    const [count , setCount] = useState(0);
    return (
        <>
            <CountContext.Provider value={{ count:count, setCount:setCount }}>
                {children}
            </CountContext.Provider>
        </>
    )
}
function CountComp(){
    return(
        <>
            <CountProvider>
                <App/>
            </CountProvider>
        </>
    )
}

function App(){
    return (
        <>  
            <Input/>
            <Increment/>
            <Decrement/>
            <Reset/>
        </>
    )
}


function Input(){
    const {count} = useContext(CountContext);

    return(
        <>
            <h1>{count}</h1>
        </>
    )
}

function Increment(){
    const {setCount} = useContext(CountContext);
    function inc(){
        setCount(count => count+1);
    }
    return(
        <>
            <button onClick={inc}>Increment</button>
        </>
    )
}

function Decrement(){
    const {count ,setCount} = useContext(CountContext);
    function dec(){
        setCount(count-1);
    }
    return(
        <>
            <button onClick={dec}>Decrement</button>
        </>
    )
}

function Reset(){
    const {setCount} = useContext(CountContext);
    function rec(){
        setCount(anything => anything*0);
    }
    return(
        <>
            <button onClick={rec}>Reset</button>
        </>
    )
}

export default CountComp