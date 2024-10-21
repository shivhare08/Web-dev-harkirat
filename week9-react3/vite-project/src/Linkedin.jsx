import { useEffect, useState } from "react"

export default function Linked(){

    const [currentTab , setCurrenttab] = useState(3)    //when tha currentTab will change then it re-render the things
    const [tabData , setTabData] = useState({});        //{}= because json format obj
    const [loadind , setLoading] = useState(true);

    //useEffect for fetching
    useEffect(()=>{
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/todos/' + currentTab)       //yha pr todo +1 ,2,  3 ex=(https://jsonplaceholder.typicode.com/todos/1)
        .then(async (res) => {
            const dataINjson = await res.json();
            setTabData(dataINjson);
            setLoading(false);
        })
    },[currentTab]);  //jese hi currentTab change tbtb useEffect works
    return (
        <div>
            {loadind ? "loading..." : tabData.title}
            {tabData.title}
            <br/>
            <button onClick={function(){
                setCurrenttab((previousVlue) => previousVlue+1)
            }} style={{color:currentTab == 1 ? "red" : "black"}}>Home</button>

            <button onClick={function(){
                setCurrenttab(2)
            }} style={{color:currentTab == 2 ? "red" : "black"}}>Notification</button>
            
            <button onClick={function(){
                setCurrenttab(3)
            }} style={{color:currentTab == 3 ? "red" : "black"}}>messages</button>

            <button onClick={()=>{
                setCurrenttab(4)
            }} style={{color:currentTab == 4 ? "red" : "black"}}>jobs</button>
        </div>
    )
}