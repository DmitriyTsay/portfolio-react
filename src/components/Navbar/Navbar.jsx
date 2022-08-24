import React from 'react';

// Icons
import {AiOutlineHome, AiOutlineContacts} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'
import {MdOutlineWindow} from 'react-icons/md'

// Style
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar__button'><a href="#header"><AiOutlineHome /></a></div>
        <div className='navbar__button'><a href="#about"><BsPerson /></a></div>
        <div className='navbar__button'><a href="#portfolio"><MdOutlineWindow /></a></div>
        <div className='navbar__button'><AiOutlineContacts /></div>
    </div>
  )
}

export default Navbar