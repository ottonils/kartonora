"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBriefcase, faChevronLeft, faChevronRight, faEarthEurope, faPencil } from '@fortawesome/free-solid-svg-icons';
// faBagShopping war importiert, aber nicht genutzt. Kann bei Bedarf wieder hinzugefügt werden.
import { Playwrite_DK_Loopet } from 'next/font/google';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface CarouselCardData {
  id: number;
  imgSrc: string;
  title: string;
  description: string;
  adventureText: string;
  icon: IconDefinition;
}

const playwriteDKLoopet = Playwrite_DK_Loopet({
    weight: ['100', '200', '300', '400'],
    // subsets: ['latin'], // Kann für Optimierung hinzugefügt werden
});

interface CarouselConfig {
  cardWidthClass: string;
  cardBaseWidth: number;
  activeCardScale: number;
  maxVisibleOffset: number;
  rotateYFactor: number;
  blurFactor: number;
  xTranslateMultiplier: number;
  stageHeightClass: string;
}

const CarouselCard = ({ cardData, styleProps, fontClassName, onCardClick, cardWidthClass } : any) => {
  return (
    <motion.div
      className={`absolute cursor-pointer ${cardWidthClass} h-auto`} 
      style={{ 
        transformStyle: "preserve-3d",
        left: '50%', // GEÄNDERT für korrekte Zentrierungsbasis
        top: '50%',  
      }}
      initial={false} 
      animate={styleProps.animate}
      transition={{ type: "spring", stiffness: 200, damping: 30 }}
      onClick={onCardClick}
      drag="x" 
      dragConstraints={{ left: 0, right: 0 }} 
      dragElastic={0.2}
      onDragEnd={(event, info) => {
        if (styleProps.onDragEndCard) {
          styleProps.onDragEndCard(info.offset.x);
        }
      }}
    >
      <div className="w-full h-full flex flex-col p-4 sm:p-5 bg-white/30 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20">
        <img 
          src={cardData.imgSrc} 
          alt={cardData.title} 
          className="w-full rounded-xl object-cover aspect-[4/3] mb-3 sm:mb-4"
          draggable="false"
        />
        <span className={`${fontClassName} text-[#A3C1AD] text-base sm:text-lg md:text-xl font-medium mt-2 block`}>{cardData.title}</span>
        <article className="text-xs sm:text-sm mt-1 sm:mt-2 text-[#151515] flex-grow min-h-[50px] sm:min-h-[60px]">
          {cardData.description}
        </article>
        <div className="w-full flex justify-between items-center mt-auto pt-3 sm:pt-4 border-t border-white/10">
          <span className={`${fontClassName} text-[0.7rem] sm:text-xs md:text-sm text-[#A3C1AD]`}>{cardData.adventureText}</span>
          {/* GEÄNDERT: text-md zu text-base für korrekte Tailwind-Klasse */}
          <FontAwesomeIcon className='text-base sm:text-lg text-gray-700' icon={cardData.icon} />
        </div>
      </div>
    </motion.div>
  );
};

