import React, { Component } from 'react'

class Changevalue extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "Armina Sathy",
            age: 21,
            prof: "Marketing"
        }
    }
    ChangeValue(a){
      this.setState(
        {
          prof: "Web Development"
        }
      )
    }
    ChangeMind = this.ChangeValue.bind(this, this.a)
    
    render() {
    return (
      <>
        <h1>my profesion is {this.state.prof}</h1>
        <button onClick={this.ChangeMind}>Change Value</button>
      </>
    )
  }
}

export default Changevalue;