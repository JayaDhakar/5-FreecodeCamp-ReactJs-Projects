import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
  let myStyle ={
    minHeight:"70vh",
    margin:" 40px auto"
  }
  return (
    <div className="container mx-auto my-3 p-4 bg-white shadow-md rounded" style={myStyle}>
    <h3 className="text-xl font-semibold mb-4">Todos List</h3>
    {props.todos.length === 0 ? (
      <p className="text-gray-500">No Todos Left</p>
    ) : (
      props.todos.map((todo) => (
        <div key={todo.sno}>
          <TodoItem todo={todo} onDelete={props.onDelete} />
          <hr className="my-4 border-gray-300" />
        </div>
      ))
    )}
    {/* <TodoItem todo={props.todos[0]} /> */}
  </div>
  
  )
}