const CarouselCollection = (props : {title : string, data : CarouselCardData[]}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const cards = props.data;

    const initialConfig: CarouselConfig = {
        cardWidthClass: "w-[420px]", 
        cardBaseWidth: 315,          
        activeCardScale: 1.2,
        maxVisibleOffset: 2,
        rotateYFactor: -20,
        blurFactor: 2.0,
        xTranslateMultiplier: 0.50, 
        stageHeightClass: "h-[560px]", 
    };
    const [config, setConfig] = useState<CarouselConfig>(initialConfig);

    useEffect(() => {
        const updateConfig = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 640) { 
                setConfig({
                    cardWidthClass: "w-[260px]",
                    cardBaseWidth: 195, 
                    activeCardScale: 1.1,
                    maxVisibleOffset: 1,
                    rotateYFactor: -15,
                    blurFactor: 1.5,
                    xTranslateMultiplier: 0.55, 
                    stageHeightClass: "h-[420px]",
                });
            } else if (screenWidth < 768) { 
                setConfig({
                    cardWidthClass: "w-[320px]",
                    cardBaseWidth: 240, 
                    activeCardScale: 1.15,
                    maxVisibleOffset: 2,
                    rotateYFactor: -18,
                    blurFactor: 1.8,
                    xTranslateMultiplier: 0.52,
                    stageHeightClass: "h-[480px]",
                });
            } else { 
                setConfig(initialConfig); 
            }
        };

        updateConfig();
        window.addEventListener('resize', updateConfig);
        return () => window.removeEventListener('resize', updateConfig);
    }, []); 


    const navigate = (direction : any) => {
        setActiveIndex(prevIndex => {
            let newIndex = prevIndex + direction;
            if (newIndex < 0) {
                newIndex = cards.length - 1;
            } else if (newIndex >= cards.length) {
                newIndex = 0;
            }
            return newIndex;
        });
    };
    
    const handleCardClick = (index : any) => {
        setActiveIndex(index);
    };

    const handleCardDragEnd = (draggedX : any) => {
        const swipeThreshold = 40; 
        if (draggedX < -swipeThreshold) { 
            navigate(1); 
        } else if (draggedX > swipeThreshold) { 
            navigate(-1); 
        }
    };

    return (
        <div className="w-full h-auto flex flex-col items-center p-4 sm:p-6 md:p-8 pt-12 md:pt-20 text-white overflow-x-hidden">
            <h2 className='w-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 sm:mb-10 md:mb-16 text-center tracking-wide text-[#151515] pb-6 sm:pb-8 md:pb-10'>
                {props.title}
            </h2>

            <div 
                className={`relative w-full ${config.stageHeightClass} mt-4 flex items-center justify-center`}
                style={{ perspective: '1200px' }} 
            >
                {cards.map((card, index) => {
                    const offset = index - activeIndex; 
                    
                    let xTranslate = 0;
                    let scale = 0.5;
                    let opacity = 0;
                    let zIndex = 0;
                    let rotateY = 0;
                    let blur = 10; 

                    if (Math.abs(offset) <= config.maxVisibleOffset) {
                        const distanceFactor = Math.abs(offset);
                        opacity = Math.max(0, 1 - (distanceFactor * 0.4)); 
                        scale = Math.max(0, 1 - (distanceFactor * 0.25)); 
                        zIndex = cards.length - distanceFactor;
                        const perspectivePush = (offset !== 0 ? (offset > 0 ? 25 : -25) * distanceFactor : 0) * (config.cardBaseWidth / 300) ; 
                        xTranslate = (offset * config.cardBaseWidth * config.xTranslateMultiplier) - perspectivePush;
                        rotateY = offset * config.rotateYFactor; 
                        blur = distanceFactor * config.blurFactor;
                    } else { 
                        opacity = 0;
                        scale = 0.3; 
                        xTranslate = offset * (config.cardBaseWidth * 0.7); 
                        rotateY = offset * config.rotateYFactor;
                        blur = 10;
                    }
                    
                    if (offset === 0) {
                        scale = config.activeCardScale;
                        opacity = 1;
                        zIndex = cards.length + 1;
                        rotateY = 0; 
                        xTranslate = 0; 
                        blur = 0;
                    }
                    
                    const cardStyleProps = {
                        animate: {
                            // GEÄNDERT: x-Transformation für korrekte Zentrierung
                            x: `calc(-50% + ${xTranslate}px)`, 
                            y: "-50%", 
                            scale: scale,
                            opacity: opacity,
                            zIndex: zIndex,
                            rotateY: rotateY,
                            filter: `blur(${blur}px)`,
                        },
                        onDragEndCard: handleCardDragEnd, 
                    };

                    return (
                        <CarouselCard
                            key={card.id}
                            cardData={card}
                            styleProps={cardStyleProps}
                            fontClassName={playwriteDKLoopet.className}
                            onCardClick={() => handleCardClick(index)}
                            cardWidthClass={config.cardWidthClass}
                        />
                    );
                })}
            </div>

            {/* Navigationsbuttons und Dots */}
            {/* Dieser Bereich sollte bereits durch items-center im Parent zentriert sein. */}
            {/* Wenn die Punkte immer noch verschoben wirken, nachdem die Karten zentriert sind, */}
            {/* könnte es an der Breite der Buttons liegen oder ein optischer Effekt sein. */}
            <div className="flex items-center space-x-4 sm:space-x-6 mt-10 md:mt-16">
                <button 
                    onClick={() => navigate(-1)} 
                    className="p-2 sm:p-3 bg-black/50 hover:bg-[#909090] text-white rounded-full transition-all duration-200 backdrop-blur-sm hover:cursor-pointer"
                    aria-label="Vorherige Karte"
                >
                    <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4 sm:w-5 sm:h-5 " />
                </button>
                <div className="flex space-x-1.5 sm:space-x-2">
                    {cards.map((_, index) => (
                        <button
                            key={`dot-${index}`}
                            onClick={() => setActiveIndex(index)}
                            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${activeIndex === index ? 'bg-[#A3C1AD] scale-125' : 'bg-black/50 hover:bg-black/85'}`}
                            aria-label={`Gehe zu Karte ${index + 1}`}
                        />
                    ))}
                </div>
                <button 
                    onClick={() => navigate(1)} 
                    className="p-2 sm:p-3 bg-black/50 hover:bg-[#909090] text-white rounded-full transition-all duration-200 backdrop-blur-sm hover:cursor-pointer"
                    aria-label="Nächste Karte"
                >
                    <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
            </div>
        </div>
    );
};

export default CarouselCollection;