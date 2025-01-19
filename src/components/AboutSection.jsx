import React from 'react'
import trump from '../assets/images/trump.png'

const AboutSection = () => {
  return (
    <section className=' bg-gradient-to-b from-gray-900 via-blue-900/80 to-gray-900 px-[20px] py-[30px] md:py-[50px] md:px-[60px]'>
      <h1 className='text-3xl md:text-6xl text-white text-center  font-bold uppercase'>About TrumpCoin</h1>
      <img src={trump} alt="" className='w-[120px] mx-auto relative bottom-[-50px]' />
      <div className='bg-white shadow-black shadow-lg py-7 px-5 rounded-[15px] space-y-5 w-[90%] md:w-[95%] mx-auto mt-5 text-center'>
        <h4 className='font-bold'>Welcome to $TBD - The Future of Fun and Finance!</h4>
        <p>As we launch on this historic day, we invite you to join us in revolutionizing the world of cryptocurrency. [Coin Name] is more than just a meme coin; it's a community-driven movement that combines humor, innovation, and financial growth.</p>
        <p>Why $TBD?</p>
        <p>Community First: Our coin is built on the foundation of a strong, supportive community. Together, we can achieve greatness.</p>
        <p>Visionary Growth: With a clear vision and strategic roadmap, [Coin Name] is poised to reach new heights and create lasting value for our holders.</p>
        <p>Fun and Engaging: We believe in the power of laughter and creativity. Our coin brings a unique blend of entertainment and financial opportunity.</p>
        <p>Join Us on This Exciting Journey</p>
        <p>By holding $TBD, you're not just investing in a cryptocurrency; you're becoming part of a vibrant and dynamic community. Let's work together to reach a market cap of hundreds of millions of dollars and beyond.</p>
        <p>Stay Connected:</p>
      </div>
    </section>
  )
}

export default AboutSection
