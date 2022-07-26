import React, {useState, useEffect} from 'react';
import { Link} from 'react-router-dom';
// import { Button } from 'react-bootstrap';
import {Button} from './Button.js';
import './Navbar.css';

function Navbar() {
  const [click, setClick] =useState(false);
  const [button, setButton]=useState(true);
  const handleClick = () =>setClick(!click);
  const closeMobileMenu=()=>setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true);
    }
  };
  useEffect(()=>{
    showButton();
  },[] );
  window.addEventListener('resize', showButton);
  return (
        <>
        <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                JA Bookstore <i class="fa-solid fa-graduation-cap"></i>
                {/* <i className='fab fa-typo3'/>  */}
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click? 'nav-menu active' : 'nav-menu'}>
               <li className="nav-item">
               <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
               </Link>
               </li>
                              <li className="nav-item">
               <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
             About us
               </Link>
               </li>
               <li className="nav-item">
               <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
           Contact us
               </Link>
               </li>
               <li className="nav-item">
               <Link to='/signup' className='nav-links-mobile' onClick={closeMobileMenu}>
                Sign IN
               </Link>
               </li> 
            </ul>
        
        </div>
    </nav>
    </>
  );
}

export default Navbar;