import React, { Component } from 'react'

class Form extends Component {
   state={
    ChannelName:"",
    Subscriber:"",
    CreationDate:"",
    About:"",

  }
    FormChange = (event)=> {
        this.setState({
          [event.target.name]: event.target.value
        })
    }
    CheckBoxHandler = (event)=> {
      this.setState({
        Checkbox: event.target.checked
      })
    }
  render() {
    const {ChannelName,Subscriber,Category,CreationDate,About} = this.state
    return (
    <div className='container'>
        <input type="text" name='ChannelName' placeholder='Channel Name' className='form-control' value={ChannelName} onChange={this.FormChange} />
        <input type="text" name='Subscriber' placeholder='Subscriber' className='form-control' value={Subscriber} onChange={this.FormChange} />

        <select name="Category" className="form-control" value={Category} onChange={this.FormChange}>
          <option value="Select">Select</option>
          <option value="Programing">Programing</option>
          <option value="Funny">Funny</option>
          <option value="Education">Education</option>
          <option value="Entertainment">Entertainment</option>
        </select>

        <input type="date" name="CreationDate"  className='form-control' value={CreationDate} onChange={this.FormChange} />

        <textarea name="About" className='form-control' value={About} onChange={this.FormChange} >About Your Self</textarea>

        <input type="radio" name='Gender' value="Male" onChange={this.FormChange} />
        <label htmlFor="Gender">Male</label>
        <input type="radio" name='Gender' value="Female" onChange={this.FormChange} />
        <label htmlFor="Gender">Female</label>

        <input type="checkbox" name='checkbox' onChange={this.CheckBoxHandler} />

        <button className='btn btn-primary' onClick={()=> console.log(this.state)} >Submit</button>


    </div>
    )
  }
}

export default Form;