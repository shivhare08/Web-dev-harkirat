// export const Button =({disabled , children , onClick})=>{
//     return(
//         <>
//         <div className="flex justify-center">
//             <span onClick={onClick} className={`mt-2 py-3 cursor-pointer px-28 rounded-lg ${disabled ?"bg-blue-100 text-white":"bg-blue-300 text-white " }`}>
//                 {children}
//             </span>
//         </div>
//         </>
//     )
// }


export const Button = ({ disabled, children }) => {
    return (
        <>
            <span className={`mt-2 py-3 cursor-pointer px-28 rounded-lg ${disabled ? "bg-blue-100 text-white" : "bg-blue-300 text-white "}`}>
                {children}
            </span>
        </>
    )
}