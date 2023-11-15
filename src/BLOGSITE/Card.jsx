import React from 'react'
import "./Card.css"

export default function Card(props) {
  return (
    <div className='container m-auto mt-2'>
        <div className="card">
                <img src={props.img} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 className='card-title'>{props.title}</h5>
                <p className="card-text">{props.p}</p>
                <a href={props.link} className='btn btn-info'>{props.BtnName}</a>
            </div>
        </div>
    </div>
  )
}