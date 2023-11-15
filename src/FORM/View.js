import React from 'react';
import style from './view.module.css';
import Info from './Info';

const View = (props) => {

  return (
    <section className={style.view}>
      <h3>Informations:</h3>
      {props.view.map((info) => 
        <Info info={info.info} key={info.id} id={info.id} onRemoveTodo={props.onRemoveInfo}/>)}
    </section>
    
  )
}

export default View;