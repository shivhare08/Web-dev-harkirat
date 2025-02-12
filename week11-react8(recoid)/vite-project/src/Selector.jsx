import { atom, RecoilRoot, selector, useRecoilValue, useSetRecoilState } from "recoil"

const counterAtom = atom({
    key:"Counter",
    default : 0
})

const evenSelector = selector({
    key:"isEvenSelector",
    // get:({get})=>{

    // }

    //or

    get:function({get}){
        //i  or evenSelector depends on the counterAtom 
        const currentCount = get(counterAtom);  //yha se current Default value milgye\i currentCount ko...
        const isEven = currentCount%2 == 0;
        return isEven
    }
})

function RecoilSelector(){
    return(
        <>
        <RecoilRoot>
            <Counter/>
            <Button/>
            <IsEven/>
        </RecoilRoot>
        </>
    )
}

function Counter(){
    const currentValue = useRecoilValue(counterAtom)

    return(
        <>
            <h2>current value =  {currentValue}</h2>
        </>
    )
}


//is even selector related function
function IsEven(){
    const even = useRecoilValue(evenSelector)

    return(
        <>
            <h2>current value is =  {(even)?"even" : "odd"}</h2>
        </>
    )
}


//button comp. by atom value only
function Button(){
    const setCount = useSetRecoilState(counterAtom);

    function increment(){
        setCount(x => x+2)
    }

    function decrement(){
        setCount(x => x-1)
    }
    return(
        <div>
            <button onClick={increment} style={{background:"green", color:"white" , fontSize:"30px"}}>+</button>
            <button onClick={decrement} style={{background:"red", color:"white" , fontSize:"30px"}}>-</button>
        </div>
    )
}


export default RecoilSelector