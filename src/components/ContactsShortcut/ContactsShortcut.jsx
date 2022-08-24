import React from 'react'

import {AiOutlineLinkedin, AiOutlineGithub, AiOutlineInstagram} from 'react-icons/ai'

import './ContactsShortcut.scss'

const ContactsShortcut = () => {
  return (
    <div className='contacts-shortcut'>
        <a href="https://www.linkedin.com/in/dmitriy-tsay-8478a2167/"><AiOutlineLinkedin /></a>
        <a href="https://github.com/DmitriyTsay"><AiOutlineGithub /></a>
        <a href="https://instagram.com/tsaydmitriy"><AiOutlineInstagram /></a>
    </div>
  )
}

export default ContactsShortcut