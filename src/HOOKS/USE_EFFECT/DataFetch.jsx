import React, { useEffect, useState } from "react";
import "./DataFetch.css";

const DataFetch = () => {
  const [todos, setTodos] = useState(null);
  const [isloading, setIsloading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todo")
      .then((res) => {
        if (!res.ok) {
          throw Error("Sorry, server error!");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setTodos(data);
        setIsloading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setIsloading(false);
      });
  }, []);

  const loadingMessage = (
    <div class="center">
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
    </div>
  );

  const todosElement =
    todos &&
    todos.map((todo) => {
      return <p key={todo.id}>{todo.title}</p>;
    });

  return (
    <div>
      {isloading && loadingMessage}
      {error && (
        <div className="d-flex flex-column justify-content-center align-items-center bg-danger py-3">
          <p className="text-center">{error}</p>
          <a href="/">
            <button className="btn btn-primary">Go Back</button>
          </a>
        </div>
      )}
      {todosElement}
    </div>
  );
};

export default DataFetch;
