import React, { useState } from 'react';
import { useUsersContext } from './useUsersContext';
import "bootstrap/dist/css/bootstrap.min.css";

const NewUser = () => {
    
    //Hooks
    const {setUsers} = useUsersContext();
    const [username, setUsername ] = useState("");
    const [email, setEmail ] = useState("");

    //Event Handler
    const handleUserNameChange = (event) => {
        setUsername(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const addUser = {id: new Date().getTime().toString(), username: username, email: email};
        setUsers((prevUsers) => [...prevUsers, addUser]);
        setUsername("");
        setEmail("");
    };

  return (
    <div className='container'>
        <h2>User Registration:</h2>
        <form className='container' onSubmit={handleSubmit}>
           <input className='form-control my-1' type='text' name='username' value={username} onChange={handleUserNameChange} required/>

           <input className='form-control' type='email' name='email' value={email} onChange={handleEmailChange} required/>
           <button className='btn btn-success my-2' type='submit'>Add User</button>
        </form>
    </div>
  )
};

export default NewUser;