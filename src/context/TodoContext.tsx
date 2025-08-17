import React,{useReducer} from "react";

import type { TodoState,ContextToDo, CounterAction } from "../interface";


const defaultState: TodoState = {
    todos:[]
}

const reducer = (state:TodoState,action:CounterAction) : TodoState => {
    switch(action.type){
        case "ADD":
            return{
                ...state,
                todos: [...state.todos,action.payload]
            }
        case "DELETE":
            return{
                ...state,
                todos: state.todos.filter((item) => item.id !== action.payload)
            }
        default:
            return state
    }
}  

export const Context = React.createContext({} as ContextToDo);

export const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state,dispatch] = useReducer(reducer,defaultState)

    return(
        <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
    )
}


