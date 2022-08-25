import React from 'react'

// Icons
import {BsTelegram, BsWhatsapp} from 'react-icons/bs'

const ContactsCard = ({ type, contact, link }) => {
  return (
    <div className='contacts__card'>
        {type === 'Telegram' ? <BsTelegram /> : <BsWhatsapp />}
        <h3>{type}</h3>
        <p className='gray'>{contact}</p>
        <a href={link}>Send a message</a>
    </div>
  )
}

export default ContactsCard