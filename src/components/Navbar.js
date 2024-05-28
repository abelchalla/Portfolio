import React from 'react';
import '../css/navbar.css';
const Navbar = () => {
  return (
    <ul className='nav'>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#interests">Interests</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
  )
}

export default Navbar
