import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
  return (
    <div className="p-4 border border-gray-200 rounded-md shadow-sm bg-white">
  <h4 className="text-lg font-semibold mb-2">{todo.title}</h4>
  <p className="text-gray-700 mb-4">{todo.desc}</p>
  <div className="flex space-x-2">
    <button
      className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
    >
      Done
    </button>
    <button
      className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
      onClick={() => onDelete(todo)}
    >
      Delete
    </button>
  </div>
</div>

  )
}


