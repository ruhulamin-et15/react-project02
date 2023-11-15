import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toastify = () => {
    const handleAddTodo= () => {
        toast("New Todo Added");
    }
    const handleDeleteTodo= () => {
        toast("Todo Deleted");
    }

  return (
    <div>
        <h2>Todo App</h2>
        <button onClick={handleAddTodo}>Add New Todo</button>
        <button onClick={handleDeleteTodo}>Add New Todo</button>
        <ToastContainer/>
    </div>
  )
}

export default Toastify