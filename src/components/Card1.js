// import React from 'react'

// function Card1(props) {
//   return (
//     <>
//     <h3>{props.name}</h3>
//     <p>{props.desc}</p>
//     </>
//   )
// }

// export default Card1


import React, { Component } from 'react'

function CardComponent1 (props){
    return(
        <div>
        <h3>{props.name}</h3>
        <p>{props.desc}</p>
      </div>
    )
}

export default class Card1 extends Component {
  render() {
    return (
      <CardComponent1 name="card component1" desc="this is card1"/>
    )
  }
}

