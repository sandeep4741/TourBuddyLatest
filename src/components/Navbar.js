import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({ handleSearch, showSearchBar  }) => {
  return (
    <nav className='NavbarItems'>
      <Link to='/' className='navbar-logo'>
      <span className="logo-text">
      <span className="tour">Tour</span>
      <span className="buddy">Buddy</span>
      </span>
</Link>
    
      <ul className='nav-menu' style={{ justifyContent: 'flex-end' }}>
        <li>
         <Link to='/states' className='nav-links'>
          <i class="fa-solid fa-house-user"></i>
          States</Link>
        </li>
        <li>
         <Link to='/about' className='nav-links' >
          <i class="fa-solid fa-circle-info"></i>
          About</Link>
        </li>
      
        <li>
         <Link to='/contact' className='nav-links' >
          <i class="fa-solid fa-address-book"></i>
          Contact</Link>
        </li>
      </ul>
      {showSearchBar && (
        <div className='searchbar'>
          <input type='text' placeholder='Search' onChange={handleSearch} />
        </div>
      )}
    </nav>
  )
}

export default Navbar;
