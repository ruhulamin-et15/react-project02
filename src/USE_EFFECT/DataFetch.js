import React, { useEffect, useState } from 'react'

const loadingMessage = <p>Todos is loading</p>;
const DataFetch = () => {

    const [todos, setTodos] = useState(null);
    const [isloading, setIsloading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => {
           if(!res.ok){
               throw Error("fetching is not successful")
           }
           return res.json()
       })
        .then((data) => {
           setTodos(data);
           setIsloading(false);
           setError(null);
       })
       .catch((error) => {
           setError(error.message);
           setIsloading(false);
       })
    },[]);

    const loadingError = <p>{error}</p>
    const todosElement = todos && todos.map((todo) => {
        return  <p key={todo.id}>{todo.title}</p>;
    });
    
  return (
    <div>
        <h3>Todos</h3>
        {isloading && loadingMessage}
        {error && loadingError}
        {todosElement}
    </div>
  )
};

export default DataFetch;