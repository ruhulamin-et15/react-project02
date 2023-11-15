import React from 'react';
import { v4 as uuidv4 } from 'uuid';


const user = [
  {
    id: uuidv4,
    fullName : "Ruhul Amin",
    age : 26,
    phones : [
      {
        home : "01762717397",
        office : "8457894357"
      }
    ]
  },
  {
    id: uuidv4,
    fullName : "Armina Sathy",
    age : 20,
    phones : [
      {
        home : "01762717398",
        office : "8457894358"
      }
    ]
  },
]

function Nested() {
  return (
    <>
    <h1>Nested</h1>
    { 
      user.map((user, id) => <article key={id}>
        <h3>Name: {user.fullName}</h3>
        <p>Age: {user.age}</p>
        {
          user.phones.map((phone, id) => <div key={id}>
            <p>Home : {phone.home}</p>
            <p>Office : {phone.office}</p>
          </div>)
        }
      </article>)
    }
    </>
  )
}

export default Nested;
