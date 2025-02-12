import { useEffect , useState , memo } from "react";

function MemoFun(){
    return(
        <>
            <Counter/>
        </>
    )
}

function Counter(){
    const [count , setCount] = useState(0);

    useEffect(()=>{
        setInterval(()=>{
            setCount(c => c+1)
        },3000)
    })

    return(
        <>
        <div>
            <CurrentCount/>
            <Increment count={count}/>
            <Decrement/>
        </div>
        </>
    )
}


const CurrentCount = memo(function(){
    return(
        <>
            <h2>1</h2>
        </>
    )
})


//sirf increment wala re-render horah kuki changes isi me hi horha 
memo(Increment)

function Increment({prop}){
    return(
        <>
            <h2>increment {prop}</h2>
        </>
    )
}

const Decrement = memo(function(){
    return(
        <>
            <h2>decrement</h2>
        </>
    )
})

export default MemoFun