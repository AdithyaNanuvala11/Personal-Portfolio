import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
const data = [
  {
    id: 1,
    title: "Decentralised Finance App",
    image: IMG1
  },
  {
    id: 2,
    title: "Neural Networks Project",
    image: IMG2
  },
  {
    id: 3,
    title: "Analysing Cancer Risk using AI ",
    image: IMG3
  }

]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5> My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'> {
      data.map(({id,image,title}) => {
        return (
          <article key={id} className='portfolio__item'>
        <div className='portfolio__item-image'>
        <img src={image} />
        </div>
          <h3>{title}</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com" className='btn'>Github</a>
          <a href="https://dribble.com/Alien_pixels" className='btn btn-primary' target="_blank">Live Demo</a>
          </div>
          
        </article>
        )
      })
      }
      </div>
    </section>
  )
}

export default Portfolio