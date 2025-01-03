import { useEffect , useRef } from "react";

export function usePrev(value){ //first this runs
    const ref = useRef();

    useEffect(()=>{     //third this
        ref.current = value;
    },[value])

    return ref.current; //second this
}