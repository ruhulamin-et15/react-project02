import React, { useState } from 'react';
import useFetch from './useFetch';

const DataFetch = () => {
    const {data, isloading, error} = useFetch("https://jsonplaceholder.typicode.com/todos");

    const loadingMessage = <p>Todos is loading</p>;
    const loadingError = <p>{error}</p>
    const todosElement = data && data.map((todo) => {
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