import { useRef, useState } from "react";
import { Plusicon } from "../icons/Plusicon";
import axios from "axios";
import Button from "./Button";
import { CrossIcon } from "../icons/CrossIcon";

//by enum the person can put any thing in useState, only either youtube and twitter can be written...
enum contenteType {
    Youtube = "youtube",
    Twitter = "twitter" 
}

//controlled component
export default function CreateContentCreator({ open, onClose }: any) {
    const titleref = useRef<HTMLInputElement>(null);
    const linkref = useRef<HTMLInputElement>(null);
    const [type , setType] = useState(contenteType.Twitter)

    
    async function AddContent(){
        const title = titleref.current?.value;
        const link = linkref.current?.value;
        // const typeOFcontent = type

        try{
            await axios.post("http://localhost:2560/api/v1/content",{
                title,
                link,
                type
            },{
                headers : {
                    "Authorization" : localStorage.getItem("token") //headers me authorization me token drha middleware me
                }
            })
        }catch(error){
            console.log(error);
        }
    }

    return <div className="">
        {(open) && <div className="w-full flex justify-center h-full opacity-90 fixed bg-black">
            <div className="flex flex-col justify-center min-w-80">
                <span className="bg-white p-4 rounded-md">
                    <div className="flex justify-between items-center">
                        <p className="text-xl font-medium text-gray-800">Your brain</p>
                        <div onClick={onClose} className="cursor-pointer">
                            <CrossIcon size="md" />
                        </div>
                    </div>
                    <div className="">
                        <Input type="text" reference={titleref} placeholder={"Title"} />
                        <Input type="text" reference={linkref} placeholder={"Link"} />
                        <h1 className="font-semibold text-purple-700 mt-3 text-lg">Type</h1>
                        <div className="flex justify-evenly gap-2 p-2">
                            {/* <Button text="youtube" variant="youtubeColor" size="md" width="w-full"/>
                            <Button text="twitter" variant="dark" size="md" width="w-full"/> */}
                            <Button onClick={()=>{
                                setType(contenteType.Youtube)
                            }} text="youtube" variant={type === contenteType.Youtube? "primary" : "secondry"} size="md" width="w-full"/>
                            
                            <Button onClick={()=>{
                                setType(contenteType.Twitter)
                            }} text="twitter" variant={type === contenteType.Twitter? "primary" : "secondry"} size="md" width="w-full"/>
                        </div>
                        <ButtonLocal onClickFun={AddContent}/>
                    </div>
                </span>
            </div>
        </div>}
    </div>
}


interface InputProps {
    placeholder:string,
    type : string,
    reference : any
}

function Input({ placeholder, reference , type }: InputProps) {
    return (
        <>
            <div>
                <input  ref={reference} placeholder={placeholder} type={type} className="px-4 w-full mt-2 py-2 border rounded-md border-1"></input>
            </div>
        </>
    )
}

interface Add{
    onClickFun?: ()=>void
}
function ButtonLocal(AddClick : Add) {
    return (
        <>
            <button onClick={AddClick.onClickFun} className="bg-purple-700 py-2 w-full mt-1 text-white rounded">submit</button>
        </>
    )
}