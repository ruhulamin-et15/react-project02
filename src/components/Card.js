import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Data from './data.json';
// import { FaBeer } from 'react-icons/fa';

const todoTitle = "Call Family"
const todoDesc = "Lorem ipsum dolor sit, amet consectetur dfhg sfgf deleniti?"
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const yearName = date.getFullYear();

function CardComponent (props){
  const {todoTitle, todoDesc} = props;
  return (
      <div className='card'>
      <h1 className='cardTitle'>{todoTitle}</h1>
      <p className='cardDesc'>{todoDesc}</p>
      <p className='cardDate'>{dateName + "/" + monthName + "/" + yearName}</p>
      </div>
  )
}


export default function Card() {
  return (
    <>

    {Data.map((item) => <CardComponent key={uuidv4()} todoTitle={item.title} todoDesc={item.desc}/> )}

    </>
  )
}










  
  