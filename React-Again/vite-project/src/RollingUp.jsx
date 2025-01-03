import { useEffect, useState } from "react"

function Parent(){
    const [count , setCount] = useState(0);
    const [lightcolor , setlightColor] = useState(true);

    return(
        <>
            <Value count={count} lightcolor={lightcolor} setlightColor={setlightColor}></Value>
            <Increase count={count}  setCount={setCount}></Increase>
            <Decrease count={count}  setCount={setCount}></Decrease>
        </>
    )
}

function Increase(props){
    
    function inc(){
        props.setCount(c => c+1);
    }

    return(
        <>
            <button onClick={inc}>increase</button>
            <button onClick={inc}>increase</button>
        </>
    )
}

function Decrease(props){

    function dec(){
        props.setCount(c => c-1);
    }

    return(
        <>
            <button onClick={dec}>decrease</button>
        </>
    )
}

function Value(props){

    function changeColor(){
        props.setlightColor(c=> !c);
    }

    return(
        <>
        {(props.lightcolor)? <div style={{width:"50px" , height:"50px", color:"black" , background:"Yellow"}}>Light On</div> : <div style={{width:"50px" ,color:"white", height:"50px" , background:"black"}}>Light Off</div>}
        <h1>{props.count}</h1>
        <button onClick={changeColor}>switch</button>
        </>
    )
}

export default Parent