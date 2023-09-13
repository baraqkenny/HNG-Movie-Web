import React from 'react';
import logo from '../assets/tv.png'
import './Nav.css'

function Nav() {
  return (
    <nav className="nav-container">
      <a href='' className="logo-wrapper">
        <img className='logo-image' src={logo} alt="website-logo" />
        <h3>MovieBox</h3>
    </a>
       
       <div className="searchbox-wrapper">
        <input type="text" 
        placeholder='What do you want to watch?'
        />
       </div>

       <div className='signin-wrapper'>
        <p>Sign in</p>
        <a className='menu-icon'>=</a>
       </div>
   </nav>
  )
}

export default Nav
