import React from 'react';
import LogoWhite from '../images/logo-white.svg';
import LogoDark from '../images/logo-dark.svg';

const Footer = () => {
  return (
    <footer className='bg-primary py-12'>
      <div className='container mx-auto text-white flex flex-col gap-3 justify-between items-center lg:flex-row'>
        <img src={LogoWhite} alt="" />
        Copyright &copy; 2024. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer;