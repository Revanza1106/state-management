import React from "react";


export interface TodoItem {
    id:string,
    name:string,
    active:boolean,
}

export interface TodoState{
    todos:TodoItem[]
}

export interface ContextToDo{
    state:TodoState,
    dispatch:React.Dispatch<CounterAction>
}

export type CounterAction = | {type: 'ADD',payload: TodoItem} | {type: 'DELETE',payload:string};