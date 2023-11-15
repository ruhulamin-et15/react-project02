import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todos from './Todos';
import NewTodo from './NewTodo';
import style from './home.module.css';


// const dummyTodos = [
//   {
//     id : 1,
//     title : "todo title 1",
//     desc : "todo 1 description is here..."
//   },
//   {
//     id : 2,
//     title : "todo title 1",
//     desc : "todo 1 description is here..."
//   }
// ]


const Home = () => {
  const [todos, setTodos] = useState([]);
  
  const handleAddTodo = (todo) => {
    setTodos((prevTodo) => {
      return [...prevTodo, {id: uuidv4(), todo}]
    })
  };

  const handleRemoveTodo = (id) => {
    setTodos((prevTodos) => {
      const filteredTodos = prevTodos.filter((todo) => todo.id !== id);
      return filteredTodos;
    })
  };

  return (
    <div className={style.container}>
        <h1 style={{color: "white", borderRadius:"5px", marginBottom:"10px"}} >Todo App</h1>
        <NewTodo onAddTodo={handleAddTodo}/>
        <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
    </div>
  )
}

export default Home;