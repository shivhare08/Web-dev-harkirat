import {atomFamily} from "recoil"
import { todos } from "./todo"


//yha pr parameter ke hisab se new atom ki trha horah...vrna srf atom ki single default value hi leskta thaa...
export const todosatomfamily = atomFamily({
    key : "todosatomfamily",
    default : (id) =>{
        return todos.find((x) => x.id === id)
    }
})