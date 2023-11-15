import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    
  return (
    <div>
        <form>
        <h2>Please Login</h2>
        <div>
        <label htmlFor='username'>User Name:</label>
        <input type='text' />
        </div>
        <div>
        <label htmlFor='password'>Password:</label>
        <input type='password' />
        </div>

        <button onClick={() => {
          navigate("/add_blog")
        }} >Login</button>
        </form>
    </div>
  )
}

export default Login