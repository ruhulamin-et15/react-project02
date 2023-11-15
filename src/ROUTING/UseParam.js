import React from 'react';
import { useParams } from 'react-router-dom';

const UseParam = () => {
    const {userid} = useParams();
  return (
    <div>
        <h2>User Params</h2>
        <h3>{userid}</h3>
    </div>
  )
}

export default UseParam;