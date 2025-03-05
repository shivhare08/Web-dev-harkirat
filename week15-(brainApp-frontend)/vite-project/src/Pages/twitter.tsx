import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import useContent from "../hooks/useContent";

export default function Twitter() {
    const contents = useContent();
    const navigate = useNavigate();

    function back(){
        navigate("/dashboard")
    }
    return (
        <>
            <div className="w-full min-h-screen bg-purple-900 pb-10">
                {/* <div className="flex">

                </div> */}
                <p className="text-2xl text-center font-semibold pt-11 text-white">My Twitter contents</p>
                
                <p onClick={back} className="text-2xl flex justify-center font-bold text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 s">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                    </svg>
                </p>

                <div className="flex justify-center">
                    <div className="flex gap-2 flex-wrap justify-center">
                        {contents.map(({ type, link, title }) => (type === "twitter") && <Card type={type} link={link} title={title} />)}
                    </div>
                </div>
            </div>
        </>
    )
}