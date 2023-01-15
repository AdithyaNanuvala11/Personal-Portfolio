import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {SiLeetcode} from 'react-icons/si'
const Headersocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="blank"> <BsLinkedin /> </a>
        <a href="https://github.com" target="blank"> <AiFillGithub /> </a>
        <a href="https://leetcode.com" target="blank"> <SiLeetcode /></a>
    
    </div>
  )
}

export default Headersocials