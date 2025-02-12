import { createContext, useContext } from "react"

const Contextcreate = createContext();


export default function ContextApi1(){
    
    
    return(
        <Contextcreate.Provider value={{
            totalRoom: 10,
            totalStaff:25,
            Name:"Shri Ram"
        }}>
            <Hotel/>
        </Contextcreate.Provider>
    )
}

function Hotel(){
    const {Name , totalRoom} = useContext(Contextcreate);

    return(
        <>
            {Name}
            <h1>{totalRoom}</h1>
        </>
    )
}