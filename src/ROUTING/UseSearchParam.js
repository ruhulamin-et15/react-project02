import React from 'react';
import {  useSearchParams } from 'react-router-dom';

const UseSearchParam = () => {
    const [searchparam] = useSearchParams();

  return (
    <div>
        <h2>User</h2>
        <h2>{searchparam.get("id")}</h2>
        <h2>{searchparam.get("age")}</h2>
        <h2>{searchparam.get("name")}</h2>
    </div>
  )
}

export default UseSearchParam;