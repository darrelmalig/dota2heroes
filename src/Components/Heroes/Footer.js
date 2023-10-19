import React from 'react'
import logo from '../../Assets/Images/Logo-2.png'

const Footer = () => {
  return (
    <div className="py-8 pt-12 px-5 text-white text-sm flex items-center flex-col self-center place-self-end gap-y-3">
        <img src={logo} alt="logo" className="w-10 h-auto text-blue-600 hover:animate-pulse " />
        D.MALIG © 2023
    </div>
  )
}

export default Footer