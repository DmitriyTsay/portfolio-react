import React from 'react'

import './Button.scss'

const Button = ({text, small, handleClick}) => {
  return (
    <button className={`button ${small}`}>{text}</button>
  )
}

export default Button