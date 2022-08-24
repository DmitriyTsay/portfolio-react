import React from 'react'

import './Button.scss'

const Button = ({text, small, link}) => {
  return (
    <a href={link}><button className={`button ${small}`}>{text}</button></a>
  )
}

export default Button