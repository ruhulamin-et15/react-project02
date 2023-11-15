import React, { Component } from 'react'

export default class EVENT_BUBLING extends Component {
  render() {
    const handleClick = (event) => {
        event.stopPropagation();
        console.log("child event", event)
    }
    const handleClick2 = (event) => {
        console.log("parent event", event)
    }
    return (
      <div className='parent' onClick={handleClick2}>
        <h3>Welcome Everyone</h3>
        <button onClick={handleClick}>Click</button>
      </div>
    )
  }
}
