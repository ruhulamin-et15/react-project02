import React, { Component } from 'react';

export default class EVENT_BINDING extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
      this.handleClick = this.handleClick.bind(this)
    }

    handleClick () {
        this.setState({
           count: this.state.count + 1
        })
    }
    
  render() {
    return (
      <div>
        <h3>{this.state.count}</h3>
        <button onClick={this.handleClick}>Increase</button>
      </div>
    )
  }
}
