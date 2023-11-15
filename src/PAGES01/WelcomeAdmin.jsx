import React, { Component } from 'react'
import Fiter from './Fiter';

class WelcomeAdmin extends Component {
    constructor (props){
        super(props)
        this.state = {
            YourAge:true,
        }
    }
  render() {
    let ami 
    if(this.state.YourAge){
        ami = "Welcome to Programing";
    }else{
        ami = <Fiter/>
    }
    return (
      <> <br />
      <h1>{ami}</h1>
      </>
    )
  }
}

export default WelcomeAdmin; 