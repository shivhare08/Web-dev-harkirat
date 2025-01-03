import { useRef } from "react"

export default function UseDebounces(){

    //originalFn == sendDataToBackend
    function useDebounces(originalFn){
        const currentClock = useRef();
        const fun =()=>{
            clearTimeout(currentClock.current);
            currentClock.current = setTimeout(originalFn , 2000)
        }

        return fun
    }

    //original function
    function sendDataToBackend(){
        fetch("api.amazon.com/search/")
    }

    const debounceFn = useDebounces(sendDataToBackend)

    return(
        <>
            <input type="text" onChange={debounceFn} placeholder="search items"></input>
        </>
    )
}