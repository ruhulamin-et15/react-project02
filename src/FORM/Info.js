import React from 'react';
import style from './info.module.css';

const Info = (props) => {
  const { name, phone, mail} = props.info;
  const {id} = props;
  const handleClick = (id) => {
    props.onRemoveTodo(id);
}
  return (
    <article className={style.info}>
    
      <div className={style.input}>
       <h5 style={{marginLeft:"140px"}}>Your Info:</h5>
       <p>Name: {name}</p>
       <p>Phone: {phone}</p>
       <p>Mail: {mail}</p>
      
      </div>
      <div>
       <button style={{marginLeft:"160px"}} className={style.btn} onClick={() => {handleClick(id)}}>
                <i className='fa fa-trash fa-2x' ></i>
       </button>
      </div>
    </article>
  )
}

export default Info;