import axios from "axios";
import { useEffect, useState } from "react";

export default function useContent(){
    const [contents , setContents] = useState([]);

    function refresh(){
        // axios.get("http://localhost:2560/api/v1/content",{
        //     headers :{
        //         "Authorization" : localStorage.getItem("token")
        //     }
        // })
        axios.get("https://mybrain-backend-h8my.onrender.com/api/v1/content",{
            headers:{
                "Authorization":localStorage.getItem("token")
            }
        })
        .then((response)=>{
            setContents(response.data.userContent)
        })
    }

    useEffect(()=>{
        refresh()
        let interval = setInterval(()=>{
            refresh()
        },10000)

        return ()=>{
            clearInterval(interval)
            // clearInterval(interval)
        }
    },[])

    return contents;
}