import { useEffect, useState } from "react"

export default function Clock(){
    return(
        <>
        <h3>hey there</h3>
        {/* <h3>simply running {<Component></Component>}</h3> */}
        <ConditionalRerendring></ConditionalRerendring>
        </>
    )
}

//mounting , re-rendring , unmounting
function Component(){
    const [count,changeCount] = useState(0);
    // setInterval(counting,1000);
    //console.log("count");     == ye mera baar baar log horha h 

    //hooking into the lifecycle events of react
    useEffect(()=>{
        console.log("on mount");
        let clock = setInterval(function(){
            console.log("from inside the interval");
            changeCount(count => count+1);
        },1000);
        //ye clearInterval to unmounnt pr puri trha se rokne ke liye h 5 sec tak
        return function(){
            console.log("on unmount");
            clearInterval(clock)
        }
    },[])   //dependency array



    
    function counting(){
        //changeCount(count => count+1) == count as a parameter and and we are returining count + 1
        //      or
        changeCount(function(count){
            return count+1;
        })
        console.log("mount");      //or ye nahi horha baar baar log only once bar   
    }
    return (
        <>
        
            {count}
        </>
    )
}


//conditional => conditions ,  rerendring , fetching 
function ConditionalRerendring(){
    const [counterVisible , setCounterVisible] = useState(true);
        //5 second baad gayb and 5 sec baat appear
    //====================================================
    //yha pr rerender horha h

    // console.log("before");
    // setInterval(()=>{           
    //     changeCount(counting + 1)
    // },1000)
    //===================================================

    //===================================================
    //yh pr re render ni horha inside the useEffect with [] dependancy

    // useEffect(()=>{
    //     console.log("after");
    //     setInterval(()=>{
    //         changeCount(counting =>counting + 1)
    //     },1000)
    // },[]);
    //=========================================================

    //=========================================================
    //conditional => conditions ,  rerendring , fetching 

    useEffect(()=>{
        setInterval(()=>{
            setCounterVisible(counterVisible => !counterVisible)
        },5000)
    },[])    

    // useEffect(()=>{
    //     setInterval(()=>{
    //         changeCount(counting=> counting+1);
    //     },1000)
    // },[])   

    //=========================================================

    // let counterVariable = true;
        // if(counting == 7){
        //     console.log("rukja bsdk");
        //     counterVariable = false
        // }

    // useEffect(()=>{
    //     setInterval(()=>{
    //         changeCount((ctr)=>{
    //             return ctr+1;
    //         })
    //     },1000)
    // },[counterVariable])     //counting == 10 it is like jese hi counting == 0
    return(
    <>
       {/* har 5 second baad ye return kre */}
        <h3>{counterVisible && <Component></Component>}</h3>
        {/* <div style={{visibility:counterVisible ? "hidden" : "visible"}}><Component></Component></div>   */}
    </>
    )
}


//conclusion

// ConditionalRerendring function normally return krrha but har 5 sec baad
// vo khud ko false krrha mtlb if false hogya to vo return hi ni krega esa
//or component simply hr second me display krrha...
// or jese hi ConditionalRerendring ke 5 sec hue to vo false hojayega ..yaniki 
//vo return hi kch ni krega or fr component khud se retrun krdega clearSetInterval
