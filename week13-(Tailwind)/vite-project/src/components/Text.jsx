export const Text =({placeholder , type , onClick})=>{
    return(
        <>
            <input className="py-2 w-/12 text-white placeholder:text-white px-3 rounded-lg outline-none bg-blue-400" type={type} placeholder={placeholder}/>

            {/* <span className={`text-black cursor-pointer rounded-lg bg-black px-32 `}>
                <input className="py-2 text-white placeholder:text-white px-3 rounded-lg outline-none bg-blue-400" type={type} placeholder={placeholder}/>
            </span> */}
            
        </>
    )
}