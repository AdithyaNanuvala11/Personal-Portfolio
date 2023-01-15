import React from 'react'
import './contact.css'
import {SiGmail,SiWhatsapp,SiInstagram} from 'react-icons/si'
import  {useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r8z1fgw', 'template_6invglg', form.current, 'Bfj1fcT6RozHTbmEM')
    
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <h4>Email</h4>
            <SiGmail className='contact__option-icon' />
            <h5>adinanuvala223@gmaiL.com</h5>
            <a className='btn btn-primary' href='mailto:adinanuvala223@gmail.com'>Send a Message</a>
          </article>
          <article className='contact__option'>
            <h4>Whatsapp</h4>
            <SiWhatsapp className='contact__option-icon' />
            <h5>+91 6305265064</h5>
            <a className='btn btn-primary' href='https://ig.me/m/adithyarao_nanuvala'>Send a Message</a>
          </article>
          <article className='contact__option'>
            <h4>Email</h4>
            <SiInstagram className='contact__option-icon' />
            <h5>adithyarao__nanuvala</h5>
            <a className='btn btn-primary' href='https://api.whatsapp.com/send?phone=6305265064'>Send a Message</a>
          </article>
        </div>
        {/* End of Contact Options*/}
        <form ref={form} action="" onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required/>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact