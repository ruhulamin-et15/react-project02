import React, { Component } from 'react'

class Reactpart5 extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "Ruhul Amin",
      age: 27,
      pro: "Web Development"
    }
  }
  render() {
    return (
      <>
        <h1>my name is {this.state.name} my age is {this.state.age} my profesion is {this.state.pro}</h1>
      </>
    )
  }
}

export default Reactpart5;