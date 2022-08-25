import React from 'react'

// Email API
import emailjs from '@emailjs/browser';

// Styles
import './Contacts.scss'

// Components
import ContactsCard from '../../components/ContactsCard/ContactsCard'

const Contacts = () => {

    const [ formData, setFormData ] = React.useState({
        name: '',
        email: '',
        message: '',
    })

    const form = React.useRef();

    const handleChange = (event) => {
        const {id, value} = event.target;

        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [id]: value,
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(form.current);

        emailjs.sendForm('service_rh1sc2q', 'template_tybcn2e', form.current, 'votzx1M5QymOg9W61')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    } 

  return (
    <div className='contacts' id='contacts'>
        <p className='gray'>Message me</p>
        <h2>Contacts</h2>
        <div className='contacts__main'>
            <div className='contacts__card__wrapper'>
                <ContactsCard 
                type='Telegram'
                contact='+7(776)-168-44-11'
                link={'https://t.me/tsaydmitriy'}
                />
                <ContactsCard 
                type='Whatsapp'
                contact='+7(776)-168-44-11'
                link={'https://api.whatsapp.com/send/?phone=77761684411&text&type=phone_number&app_absent=0'}
                />
            </div>
            <form ref={form} onSubmit={(e) => handleSubmit(e)}>
                <input 
                name='name'
                id='name'
                type='text'
                placeholder='Your Full Name'
                value={formData.name}
                onChange={(event) => handleChange(event)}
                required={true}
                />
                <input 
                name='email'
                id='email'
                type='email'
                placeholder='Your Email'
                value={formData.email}
                onChange={(event) => handleChange(event)}
                required={true}
                />
                <textarea 
                name='message'
                id='message'
                placeholder='Your Message'
                value={formData.message}
                onChange={(event) => handleChange(event)}
                required={true}
                />

                <button type='submit'>Send an email</button>
            </form>
        </div>
    </div>
  )
}

export default Contacts