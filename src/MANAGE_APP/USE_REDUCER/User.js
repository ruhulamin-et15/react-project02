import React from "react";
import { useUsersContext } from "./useUsersContext";
import "bootstrap/dist/css/bootstrap.min.css";

const User = ({user}) => {
    const {deleteUser} = useUsersContext();
    const {id, username, email} = user;
    
    const handleDelete = (id) => {
      deleteUser(id)
    };
  
  return (
    <article className='user'>
        <h5>Name: {username}</h5>
        <h7>Email: {email}</h7>
        <p>ID: {id}</p>
        <button className="btn btn-danger" onClick={() => {handleDelete(id)}}>Delete</button>
    </article>
  )
  };
  
  export default User;