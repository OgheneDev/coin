import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import HowToBuy from './components/HowToBuy'
import BlockChainSection from './components/BlockChainSection'
import ImportantInfo from './components/ImportantInfo'

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <HowToBuy />
      <BlockChainSection />
      <ImportantInfo />
    </div>
  )
}

export default App
