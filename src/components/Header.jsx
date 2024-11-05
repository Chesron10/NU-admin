import React from 'react'
import logo from '../assets/images/logo-blue.png'

const Header = () => {
  return (
    <div className='w-full h-[50px] bg-white shadow-2xl' >
      <img src={logo} className='w-10 h-10'/>
    </div>
  )
}

export default Header