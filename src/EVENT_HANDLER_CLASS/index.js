import React, { Component } from 'react'

export default class EVENT_HANDLER_CLASS extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         changedValue : ""
      }
    }

    handleOnChange = (e) => {
       this.setState({
        changedValue : e.target.value
       }, () =>{
        console.log(e.target.value)
       })
    }

  render() {
    return (
      <div>
        <input type='text' onChange={this.handleOnChange}/>
        <p className='changevalue' >{this.state.changedValue}</p>
      </div>
    )
  }
}
