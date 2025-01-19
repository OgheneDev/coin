import React from 'react'
import hero from '../assets/images/HOME.png'

const HeroSection = () => {
  return (
    <section className="">
       <img src={hero} alt="" className='w-full h-[40vh] md:h-[100vh]' />
    </section>
  )
}

export default HeroSection
