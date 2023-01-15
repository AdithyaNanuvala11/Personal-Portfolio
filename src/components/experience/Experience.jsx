import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import  './experience.css'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have </h5>
      <h2> My Experience </h2>
      <div className='container experience__container'>
        <div className='experience__frontend' >
          <h3>Frontend Developement</h3>
          <div className='experience__content'>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details__icon'/>
            <div>
            <h4>HTML</h4> 
            <small className='text-light'> Experienced </small>
           </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details__icon'/>
            <div> <h4>CSS</h4>
            <small className='text-light'> Beginner </small></div>
            
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details__icon'/>
            <div> <h4>JavaScript</h4>
            <small className='text-light'> Intermediate </small> </div>
            
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details__icon'/>
            <div> <h4>React</h4>
            <small className='text-light'> Intermediate </small></div>
            
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details__icon'/>
            <div> <h4>Bootstrap</h4>
            <small className='text-light'> Experienced </small> </div>
            
            </article>
          </div>
        </div>
        <div className='experience__backend' >
          <h3>Backend Developement</h3>
          <div className='experience__content'>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details__icon'/>
            <div><h4>MongoDB</h4>
            <small className='text-light'> Intermediate </small> </div>
            
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details__icon'/>
            <div><h4>MySQL</h4>
            <small className='text-light'> Intermediate </small> </div>
            
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details__icon'/>
            <div> <h4>R</h4>
            <small className='text-light'> Intermediate </small></div>
            
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details__icon'/>
            <div> <h4>Express</h4>
            <small className='text-light'> Intermediate </small></div>
            
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details__icon'/>
            <div><h4>Node</h4>
            <small className='text-light'> Experienced </small> </div>
            
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience