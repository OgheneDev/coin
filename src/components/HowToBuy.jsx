import React from 'react'
import CardSlider from './How to buy/CardSlider'

const HowToBuy = () => {
  return (
    <div className=" py-7 md:px-[100px] bg-gradient-to-b from-gray-900 via-blue-900/80 to-gray-900">
      <div className="relative  py-16">
      <div className="container mx-auto px-6">
        <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Left side - Main Title */}
          <div className="mb-4 md:mb-0">
            <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight">
              <span className="block">HOW</span>
              <span className="block mt-2">TO BUY</span>
            </h1>
          </div>
          
          {/* Right side - Subtitle */}
          <div className="max-w-sm">
            <p className="text-gray-200 uppercase text-sm md:text-right">
              READY TO OWN SOME $Trumpbp TOKEN?
              FOLLOW THESE STRAIGHTFORWARD STEPS
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="w-[60%] h-[1px] bg-white mx-auto mb-16" />
      <CardSlider />
    </div>
  )
}

export default HowToBuy
