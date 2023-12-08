import React from "react";
import useFetch from "./useFetch";

const DataFetch = () => {
  const { data, isloading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  const loadingMessage = <p>Todos is loading</p>;
  const errorMessage = <p>{error}</p>;
  const todosElement =
    data &&
    data.map((todo) => {
      return (
        <div key={todo.id}>
          <p>{todo.title}</p>
        </div>
      );
    });

  return (
    <div>
      {isloading && loadingMessage}
      {error && errorMessage}
      {todosElement}
    </div>
  );
};

export default DataFetch;
