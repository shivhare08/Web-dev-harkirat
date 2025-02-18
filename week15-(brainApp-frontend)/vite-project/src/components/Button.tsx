import { ReactElement } from "react"
// type variantType = "primary" | "secondry";

interface ButtonProps{
    //variant : variantType,
    variant : "primary" | "secondry"
    size : "sm" | "md" | "lg",
    text : string,
    startIcon? : any,
    endIcon? : ReactElement,
    onClick : ()=> void
}

const variantStyles = {
    "primary" : "bg-purple-600 text-white",
    "secondry" : "bg-purple-300 text-purple-600"
}

const sizeStyle = {
    "sm" : "sm px-8 py-2",
    "md" : "md px-10 py-3 text-md",
    "lg" : "lg px-12 py-5",
}

const defaultSize = "rounded-md"
// export const Button =()=>{
//     return <button></button>
// } 

export default function Button(props : ButtonProps){
    return(
        <button className={`${variantStyles[props.variant]} transition duration-500 hover:scale-105 ${defaultSize} ${sizeStyle[props.size]}`}>
            <div className="flex">
                {props.startIcon?<p className="pr-1 pt-1">{props.startIcon}</p>:null}<p> {props.text}</p>
            </div>
        </button>
    )
}
