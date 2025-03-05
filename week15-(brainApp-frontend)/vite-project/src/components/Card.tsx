import axios from "axios";
import { DeleteIcon } from "../icons/Delete";
import { ShareIcon } from "../icons/Share";
import { Tweetsicon } from "../icons/Tweet";
import { Videoicon } from "../icons/Videoicon";

interface CardProps{
    title : string,
    type : "twitter" | "youtube",
    link : string
}

export default function Card({title , type , link} : CardProps){
    return <div className="bg-white rounded-md border shadow-md max-w-80 min-h-44 min-w-80 p-5 mt-5">
                <div className="flex justify-between">
                    <div className="flex items-center ">
                        <span className="text-gray-600">
                            {type==="youtube" && <Videoicon />}
                            {type==="twitter" && <Tweetsicon />}
                        </span>
                        <span className="px-1">
                            {title}
                        </span>
                    </div>                    

                    <div className="flex items-center text-gray-600">
                        <span>
                            <a href={link}><ShareIcon/></a>
                        </span>
                        <span onClick={async ()=>{
                            // await axios.delete("http://localhost:2560/api/v1/content",{
                            //     headers:{
                            //         "Authorization" : localStorage.getItem("token")
                            //     }
                            // });
                            await axios.delete("https://mybrain-backend-h8my.onrender.com/api/v1/content",{
                                headers:{
                                    "Authorization" : localStorage.getItem("token")
                                }
                            });
                        }} className="pl-1"><DeleteIcon/></span>                        
                    </div>
                </div>
                <div className="pt-3">
                    {type==="youtube" && <iframe className="w-full rounded-md" src={link.replace("watch","embed").replace("?v=","/")} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>}
                    {type==="twitter" && <blockquote className="twitter-tweet">
                    <a href={link.replace("x.com", "twitter.com")}></a> 
                    </blockquote>}
                </div>
            </div>    
}