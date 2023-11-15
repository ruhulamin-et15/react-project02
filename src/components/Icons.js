import React, { Component } from 'react'
import { FaFacebook, FaYoutube, FaGoogle} from 'react-icons/fa';

export default class Icons extends Component {
  render() {
    return (
      <div>
        <span><FaFacebook className='icon' /></span>
        <span><FaYoutube className='icon'/></span>
        <span><FaGoogle className='icon'/></span>

      </div>
    )
  }
}
