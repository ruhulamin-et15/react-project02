import React from 'react';
import Todo from './Todo';
import NewTodo from './NewTodo';


//parent
const Listing = () => {
    const handleNewTodo = (newTodo) => {
        console.log(newTodo);
    }

  return (
    <div>
        <Todo title="learn react.js"/>
        <NewTodo onHandleNewTodo={handleNewTodo}/>
    </div>
  )
}

export default Listing;