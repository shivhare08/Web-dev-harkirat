import { createContext, useContext, useState } from "react"

const contextcreate = createContext();

function ContextApi(){
    const [count , setCount] = useState(0)
    return(
        <>
            <contextcreate.Provider value={{
                name:"shashank",
                surname : "shivhare",
                course : "MCA"
            }}>
                <ComponentOne></ComponentOne>    
            </contextcreate.Provider>  

            <contextcreate.Provider value={{
                name : "ajay",
                surname:"rajput",
                course : "MCA"
            }}>
                <ComponentTwo></ComponentTwo>
            </contextcreate.Provider>

            
        </>
    )
}

function ComponentOne(){
    const {name , course} = useContext(contextcreate)
    return(
        <>
            <h2>{name}  {course}</h2>
        </>
    )
}

function ComponentTwo(){
    const {name , course} = useContext(contextcreate)
    return(
        <>
            <h2>{name}  {course}</h2>
        </>
    )
}

export default ContextApi