import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(null);
  const [newText, setNewText] = useState("");

  const handleEditClick = (todo) => {
    setIsEditing(todo.id);
    setNewText(todo.text); // Populate the input with the current text
  };

  const handleUpdateTodo = () => {
    if (newText.trim() !== "") {
      dispatch(updateTodo({ id: isEditing, text: newText })); // Dispatch the update with newText
      setIsEditing(null);
      setNewText(""); // Clear the text field after update
    }
  };

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className="text-white">
              {isEditing === todo.id ? (
                <input
                  type="text"
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                  className="bg-gray-800 text-white px-2 py-1 rounded"
                />
              ) : (
                todo.text
              )}
            </div>
            <div className="flex space-x-2">
              {isEditing === todo.id ? (
                <button
                  onClick={handleUpdateTodo} // Update todo with the new text
                  className="text-white bg-green-500 py-1 px-4 rounded"
                >
                  Update
                </button>
              ) : (
                <button
                  onClick={() => handleEditClick(todo)} // Trigger editing mode
                  className="text-white bg-blue-500 py-1 px-4 rounded"
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 py-1 px-4 rounded"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
