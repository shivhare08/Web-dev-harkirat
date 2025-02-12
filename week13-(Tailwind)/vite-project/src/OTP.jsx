import { useState } from "react";

export const OTP =({reference , onDone , onBack })=>{
    const [inputvalue , setInputvalue] = useState("");
    return(
        <>
            <input value={inputvalue} ref={reference} onKeyUp={(anything)=>{
                if(anything.key == "Backspace"){
                    onBack();
                    setInputvalue("")
                }
            }} onChange={(e)=>{
                const value = e.target.value;

                if(value == "1" || value == "2" || value == "3" || value == "4" || value == "5" || value == "6"){
                    setInputvalue(value);
                    onDone();
                }

            }} placeholder="" type="text" className="bg-blue-400 outline-none text-white pl-4 ml-1 w-10 h-10 rounded"/>
        </>
    )
}