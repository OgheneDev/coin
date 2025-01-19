import React from "react";
import { Copy, Link } from "lucide-react";
import buy from "../assets/images/buy.png";
import room from "../assets/images/room.png";
import base from "../assets/images/base.png";
import solana from "../assets/images/solana.png";
import uni from "../assets/images/uni.png";

const BlockchainSection = () => {
  const address = "EXVUTUKPD4WEHLKWJUG7WO5KZ6UIVHDAUXXQHPWPUMP";

  // Copy Button
  const CopyButton = () => (
    <button
      className="ml-2 p-1 hover:bg-gray-700 rounded-md transition-colors"
      onClick={() => navigator.clipboard.writeText(address)}
    >
      <Copy size={16} className="text-gray-400" />
    </button>
  );

  // Address Bar Component with Link Icon
  const AddressBar = ({ icons }) => (
    <div className="flex items-center bg-white/5 rounded-lg py-3 px-4 mb-3 overflow-hidden flex-wrap">
      {/* Icons Section */}
      <div className="flex items-center gap-2">
        {icons.slice(0, 2).map((icon, index) => (
          <div key={index} className="w-6 h-6">
            <img
              src={icon}
              alt={`icon-${index}`}
              className="w-full h-full object-contain rounded-full"
            />
          </div>
        ))}

        {/* Link Icon Between Two Icons */}
        <Link size={16} className="text-gray-400" />
      </div>

      {/* Address and Copy Button */}
      <span className="ml-3 text-gray-300 text-sm font-mono flex-1 truncate">
        {address}
      </span>
      <CopyButton />
    </div>
  );

  return (
    <div className="bg-gradient-to-b from-gray-900 via-blue-900/80 to-gray-900 py-8 px-5">
      <div className="md:max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 text-center">
          BLOCKCHAIN
        </h1>
        <div className="w-20 h-1 bg-white mx-auto mb-16" />

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Circle Image */}
          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-full bg-white overflow-hidden shadow-lg">
              <img
                src={buy}
                alt="Placeholder"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Text and Address Bars */}
          <div className="space-y-6">
            <p className="text-gray-200 text-sm md:text-base mb-8 leading-relaxed">
              $TBD IS AVAILABLE ON TWO OF THE LEADING DECENTRALIZED EXCHANGES,
              NAMELY RAYDIUM AND UNISWAP. THIS DIVERSIFICATION ENSURES EASY
              ACCESS AND FLEXIBILITY FOR OUR COMMUNITY, ACCOMMODATING VARIOUS
              USER PREFERENCES ACROSS DIFFERENT BLOCKCHAIN ECOSYSTEMS.
            </p>

            <div className="space-y-4">
              <h3 className="text-white text-lg mb-4">
                CROSS CHAIN, BUY ON RAYDIUM OR UNISWAP
              </h3>

              {/* Address Bars with Icons */}
              <AddressBar icons={[solana, room]} />
              <AddressBar icons={[uni, base]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockchainSection;
