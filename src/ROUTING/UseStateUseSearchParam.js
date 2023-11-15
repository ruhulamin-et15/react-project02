import React, { useState } from 'react';
import {  useSearchParams } from 'react-router-dom';

const UseStateUseSearchParam = () => {
    const [setSearchparam] = useSearchParams();
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const handleSubmit = (e) => {
      e.preventDefault();
      setSearchparam({name: name, age: age});
      setName("");
      setAge("");
    }

  return (
    <>
      <h2>User</h2>
      <form onSubmit={handleSubmit}>
      <div>
      <input type='text' value={name} placeholder="Name" onChange={(e) => {setName(e.target.value)}}/>
      </div>
      <div>
      <input type='text' value={age} placeholder="Age" onChange={(e) => {setAge(e.target.value)}}/>
      </div>
      <div>
      <button type='submit'>Find User</button>
      </div>
      </form>
    </>
  )
}

export default UseStateUseSearchParam;