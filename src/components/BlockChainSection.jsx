import React from "react";
import { Copy, Link } from "lucide-react";
import buy from "../assets/images/buy.png";
import room from "../assets/images/room.png";
import solana from "../assets/images/solana.png";


const BlockchainSection = () => {
  const address = "yF1qttSJNEs3UcFCvcyhud5WqrEUiqLKxFxmc3Amoon";

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
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-4 text-center">
          BLOCKCHAIN
        </h1>
        <div className="w-[60%] md:w-[200px] h-[1px] bg-white mx-auto mb-8" />

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:items-start">
          {/* Left Side - Circle Image */}
          <div className="flex justify-center">
            <div className="w-48 md:w-64 h-48 md:h-64 rounded-full bg-white overflow-hidden shadow-lg">
              <img
                src={buy}
                alt="Buy Placeholder"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Text and Address Bars */}
          <div className="space-y-6">
            <p className="text-gray-200 text-sm md:text-base leading-relaxed">
            $TRUMPBD is proudly available on the leading and most user-friendly blockchain, Solana. Our choice of Solana ensures that our community benefits from easy access, exceptional flexibility, and lightning-fast transaction speeds. Solana is renowned for its robust performance and low transaction costs, making it an ideal platform for innovative projects like $TRUMPBD.
Why Solana?
High Performance: Solana can process thousands of transactions per second, ensuring that your $TRUMPBD transactions are swift and efficient.
Low Fees: With transaction fees that are among the lowest in the industry, Solana makes it cost-effective to participate in the $TRUMPBD ecosystem.
Scalability: Solana’s architecture is designed to scale without compromising on performance, which means it can handle a growing number of users and transactions seamlessly.
Secure & Decentralized: Solana’s decentralized network of validators provides a secure environment for your $TRUMPBD assets.
            </p>

            <div className="space-y-4">

              {/* Address Bars with Icons */}
              <AddressBar icons={[solana, room]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockchainSection;
