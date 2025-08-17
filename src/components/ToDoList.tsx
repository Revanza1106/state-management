import React,{useContext} from "react"
import {Context as TodoContext} from '../context/TodoContext'
import { deleteTodo } from "../actions/TodoAction"

const ToDoList:React.FC = () => {
    const {state:{todos},dispatch} = useContext(TodoContext)
    const handleDelete = (id:string) => dispatch(deleteTodo(id))
    return(
        <ul>
            {todos.map((item) => (
            <li key={item.id}>{item.name}-<button onClick={() => handleDelete(item.id)}>delete</button></li>
            ))}
        </ul>   
    )
}



export default  ToDoList