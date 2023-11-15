import React, {useState} from 'react';
import style from './form.module.css';


export default function FORM_CODE() {

    const [user, setUser] = useState({name: "", email: "", password : ""})
    const {name, email, password} = user

    const handleChange = (e) => {
      setUser({...user, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        console.log(user)
        e.preventDefault()
    }
  return (
    <div>
        <h1 className='ms-2'>Registration</h1>
        <form className={style.formstyle} action="" onSubmit={handleSubmit}>

            <div className={style.formGroup}>
              <label htmlFor='name'>Name: </label>
              <input type='text' name='name'  id='name' value={name} onChange={handleChange} required ></input>
            </div>

            <div className={style.formGroup}>
              <label htmlFor='email'>Email </label>
              <input type='email' name='email' id='email' value={email} onChange={handleChange} required ></input>
            </div>

            <div className={style.formGroup}>
              <label htmlFor='password'>Password </label>
              <input type='password' name='password' id='password' value={password} onChange={handleChange} required ></input>
            </div>

            <div>
              <button type='submit'>Register</button>
            </div>

        </form>
    </div>
  )
}
