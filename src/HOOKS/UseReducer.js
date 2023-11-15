import React, { useReducer, useState } from 'react';
import Reducer from './Reducer';

const bookData = [
  {id: 1, name: "parher panchal"},
  {id: 2, name: "padma nadir majhi"},
  {id: 3, name: "srikanto"},
];

const Modal = ({modalText}) => {
  return <p>{modalText}</p>
};

const InitialState = {
  books: bookData,
  isModalOpen : false,
  modalText: ""
};

const UseReducer = () => {

  const [bookState, dispatch] = useReducer(Reducer, InitialState);

  const [bookName, setBookName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
       const newBook = {id: new Date().getTime().toString(), name: bookName};
       dispatch({type: "ADD", payload: newBook});
       setBookName("");
  };

  const removeBook = (id) => {
    dispatch({type: "REMOVE", payload: id})
  };

  return (
    <div>
      <h3>Book List</h3>

      <form onSubmit={handleSubmit}>
        <input type='text' value={bookName} onChange={(e) => {
          setBookName(e.target.value);
        }}/>
        <button type='submit'>Add Book</button>
      </form>

      {bookState.isModalOpen && <Modal modalText={bookState.modalText}/>}

      {bookState.books.map((book) => {
        const {id, name} = book;
        return <li key={id}>
          {name} <button onClick={() => {removeBook(id)}}>Remove</button>
        </li>
      })}
    </div>
  )
};

export default UseReducer;