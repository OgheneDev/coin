import React from 'react';
import twitter from '../assets/images/twitter.png';
import telegram from '../assets/images/telegram.png';
import medium from '../assets/images/medium.png';
import blockchain from '../assets/images/blockchain.png';

const ImportantInfo = () => {
  const sliderItems = [
    { text: "Launch Date: Jan 20th, 2024", variant: "light" },
    { text: "Blockchain: Solana & Base", variant: "light" },
    { text: "Airdrops: None", variant: "green" },
    { text: "Fully audited", variant: "green" },
    { text: "100% TOKEN BURNT", variant: "light" },
    { text: "FREEZE & MINT revoked", variant: "green" },
    { text: "Ownership renounced", variant: "light" },
    { text: "No pre-sale, no insiders", variant: "light" },
    { text: "liquidity WILL BE locked forever", variant: "green" },
  ];

  const SliderItem = ({ text, variant }) => (
    <div className={`px-4 py-1.5 rounded-full text-sm whitespace-nowrap ${
      variant === 'green' 
        ? 'bg-green-400/20 text-green-400' 
        : 'bg-white/10 text-white'
    }`}>
      {text}
    </div>
  );

  return (
    <div className="w-full bg-gradient-to-b from-gray-900 via-blue-900/80 to-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </div>
          <h2 className="text-4xl font-bold text-white mb-2">IMPORTANT INFO</h2>
          <div className="w-[60%] md:w-[250px] h-[1px] bg-white mx-auto mb-2" />
          <div className=" text-white/90 font-semibold">Total Token Supply</div>
          <div className=" font-semibold text-white text-[20px] mb-12">$1,000,000,000</div>
        </div>

        {/* Infinite Slider */}
        <div className="relative overflow-hidden">
          <div className="flex gap-4 animate-scroll">
            {/* Double the items for seamless loop */}
            {[...sliderItems, ...sliderItems].map((item, index) => (
              <SliderItem key={index} {...item} />
            ))}
          </div>
        </div>

        {/* Social Icons */}
<div className="flex justify-center gap-6 mt-12">
  {[{ src: twitter, alt: "Twitter" }, 
    { src: telegram, alt: "Telegram" }, 
    { src: medium, alt: "Medium" }, 
    { src: blockchain, alt: "Blockchain" }
  ].map((icon, index) => (
    <div 
      key={index} 
      className="w-10 h-10 rounded-full bg-white shadow-lg shadow-black flex items-center justify-center"
    >
      <img 
        src={icon.src} 
        alt={icon.alt} 
        className="w-5 h-5"
      />
    </div>
  ))}
</div>

      </div>
    </div>
  );
};



export default ImportantInfo;