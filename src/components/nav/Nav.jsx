import React, { useState } from 'react'
import {HiOutlineHome,HiInformationCircle} from 'react-icons/hi'
import {BiNetworkChart} from 'react-icons/bi'
import {MdMiscellaneousServices} from 'react-icons/md'
import {IoIosContact} from 'react-icons/io'
import '../../components/nav/Nav.css'
const Nav = () => {
  const [activeNav,setActiveNav] = useState("#");
  return (
 <nav>
  <a href="#" onClick={() => { setActiveNav("#") }} className={activeNav === '#' ? 'active' : ''}> <HiOutlineHome /></a>
  <a href="#about" onClick={() => { setActiveNav("#about") }} className={ activeNav === '#about' ? 'active' : '' }> <HiInformationCircle /></a>
  <a href="#experience" onClick={() => { setActiveNav("#experience") }} className={ activeNav === '#experience' ? 'active' : '' }> <BiNetworkChart /></a>
  <a href="#services" onClick={() => { setActiveNav("#services") }} className={ activeNav === '#services' ? 'active' : '' }> <MdMiscellaneousServices /></a>
  <a href="#contact" onClick={() => { setActiveNav("#contact") }} className={ activeNav === '#contact' ? 'active' : '' }> <IoIosContact /></a>

 </nav>
  )
}

export default Nav