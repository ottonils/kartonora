"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faBook, faBriefcase, faChevronLeft, faChevronRight, faEarthEurope, faPencil } from '@fortawesome/free-solid-svg-icons'; // faBagShopping hinzugefügt, falls benötigt, sonst entfernen
import { Playwrite_DK_Loopet } from 'next/font/google';

const playwriteDKLoopet = Playwrite_DK_Loopet({
    weight: ['100', '200', '300', '400'],
});

const carouselCardData = [
  { id: 1, imgSrc: "/box.png", title: "Für den ersten Start...", description: "Alles, was du für den Schulbeginn brauchst, kompakt und bereit.", adventureText: "Dein Lernabenteuer beginnt!", icon: faPencil },
  { id: 2, imgSrc: "/mappe.png", title: "Wissen festhalten...", description: "Die perfekte Mappe, um deine Notizen und Zeichnungen sicher aufzubewahren.", adventureText: "Sammle deine Gedanken!", icon: faBriefcase },
  { id: 3, imgSrc: "/box.png", title: "Tauche ein in Geschichten", description: "Spannende Bücher, die deine Fantasie anregen und neue Welten eröffnen.", adventureText: "Entdecke das Lesen!", icon: faBook },
  { id: 4, imgSrc: "/box.png", title: "Kreativität entfesseln", description: "Ein Set bunter Stifte, um deine Ideen farbenfroh aufs Papier zu bringen.", adventureText: "Male deine Träume!", icon: faPencil },
  { id: 5, imgSrc: "/box.png", title: "Die Welt erkunden", description: "Lerne spielerisch Kontinente und Länder mit diesem interaktiven Globus kennen.", adventureText: "Dein Horizont wartet!", icon: faEarthEurope },
];

const CarouselCard = ({ cardData, styleProps, fontClassName, onCardClick } : any) => {
  return (
    <motion.div
      // HIER WURDE DIE BREITE ANGEPASST
      className="absolute cursor-pointer w-[310px] sm:w-[335px] md:w-[30rem] h-auto" 
      style={{ 
        transformStyle: "preserve-3d",
        left: '35%', 
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
      <div className="w-full h-full flex flex-col p-4 sm:p-6 bg-white/30 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20">
        <img 
          src={cardData.imgSrc} 
          alt={cardData.title} 
          className="w-full rounded-xl object-cover aspect-[4/3] mb-4"
          draggable="false"
        />
        <span className={`${fontClassName} text-[#A3C1AD] text-lg md:text-xl font-medium mt-2 block`}>{cardData.title}</span>
        <article className="text-xs sm:text-sm mt-2 text-[#151515] flex-grow min-h-[60px] sm:min-h-[70px]">
          {cardData.description}
        </article>
        <div className="w-full flex justify-between items-center mt-auto pt-4 border-t border-white/10">
          <span className={`${fontClassName} text-sm md:text-base text-[#A3C1AD]`}>{cardData.adventureText}</span>
          <FontAwesomeIcon className='text-md sm:text-lg text-gray-700' icon={cardData.icon} />
        </div>
      </div>
    </motion.div>
  );
};


const CollectionDrehrad = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const cards = carouselCardData;
    // HIER WURDE cardBaseWidth ANGEPASST
    const cardBaseWidth = 360; 

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
        const swipeThreshold = 50; 
        if (draggedX < -swipeThreshold) { 
            navigate(1); 
        } else if (draggedX > swipeThreshold) { 
            navigate(-1); 
        }
    };

    return (
        <div className="w-full min-h-screen flex flex-col items-center p-4 sm:p-6 md:p-8 pt-12 md:pt-20 text-white">
            <h2 className='w-full text-3xl sm:text-4xl md:text-5xl font-semibold mb-10 md:mb-16 text-center tracking-wide text-[#A3C1AD] border-b-2 border-[#A3C1AD] border-dashed pb-10'>
                Schulkollektion
            </h2>

            <div 
                className="relative w-full h-[480px] sm:h-[520px] md:h-[580px] mt-4 flex items-center justify-center"
                style={{ perspective: '1200px' }} 
            >
                {cards.map((card, index) => {
                    const offset = index - activeIndex; 
                    const MAX_VISIBLE_OFFSET = 3; 

                    let xTranslate = 0;
                    let scale = 0.5;
                    let opacity = 0;
                    let zIndex = 0;
                    let rotateY = 0;
                    let blur = 10; 

                    if (Math.abs(offset) <= MAX_VISIBLE_OFFSET) {
                        const distanceFactor = Math.abs(offset);
                        opacity = 1 - (distanceFactor * 0.35);
                        scale = Math.max(0, 1 - (distanceFactor * 0.22));
                        zIndex = cards.length - distanceFactor;
                        xTranslate = (offset * cardBaseWidth * 0.55) - (offset !== 0 ? (offset > 0 ? 30 : -30) * distanceFactor : 0);
                        rotateY = offset * -25; 
                        blur = distanceFactor * 2.5;
                    } else { 
                        opacity = 0;
                        scale = 0.4;
                        xTranslate = offset * (cardBaseWidth * 0.6);
                        rotateY = offset * -18;
                        blur = 10;
                    }
                    
                    if (offset === 0) {
                        scale = 1.3;
                        opacity = 1;
                        zIndex = cards.length + 1;
                        rotateY = 0;
                        xTranslate = 0; 
                        blur = 0;
                    }
                    
                    const cardStyleProps = {
                        animate: {
                            x: xTranslate,
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
                        />
                    );
                })}
            </div>

            <div className="flex items-center space-x-6 mt-15 md:mt-[7rem] ">
                <button 
                    onClick={() => navigate(-1)} 
                    className="p-3 bg-black/50 hover:bg-[#909090] text-white rounded-full transition-all duration-200 backdrop-blur-sm hover:cursor-pointer"
                    aria-label="Vorherige Karte"
                >
                    <FontAwesomeIcon icon={faChevronLeft} className="w-5 h-5 " />
                </button>
                <div className="flex space-x-2">
                    {cards.map((_, index) => (
                        <button
                            key={`dot-${index}`}
                            onClick={() => setActiveIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-200 ${activeIndex === index ? 'bg-[#A3C1AD] scale-125' : 'bg-black/50 hover:bg-black/85'}`}
                            aria-label={`Gehe zu Karte ${index + 1}`}
                        />
                    ))}
                </div>
                <button 
                    onClick={() => navigate(1)} 
                    className="p-3 bg-black/50 hover:bg-[#909090] text-white rounded-full transition-all duration-200 backdrop-blur-sm hover:cursor-pointer"
                    aria-label="Nächste Karte"
                >
                    <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

export default CollectionDrehrad;