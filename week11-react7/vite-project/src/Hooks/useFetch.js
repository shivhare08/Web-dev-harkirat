import { useEffect, useState } from "react";

export function useFetchTitle(){
    const [posts , setTitle] = useState({});

    async function getPostTitle(){
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/10");
        
        const json = await response.json();
        setTitle(json);
    }

    useEffect(()=>{
        getPostTitle();
    },[])

    return posts.title
}


//ye function return krrha h data and loading koooooo
//or ye fun url as a parameter accept krrha h
export function useFetch(url){
    //console.log(url);
    
    const [data , setData] = useState({});
    const [loading , setLoading] = useState(true);

    async function getData(){
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setLoading(false);
    }
    useEffect(()=>{
        getData();
    },[url])

    return {
        data , loading
    }
}


