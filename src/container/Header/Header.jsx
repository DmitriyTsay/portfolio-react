import React from 'react'

import './Header.scss'

// Components
import Button from '../../components/Button/Button'
import ContactsShortcut from '../../components/ContactsShortcut/ContactsShortcut'

const Header = ({language}) => {
  return (
    <header>
        <div className='header' id='header'>
            <div className='empty'></div>
            <p>Hello, I'm</p>
            <h1>Tsay Dmitriy</h1>
            <p className='gray'>Junior Frontend Developer</p>
            <div className='header__buttons'>
                <Button text='Download CV'/>
                <Button text="Let's Talk" link="#contacts" />
            </div>
            <div className='header__image'>
                <img src='./avatar.png' alt='Tsay Dmitriy' />
            </div>
            <ContactsShortcut />
        </div>
    </header>
  )
}

export default Header