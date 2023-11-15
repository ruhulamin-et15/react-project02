import React from 'react'


//child
const NewTodo = (props) => {
    props.onHandleNewTodo({title : "i am new todo"})
  return (
    <div>NewTodo</div>
  )
}

export default NewTodo;