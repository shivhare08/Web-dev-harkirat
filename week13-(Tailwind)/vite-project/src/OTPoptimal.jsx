import { Button } from "./components/Button";
import { useRef, useState } from 'react'

export default function OTPoptimal(){
    const ref = useRef([]);
        
    return <div className="flex justify-center">
            {Array(6).fill().map((x , index)=>      //0 se shuru
                <OTP 
                reference={(e)=> ref.current[index] = e} key={index}
                 
                onDone={()=>{
                    if(index+1 == 6){
                        return
                    }
                    ref.current[index + 1].focus()
                }} 
                
                onBack={()=>{
                    if(index-1 < 0){
                        return
                    }
                    ref.current[index -1].focus()
                }}/>
            )}
            <Button disabled={true} children={"verify"}></Button>
        </div>
    
}

function OTP({reference , onDone , onBack }){
    const [inputvalue , setInputvalue] = useState("");
    return(
        <>
            <input ref={reference} value={inputvalue} type="text" className="bg-blue-400 outline-none text-white pl-4 ml-1 w-10 h-10 rounded"
            onKeyUp={(e)=>{
                if(e.key == "Backspace"){
                    setInputvalue("")
                    onBack();
                }
            }} onChange={(e)=>{
                const x = e.target.value;
                if(x == "1" || x == "2" || x == "3" || x == "4" || x == "5" || x == "6" || x == "7" || x == "8"){
                    setInputvalue(x)
                    onDone();
                }
            }}/>
        </>
    )
}