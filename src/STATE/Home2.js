import React, {useState} from 'react';
import Todos from './Todos';
import NewTodo from './NewTodo';

const dummyTodos = ["todo1", "todo2"];

const Home2 = () => {
  const [todos, setTodos] = useState(dummyTodos);
  const handleTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }
  return (
    <div>
      <NewTodo onTodo={handleTodo}/>
      <Todos todos={todos}/>
    </div>
  )
}

export default Home2;