import React, { useState, useRef, useEffect } from 'react'
import select from '../../assets/images/select.png'
import browser from '../../assets/images/browser.png'
import send from '../../assets/images/send.png'
import search from '../../assets/images/search.png'
import database from '../../assets/images/database.png'
import secure from '../../assets/images/secure.png'
import q from '../../assets/images/q.png'
import security from '../../assets/images/secure-1.png'


const CardSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const cardContainerRef = useRef(null);
    const totalCards = 4;

    const cardData = [
        {
            name: 'Create a Wallet',
            description: 'Download a solana-compatible wallet like phantom wallet.',
            image: select,
            backgroundColor: '#F3F3F3',
            textColor: '#00000',
            icon: database
        },
        {
            icon: q,
            name: 'Get Solana',
            description: 'Purchase Solana (SOL) from your preferred exchange or directly within your wallet',
            image: browser,
            backgroundColor: '#191A23',
            textColor: '#F3F3F3'
        },
        {
            icon: security,
            name: 'Swap for Trumpcoin',
            description: 'Use phantom wallet`s swap feature to exchange for trumpcoin',
            image: search,
            backgroundColor: '#B9FF66',
            textColor: '#00000'
        },
        {
            icon: secure,
            name: 'Create a Wallet',
            description: 'Download a solana-compatible wallet like phantom wallet.',
            image: send,
            backgroundColor: '#F3F3F3',
            textColor: '#00000'
        }
    ]

    const handleNavigate = (direction) => {
        const container = cardContainerRef.current;
        const cardWidth = container.offsetWidth;
        let nextIndex;
    
        if (direction === 'next') {
          nextIndex = (activeIndex + 1) % totalCards;
        } else {
          nextIndex = activeIndex === 0 ? totalCards - 1 : activeIndex - 1;
        }
    
        container.scrollTo({
          left: cardWidth * nextIndex,
          behavior: 'smooth',
        });
        setActiveIndex(nextIndex);
    };

    useEffect(() => {
        const handleScroll = () => {
          const container = cardContainerRef.current;
          const scrollPosition = container.scrollLeft;
          const cardWidth = container.offsetWidth;
          const currentIndex = Math.round(scrollPosition / cardWidth);
          setActiveIndex(currentIndex);
        };
    
        const container = cardContainerRef.current;
        container.addEventListener('scroll', handleScroll);
    
        return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
          if (window.innerWidth < 768) {
            const container = cardContainerRef.current;
            const nextIndex = (activeIndex + 1) % totalCards;
            const cardWidth = container.offsetWidth;
            container.scrollTo({
              left: cardWidth * nextIndex,
              behavior: 'smooth',
            });
            setActiveIndex(nextIndex);
          }
        }, 15000);
    
        return () => clearInterval(intervalId);
    }, [activeIndex]);

  return (
    <div className='relative'>
      {/* Previous Button */}
      <button 
          onClick={() => handleNavigate('prev')}
          className="absolute left-10 top-1/2 -translate-y-1/2 -translate-x-12 z-10 w-10 h-10 rounded-full bg-white shadow-md hidden md:flex items-center justify-center"
          aria-label="Previous slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#121661" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

      <div 
        className="card-slider flex overflow-x-auto snap-x snap-mandatory space-x-[20px] px-4"
        ref={cardContainerRef}
      >
        {cardData.map((card, index) => (
            <div
              key={index}
              className="snap-center shrink-0 w-[90vw] md:w-[550px] px-[20px] py-[50px] rounded-lg flex flex-col items-start "
              style={{ backgroundColor: card.backgroundColor }}
            >
              <div className='bg-blue-800 mb-5 w-[50px] h-[50px] rounded-full flex items-center justify-center'>
              <img src={card.icon} alt="" />
              </div>
              <h1 
               className="text-3xl font-bold mb-[20px] md:mb-[10px]"
               style={{ color: card.textColor }}
             >{card.name}</h1>
              <p 
                className="mb-[50px] md:mb-[30px] font-bold text-start uppercase"
                style={{ color: card.textColor }}
                >
                    {card.description}
                </p>
              <img src={card.image} alt={card.name} className=" h-auto mb-4 mx-auto" />
            </div>
          ))}
      </div>
      {/* Next Button */}
      <button 
          onClick={() => handleNavigate('next')}
          className="absolute right-10 top-1/2 -translate-y-1/2 translate-x-12 z-10 w-10 h-10 rounded-full bg-white shadow-md hidden md:flex items-center justify-center"
          aria-label="Next slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 6L15 12L9 18" stroke="#121661" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        {/* Indicator Dots - Now visible on all screen sizes */}
      <div className="indicator-dots flex justify-center mt-8">
        {cardData.map((_, index) => (
          <span
            key={index}
            className={`dot h-[15px] w-[15px] mx-2 rounded-full cursor-pointer ${
              index === activeIndex
                ? 'bg-white'
                : 'bg-transparent border border-black'
            }`}
            onClick={() => {
              const container = cardContainerRef.current;
              const cardWidth = container.offsetWidth;
              container.scrollTo({
                left: cardWidth * index,
                behavior: 'smooth',
              });
              setActiveIndex(index);
            }}
          ></span>
        ))}
      </div>
    </div>
  )
}

export default CardSlider
