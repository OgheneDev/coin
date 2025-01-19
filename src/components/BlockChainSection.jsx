import React from 'react';
import { Copy } from 'lucide-react';
import buy from '../assets/images/buy.png'
import room from '../assets/images/room.png'
import base from '../assets/images/base.png'
import solana from '../assets/images/solana.png'
import uni from '../assets/images/uni.png'

const BlockchainSection = () => {
  const address = "EXVUTUKPD4WEHLKWJUG7WO5KZ6UIVHDAUXXQHPWPUMP";

  const CopyButton = () => (
    <button className="ml-2 p-1 hover:bg-gray-700 rounded-md transition-colors">
      <Copy size={16} className="text-gray-400" />
    </button>
  );

  const AddressBar = ({ icons }) => (
    <div className="flex items-center bg-white/5 rounded-full py-3 px-4 mb-3">
      <div className="flex gap-2">
        {icons.map((icon, index) => (
          <div key={index} className="w-6 h-6 rounded-full bg-blue-500" />
        ))}
      </div>
      <span className="ml-3 text-gray-300 text-sm font-mono flex-1">
        {address}
      </span>
      <CopyButton />
    </div>
  );

  return (
    <div className=" bg-gradient-to-b from-gray-900 via-blue-900/80 to-gray-900 py-8 px-5">
      <div className="md:max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-white text-5xl md:text-6xl font-bold mb-4 text-center">
          BLOCKCHAIN
        </h1>
        <div className="w-[30%] h-0.5 bg-white mx-auto mb-16" />

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Circle Image */}
          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-full bg-white overflow-hidden">
              <img 
                src={buy}
                alt="Placeholder" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Text and Address Bars */}
          <div className="space-y-6">
            <p className="text-gray-200 text-sm mb-8">
              $TBD IS AVAILABLE ON TWO OF THE LEADING DECENTRALIZED EXCHANGES, NAMELY RAYDIUM AND UNISWAP. THIS DIVERSIFICATION ENSURES EASY ACCESS AND FLEXIBILITY FOR OUR COMMUNITY, ACCOMMODATING VARIOUS USER PREFERENCES ACROSS DIFFERENT BLOCKCHAIN ECOSYSTEMS.
            </p>

            <div className="space-y-4">
              <h3 className="text-white text-lg mb-4">
                CROSS CHAIN, BUY ON RADIUM OR UNISWAP
              </h3>
              
              <AddressBar icons={[1, 2, 3]} />
              <AddressBar icons={[1, 2]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockchainSection;