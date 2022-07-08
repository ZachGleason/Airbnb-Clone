import React from 'react';
import './Header.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsGlobe } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';






const Header = () => {
  return (
    <div className='header'>
            <img src='https://1000logos.net/wp-content/uploads/2017/08/Airbnb-Logo-768x279.png' 
            alt='logo'
            className='header_icon'
            />

            <div className='header_center'>
                <input type="text" />
                <AiOutlineSearch />
            </div>
            
            <div className='header_right'>
                <p>Become a host</p>
                <BsGlobe fontSize="25px"/>
                <CgProfile fontSize="40px" />
            </div>
    </div>
  )
}

export default Header