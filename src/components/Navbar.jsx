import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react'; // XIcon for the close button

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close menu after clicking
    }
  };

  return (
    <nav className="flex bg-gradient-to-b from-gray-900 via-blue-900/80 to-gray-900 justify-between items-center text-white p-5 md:px-[60px] relative">
      <h3 className="font-semibold text-[13px] uppercase">Trump coin</h3>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-5 items-center">
        <li
          className="text-[13px] cursor-pointer"
          onClick={() => scrollToSection('homeSection')}
        >
          Home
        </li>
        <li
          className="text-[13px] cursor-pointer"
          onClick={() => scrollToSection('aboutSection')}
        >
          About
        </li>
        <li
          className="text-[13px] cursor-pointer"
          onClick={() => scrollToSection('howToBuySection')}
        >
          How to Buy
        </li>
        <li
          className="text-[13px] cursor-pointer"
          onClick={() => scrollToSection('tokenomicsSection')}
        >
          Tokenomics
        </li>
      </ul>
      <button className="rounded-md py-2 px-5 text-white hidden md:block text-[14px] bg-black">
        Get TrumpCoin
      </button>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden"
        onClick={() => setIsMenuOpen((prevState) => !prevState)}
      >
        {isMenuOpen ? <XIcon size="24" /> : <MenuIcon size="24" />}
      </button>

      {/* Sliding Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-900 flex flex-col items-center gap-5 p-5 text-[14px] z-50">
          <li
            className="cursor-pointer"
            onClick={() => scrollToSection('homeSection')}
          >
            Home
          </li>
          <li
            className="cursor-pointer"
            onClick={() => scrollToSection('aboutSection')}
          >
            About
          </li>
          <li
            className="cursor-pointer"
            onClick={() => scrollToSection('howToBuySection')}
          >
            How to Buy
          </li>
          <li
            className="cursor-pointer"
            onClick={() => scrollToSection('tokenomicsSection')}
          >
            Tokenomics
          </li>
          <button className="rounded-md py-2 px-5 text-white text-[14px] bg-black">
            Get TrumpCoin
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
