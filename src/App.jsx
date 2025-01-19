import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import HowToBuy from './components/HowToBuy';
import BlockChainSection from './components/BlockChainSection';
import ImportantInfo from './components/ImportantInfo';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <div id="homeSection">
        <HeroSection />
      </div>
      <div id="aboutSection">
        <AboutSection />
      </div>
      <div id="howToBuySection">
        <HowToBuy />
      </div>
      <div id="tokenomicsSection">
        <BlockChainSection />
      </div>
      <ImportantInfo />
      <Footer />
    </div>
  );
};

export default App;
