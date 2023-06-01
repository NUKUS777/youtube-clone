import React from 'react';
import CTA from './CTA';
import Me from '../../assets/me.png'

import './header.scss'

//icons
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import GitHubIcon from '@mui/icons-material/GitHub';


function Header() {
  return (
    <header id='#' className='h-[100vh] pt-3 mt-5 overflow-hidden'>
      <div className="container text-center	 header__container  h-[100%] relative">
        <h5 className='des'>Hello I'm</h5>
        <h1 className='text-l'>Dawlet Kenesbaev  <br /> That is me</h1>
        <h5 className='text-light des mb-5'>Front End Developer</h5>
        <CTA/>  
        <div className="me absolute   ">
        <img className='object-cover  h-[70%] w-[400px] float-left mr-4' src={Me} alt="" />
        </div>
        <a href="" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header