import React, { useState } from 'react'
import Mobilenav from './Mobilenav';
import { FaAlignJustify } from 'react-icons/fa';
export default function Navbar() {
  const [openmenu, setOpenMenu] = useState(false);
  function togglemenu() {
    setOpenMenu(!openmenu);
  }
  return (
    <>
      <Mobilenav isopen={openmenu} togglemenu={togglemenu}></Mobilenav>
      <nav className='nav-wrapper'>
        <div className='nav-content'>
          <h1 className='menu-h1'>Video Streaming Platform</h1>
          <ul>
            <li><a href='/' className='menu-item'>Home</a></li>
            <li><a href='#about' className='menu-item'>About</a></li>
            <li><a href='#price' className='menu-item'>Pricing</a></li>

          </ul>
          <button className='menu-btn' onClick={togglemenu}><span style={{ fontSize: "1.8rem",padding:"1rem" }}><FaAlignJustify></FaAlignJustify></span></button>
        </div>
      </nav>
    </>
  )
}