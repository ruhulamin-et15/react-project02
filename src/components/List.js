import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const todos = [
    {
        id: uuidv4(),
        title : "todo1",
        desc : "todo description 1"
    },
    {
        id: uuidv4(),
        title : "todo2",
        desc : "todo description 2"
    },
    {
        id: uuidv4(),
        title : "todo3",
        desc : "todo description 3"
    }
]

function List() {
  return (
    <>
        {todos.map((todo) => {
            const {id, desc, title} = todo
            return <div key={id}>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        })}
    </>
  )
}

export default List