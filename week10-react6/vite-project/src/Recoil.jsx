import { RecoilRoot , atom, useRecoilValue, useSetRecoilState  } from "recoil"

const scount = atom({
    key:"countState", //unique ID (with respect to other atoms/selectors)
    default:0, //default value (initial value)
})

export default function RecoidLib(){
    return(
        <>  
            <h3>useRecoilValue</h3>
            <Parent/>
        </>
    )
}

function Parent(){
    return(
        <>
            <RecoilRoot>
                <Value/>
                <Increase/>
                <Decrease/>
            </RecoilRoot>
        </>
    )
}

function Increase(){
    const setCount = useSetRecoilState(scount);
    return(
        <>
            <button onClick={()=>setCount(count => count+1)}>Increase</button>
        </>
    )
}

function Decrease(){
    const setCount = useSetRecoilState(scount);
    return(
        <>
            <button onClick={()=>setCount(count => count-1)}>Decrease</button>
        </>
    )
}


function Value(){
    const countValue = useRecoilValue(scount);
    return(
        <>
            <h1>{countValue}</h1>
        </>
    )
}
