import { ReactElement } from "react"

interface itemsProps {
    content?: string,
    size: "sm" | "md" | "lg",
    startIcon?: ReactElement,
    onClick?: ()=>void
}

const sizeStyle = {
    "sm": "text-sm",
    "md": "text-base",
    "lg": "text-lg"
}

const defaultDesign = "text-black p-3"


export default function Sidebarcompitems(props: itemsProps) {
    return (
        <>
            <div className="hover:bg-gray-300 border border-0 rounded transition-all delay-150">
                <div className="">
                    <button onClick={props.onClick} className={`${sizeStyle[props.size]} ${defaultDesign} `}>
                        <div className="flex items-center text-lg text-gray-800">
                            <p>{props.startIcon}</p>
                            <p className="pl-2">{props.content}</p>
                        </div>
                    </button>
                </div>
            </div>
        </>
    )
}