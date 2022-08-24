import React from 'react'

// Styles
import './About.scss'

// Components
import Button from '../../components/Button/Button'
import Frontend from './Frontend'
import Backend from './Backend'

const About = () => {
  return (
    <div className='about' id='about'>
        <p className='gray'>Get to know</p>
        <h2>About me</h2>
        <div className='about__main'>
            <div className='about__main__image'>
                <img src="./me-about.jpg" alt='About me' />
            </div>
            <div className='about__main__text'>
                <p>I am Frontend Web-Developer, with basic knowledge of Backend.</p>
                <div className='skills'>
                  <Frontend />
                  <Backend />
                </div>
                <Button text="Let's Talk"/>
            </div>
        </div>
    </div>
  )
}

export default About