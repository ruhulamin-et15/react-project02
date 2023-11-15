import React from 'react'
import {NavLink} from 'react-router-dom';



function Navbar() {
  return (

    
      <div class='container bg-primary row py-2 shadow m-auto'>
      <div className='col-md-2 mt-1'>
         <button class="btn btn-dark" type="button">Ruhul Amin</button>
      </div>   
               
      <div className='col-md-7 d-flex'>
         <ul className='nav nav-pill'>
          <li className='nav-item active'>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to="/about">About</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to="/sponsor">Sponsor</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to="/contact">Contact</NavLink>
          </li>
         </ul>
       </div>


      <div className='col-md-3 mt-1 px-3'>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search Here" aria-label="Search"/>
          <button class="btn btn-dark" type="submit">Search</button>
        </form>
      </div> 
    </div>
  




    
  )
}

export default Navbar;