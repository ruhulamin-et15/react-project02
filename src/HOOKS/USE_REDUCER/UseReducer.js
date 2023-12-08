import React, { useReducer, useState } from "react";
import Reducer from "./Reducer";

const bookData = [
  { id: 1, name: "parher panchal" },
  { id: 2, name: "padma nadir majhi" },
  { id: 3, name: "srikanto" },
];

const Modal = ({ modalText }) => {
  return <p>{modalText}</p>;
};

const InitialState = {
  books: bookData,
  isModalOpen: false,
  modalText: "",
};

const UseReducer = () => {
  const [bookState, dispatch] = useReducer(Reducer, InitialState);
  const [bookName, setBookName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookName("");
    const newBook = { id: new Date().getTime().toString(), name: bookName };
    dispatch({ type: "ADD", payload: newBook });
  };

  const removeBook = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  return (
    <div>
      <h3>Book List</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={bookName}
          onChange={(e) => {
            setBookName(e.target.value);
          }}
          required
        />
        <button type="submit" className="btn btn-success m-2">
          Add Book
        </button>
      </form>

      {bookState.isModalOpen && <Modal modalText={bookState.modalText} />}

      <ol>
        {bookState.books.map((book) => {
          const { id, name } = book;
          return (
            <li key={id}>
              {name}
              <button
                className="btn btn-danger m-2"
                onClick={() => {
                  removeBook(id);
                }}
              >
                Remove
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default UseReducer;
