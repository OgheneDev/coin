import React from 'react';

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
          <h2 className="text-4xl font-bold text-white mb-4">IMPORTANT INFO</h2>
          <div className="text-2xl text-white/90 mb-8">Total Token Supply</div>
          <div className="text-3xl font-bold text-white mb-12">$100,000,000,000,000</div>
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
          {['twitter', 'telegram', 'medium', 'website'].map((platform) => (
            <div key={platform} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <div className="w-5 h-5 bg-white/80 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



export default ImportantInfo;