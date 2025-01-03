import { useEffect, useState } from "react"
import { useFetch } from "./Hooks/useFetch"
//import { useFetchTitle } from "./Hooks/useFetch"

export default function UseFetchData() {

    const [currenpost , setCurrentPost] = useState(1);   
    //const postTitle = useFetchTitle();
    //const {data} = useFetch("https://jsonplaceholder.typicode.com/todos/" + currenpost);
    const {data , loading} = useFetch(`https://jsonplaceholder.typicode.com/todos/${currenpost}`)
    
    if(loading){
        return <div>
            <center>
                <h1>Loading..</h1>
            </center>
        </div>
    }


    return (
        <>
            <h3>{JSON.stringify(data)}</h3>
            <button onClick={()=>{
                setCurrentPost(x => x+1)
            }}>post number {currenpost}</button>
        </>
    )
}



