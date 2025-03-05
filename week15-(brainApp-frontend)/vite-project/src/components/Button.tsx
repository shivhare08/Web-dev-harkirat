import { ReactElement } from "react"
// type variantType = "primary" | "secondry";

interface ButtonProps{
    //variant : variantType,
    variant : "primary" | "secondry" | "dark" | "youtubeColor"
    size : "sm" | "md" | "lg",
    text : string,
    startIcon? : any,
    endIcon? : ReactElement,
    onClick ?: ()=> void,
    width?:string,
    textPosition? : string
}

const variantStyles = {
    "primary" : "bg-purple-600 text-white",
    "secondry" : "bg-purple-300 text-purple-600",
    "dark" : "bg-black text-white",
    "youtubeColor" : "bg-red-500 text-white"
}

const sizeStyle = {
    "sm" : "sm px-8 py-2",
    "md" : "md px-10 py-3 text-md",
    "lg" : "lg px-12 py-5",
}

const defaultSize = "rounded-md"

export default function Button(props : ButtonProps){
    
    return(
        <button onClick={props.onClick} className={`${variantStyles[props.variant]} ${props.textPosition} ${props.width} transition duration-500  ${defaultSize} ${sizeStyle[props.size]}`}>
            <div className="flex items-center">
                {props.startIcon?<p className="pr-1 pt-1">{props.startIcon}</p>:null}<p> {props.text}</p>
            </div>
        </button>
    )
}
