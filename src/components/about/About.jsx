import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa';
import {IoMdSchool} from 'react-icons/io';
import {BsCodeSlash} from 'react-icons/bs';
import Mypic from '../../assets/me-about.jpg';
const About = () => {
  return (
    <section id='about'>
      <h5> Get to know </h5>
      <h2 > About Me </h2> 
      <div className='container about__container'>
        <div className='about__me'>
        <div className='about__me-image'>
        <img src={Mypic} />
        </div>
        </div>
        <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
          <FaAward className='about__icon'/>
          <h5>Experience</h5>
          <small> U.G Student </small>
          </article>
          <article className='about__card'>
          <IoMdSchool className='about__icon'/>
          <h5>College</h5>
          <small> NIT Warangal </small>
          </article>
          <article className='about__card'>
          <BsCodeSlash className='about__icon'/>
          <h5>Interests</h5>
          <small> C.P & Dev </small>
          </article>
        </div>
        <p>
        donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc
        </p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About