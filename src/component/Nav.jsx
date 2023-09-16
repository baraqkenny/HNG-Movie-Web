import { useState} from 'react';
import logo from '../assets/tv.png'


import './Nav.css'

function Nav() {


  return (
    <nav className="nav-container">
      <a href="" className="logo-wrapper">
        <img className="logo-image" src={logo} alt="website-logo" />
        <h3>MovieBox</h3>
      </a>

      <div className="searchbox-wrapper">
        <input
          type="text"
          placeholder="What do you want to watch?"
          
        />
        <i className="bx bx-search"></i>
      </div>

      <div className="signin-wrapper">
        <p>Sign in</p>
        <img src="./Menu.png" alt="menu" />
      </div>
    </nav>
  );
}

export default Nav
