import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='flex item-center '>
        <ul className='flex space-x-8 text-3xl text-white '>
            <Link to={'https://github.com/DarioCepele'}><li className='cursor-pointer hover:scale-150 duration-300'><FaGithub /></li></Link>
            <Link to={'https://it.linkedin.com/in/dario-cepele'}><li className='cursor-pointer hover:scale-150 duration-300'><FaLinkedinIn /></li></Link>
        </ul>
    </footer>
  )
}

export default Footer