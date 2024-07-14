import React from 'react';
export default function Mobilenav({ isopen, togglemenu }) {
  return (
    <>
      <div className={`mobile-menu ${isopen ? "active" : ""}`} onClick={togglemenu}>
        <div className='mobile-menu-container'>
          
          <ul>
            <li><a href='/' className='menu-item'>Home</a></li>
            <li><a href='#about' className='menu-item'>About</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}