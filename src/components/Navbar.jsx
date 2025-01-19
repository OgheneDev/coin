import React, {useState} from 'react'
import { MenuIcon } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className=' flex bg-gradient-to-b from-gray-900 via-blue-900/80 to-gray-900  justify-between items-center text-white p-5 md:px-[60px]'>
      <h3 className='font-semibold text-[13px]  uppercase'>Trump coin</h3>
      {/* Desktop Menu */}
      <ul className='hidden md:flex gap-5 items-center'>
        <li className='text-[13px] cursor-pointer'>Home</li>
        <li className='text-[13px] cursor-pointer'>About</li>
        <li className='text-[13px] cursor-pointer'>How to Buy</li>
        <li className='text-[13px] cursor-pointer'>Tokenomics</li>
      </ul>
      <button className='rounded-md py-2 px-5 text-white hidden md:block text-[14px] bg-black'>
        Get TrumpCoin
      </button>
      <button className='md:hidden'>
        <MenuIcon size='24' />
      </button>
    </nav>
  )
}

export default Navbar
