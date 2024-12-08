
import Header from "./Header";
import { Footer } from "./Footer";
import { Todos } from "./Todos";
import { AddTodo } from "./AddTodo";
import { About } from "./About";
import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import React from 'react'

export default function TodoList() {
    let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("i am ondelete todo", todo);
    // Deleting this way does not work in react
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const addTodo = (title,desc) => {
    console.log(" i am adding this todo", title,desc);
    let sno;
    if (todos.length == 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc:desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (<>
    <div className=" flex justify-center font-bold text-2xl p-3 mb-2 bg-gray-800 text-white" >TODOLIST</div>
      <Header title="MyTodosList" searchBar={true} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
      </> 
  )
}
