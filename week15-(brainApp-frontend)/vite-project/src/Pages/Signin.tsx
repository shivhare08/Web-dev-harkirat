import axios from "axios";
import { useRef } from "react"
import { useNavigate } from "react-router-dom";

export default function Signin() {
    const usernameReF = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    async function signinFun(){
        const username = usernameReF.current?.value;
        const password = passwordRef.current?.value;

        const response = await axios.post("http://localhost:2560/api/v1/signin",{
            username,
            password
        })

        const token = response.data.token;
        localStorage.setItem("token",token)
        navigate("/dashboard")

        
        // localStorage.setItem("token",jwt)    //token name se token save hojayega browser pr
        //user can now redirect the dashboard

    }
    return (
        <div className="w-screen h-screen bg-purple-800">
            <p className="pt-20 items-center flex justify-center">
                <p className="text-3xl text-center text-white font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>
                </p>
                <p className="text-3xl text-center text-white font-bold pl-1">
                    Your Brain
                </p>
            </p>
            <div className="flex justify-center mt-16">
                <div className="flex flex-col justify-center">
                    <div className="w-80 h-56 bg-white rounded-md">
                        <p className="text-center font-semibold text-purple-800 text-xl mt-4 underline">Sign-in</p>

                        <div className="mt-3 px-4">
                            <Input reference={usernameReF} placeholder={"Username"} type={"text"} />
                            <Input reference={passwordRef} placeholder={"Password"} type={"password"} />
                            <Button onClickFun={signinFun}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



function Input({ type , placeholder, reference }: any) {
    return (
        <>
            <div>
                <input ref={reference} placeholder={placeholder} type={type} className="p-2 mt-2 w-full border rounded-md border-1" ></input>
            </div>
        </>
    )
}

interface signinInterface{
    onClickFun : ()=>void
}

function Button(signinFun : signinInterface) {
    return (
        <>
            <button onClick={signinFun.onClickFun} className="bg-purple-800 py-2 w-full mt-2 text-white rounded">Signin</button>
        </>
    )
}