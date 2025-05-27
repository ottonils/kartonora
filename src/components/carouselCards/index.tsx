"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
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
});

interface CarouselConfig {
    cardWidthClass: string;
    cardBaseWidth: number;
    activeCardScale: number;
    maxVisibleOffset: number; // Max visual offset from active card in either direction
    rotateYFactor: number;
    blurFactor: number;
    xTranslateMultiplier: number;
    stageHeightClass: string;
}

interface CarouselCardProps {
    cardData: CarouselCardData;
    styleProps: {
        animate: {
            x: string;
            y: string;
            scale: number;
            opacity: number;
            zIndex: number;
            rotateY: number;
            filter: string;
        };
        onDragEndCard?: (draggedX: number) => void;
    };
    fontClassName: string;
    onCardClick: () => void;
    cardWidthClass: string;
}

const CarouselCard = ({ cardData, styleProps, fontClassName, onCardClick, cardWidthClass }: CarouselCardProps) => {
    return (
        <motion.div
            className={`absolute ${cardWidthClass} h-auto`}
            style={{
                transformStyle: "preserve-3d",
                left: '50%',
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
            <div className="w-full h-full flex flex-col p-4 sm:p-5 bg-white backdrop-blur-lg rounded-2xl shadow-xl border border-white/20">
                <img
                    src={cardData.imgSrc}
                    alt={cardData.title}
                    className="w-full rounded-xl object-cover aspect-[4/3] mb-3 sm:mb-4 your-image-rendering-class" // Klasse hinzufügen
                    draggable="false"
                />
                <span className={`${fontClassName} text-[#A3C1AD] text-base sm:text-lg md:text-xl font-medium mt-2 block`}>{cardData.title}</span>
                <article className="text-xs sm:text-sm mt-1 sm:mt-2 text-[#151515] flex-grow min-h-[50px] sm:min-h-[60px]">
                    {cardData.description}
                </article>
                <div className="w-full flex justify-between items-center mt-auto pt-3 sm:pt-4 border-t border-white/10">
                    <span className={`${fontClassName} text-[0.7rem] sm:text-xs md:text-sm text-[#A3C1AD]`}>{cardData.adventureText}</span>
                    <FontAwesomeIcon className='text-base sm:text-lg text-gray-700' icon={cardData.icon} />
                </div>
            </div>
        </motion.div>
    );
};

const CarouselCollection = (props: { title: string, data: CarouselCardData[] }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const cards = props.data;
    const numCards = cards.length;

    const initialConfig: CarouselConfig = {
        cardWidthClass: "w-[420px]",
        cardBaseWidth: 315,
        activeCardScale: 1.2,
        maxVisibleOffset: 2, // Number of cards visible on each side of the active one
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
                    maxVisibleOffset: 1, // Fewer cards on smaller screens
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


    const navigate = (direction: number) => {
        setActiveIndex(prevIndex => {
            let newIndex = prevIndex + direction;
            if (newIndex < 0) {
                newIndex = numCards - 1; // Loop to last
            } else if (newIndex >= numCards) {
                newIndex = 0; // Loop to first
            }
            return newIndex;
        });
    };

    const handleCardClick = (index: number) => {
        // Calculate difference to determine navigation direction for Rondell
        let diff = index - activeIndex;
        // Normalize diff for shortest path in Rondell
        if (Math.abs(diff) > numCards / 2) {
            diff = diff > 0 ? diff - numCards : diff + numCards;
        }

        // If clicked card is not the active one, navigate
        // This logic is simplified if clicking directly sets it active
        // For a rondell, if you click a card that is visually e.g. 2 steps away,
        // you want it to become the active card.
        setActiveIndex(index);
    };

    const handleCardDragEnd = (draggedX: number) => {
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
                    // --- START RONDELL OFFSET CALCULATION ---
                    const offsetRaw = index - activeIndex;
                    let offset = offsetRaw;

                    // Adjust offset for circularity (Rondell effect)
                    // If a card is more than halfway around the carousel,
                    // treat it as being on the other side for visual positioning.
                    if (numCards > 0) { // Avoid division by zero if cards array is empty
                        const half = numCards / 2;
                        if (offsetRaw > half) {
                            offset = offsetRaw - numCards;
                        } else if (offsetRaw < -half) {
                            offset = offsetRaw + numCards;
                        }
                    }
                    // --- END RONDELL OFFSET CALCULATION ---

                    let xTranslate = 0;
                    let scale = 0.5;
                    let opacity = 0;
                    let zIndex = 0;
                    let rotateY = 0;
                    let blur = 10;

                    const absOffset = Math.abs(offset);

                    if (absOffset <= config.maxVisibleOffset) {
                        const distanceFactor = absOffset;
                        opacity = Math.max(0, 1 - (distanceFactor * 0.4));
                        scale = Math.max(0, 1 - (distanceFactor * 0.25));
                        zIndex = numCards - distanceFactor; // Higher zIndex for closer cards
                        const perspectivePush = (offset !== 0 ? (offset > 0 ? 25 : -25) * distanceFactor : 0) * (config.cardBaseWidth / 300);
                        xTranslate = (offset * config.cardBaseWidth * config.xTranslateMultiplier) - perspectivePush;
                        rotateY = offset * config.rotateYFactor;
                        blur = distanceFactor * config.blurFactor;
                    } else {
                        // Cards beyond maxVisibleOffset (should be few in a Rondell if maxVisibleOffset is large enough)
                        opacity = 0; // Effectively hide them
                        scale = 0.3;
                        xTranslate = offset * (config.cardBaseWidth * 0.7);
                        rotateY = offset * config.rotateYFactor;
                        blur = 5;
                        zIndex = 0; // Send them to the back
                    }

                    if (offset === 0) { // Active card
                        scale = config.activeCardScale;
                        opacity = 1;
                        zIndex = numCards + 1; // Highest zIndex for active card
                        rotateY = 0;
                        xTranslate = 0;
                        blur = 0;
                    }

                    const cardStyleProps = {
                        animate: {
                            x: `calc(-50% + ${xTranslate}px)`,
                            y: "-50%",
                            scale: scale,
                            opacity: opacity,
                            zIndex: zIndex,
                            rotateY: rotateY,
                            filter: `blur(${blur}px)`,
                        },
                        onDragEndCard: offset === 0 ? handleCardDragEnd : undefined, // Only allow dragging active card
                    };

                    return (
                        <CarouselCard
                            key={card.id}
                            cardData={card}
                            styleProps={cardStyleProps}
                            fontClassName={playwriteDKLoopet.className}
                            onCardClick={() => handleCardClick(index)} // Click any card to make it active
                            cardWidthClass={config.cardWidthClass}
                        />
                    );
                })}
            </div>

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
                            onClick={() => setActiveIndex(index)} // Direct navigation with dots
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