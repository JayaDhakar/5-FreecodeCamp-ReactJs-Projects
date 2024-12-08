import React, { useState } from "react";


export const AddTodo = ({addTodo}) => {
  const [title, setTitle]= useState("");
  const [desc, setDesc] = useState("");
   
  const submit = (e)=>{
    e.preventDefault();
    if(!title || !desc){
        alert("Title or Description cannot be blank")
    }
    else{
    addTodo(title,desc);
    setTitle("");
    setDesc("");
    }
  }
  return (
    <div className="container mx-auto my-3 p-4 bg-white shadow-md rounded">
  <h3 className="text-xl font-bold mb-4">Add a Todo</h3>
  <form onSubmit={submit}>
    <div className="mb-4">
      <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
        Todo Title
      </label>
      <input
        type="text"
        value={title}
        onChange={(e) => { setTitle(e.target.value) }}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        id="title"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="desc" className="block text-sm font-medium text-gray-700 mb-2">
        Todo Description
      </label>
      <input
        type="text"
        value={desc}
        onChange={(e) => { setDesc(e.target.value) }}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        id="desc"
      />
    </div>
    <button
      type="submit"
      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
    >
      Add Todo
    </button>
  </form>
</div>

  );
};
