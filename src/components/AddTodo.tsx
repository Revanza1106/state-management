import React, { useContext, useState } from "react";
import {Context as TodoContext} from '../context/TodoContext'
import { addTodo } from "../actions/TodoAction";


const AddTodo:React.FC = () => {
    const {dispatch} = useContext(TodoContext)
    const [name,setName] = useState('')


    const handleAdd = () => {
        if(!name.trim()){
            return
        }
        
        dispatch(
            addTodo({
                id:Date.now().toString(),
                name,
                active:true
            })
        )

        setName("")
    }

    return(
        <form>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <button type="button" onClick={handleAdd}>
                add
            </button>
        </form>
    )
}

export default AddTodo