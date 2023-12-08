import React, { useRef } from 'react';


const FunctionUseRef = () => {

    const userNameRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = (event) => {
      event.preventDefault();
      const username = userNameRef.current.value;
      const password = passwordRef.current.value;
      console.log(username, password);
    }; 

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='userName'>User Name:</label>
            <input type='text' id='userName' ref={userNameRef}/>
        </div>
        <div>
            <label htmlFor='userPass'>User Password:</label>
            <input type='password' id='userPass' ref={passwordRef}/>
        </div>
        <button type='submit'>Register</button>
    </form>
  )
}

export default FunctionUseRef;