// src/components/RandomDotsBackground.tsx
'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';

interface Dot {
  id: number;
  cx: number;
  cy: number;
}

interface RandomDotsBackgroundProps {
  dotColor?: string;
  dotRadius?: number;
  density?: number;
  className?: string;
}

const RandomDotsBackground: React.FC<RandomDotsBackgroundProps> = ({
  dotColor: initialDotColor = 'rgba(229, 231, 235, 0.3)',
  dotRadius: initialDotRadius = 1,
  density: initialDensity = 0.5,
  className = '',
}) => {
  const [dots, setDots] = useState<Dot[]>([]);
  const [viewBoxDimensions, setViewBoxDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  // Ref, um sicherzustellen, dass die Punktegenerierung nur einmal stattfindet
  const dotsGeneratedRef = useRef(false);

  useEffect(() => {
    // Dieser useEffect Hook läuft dank des leeren Abhängigkeitsarrays [] nur einmal beim Mounten.
    // Alle hier verwendeten Werte (initialDotColor, initialDensity etc.) sind die vom initialen Render.
    
    if (!containerRef.current) {
      return; // Stelle sicher, dass der Container existiert
    }

    const currentContainer = containerRef.current; // Kopie für den Cleanup

    const resizeObserver = new ResizeObserver(entries => {
      // Prüfe, ob die Punkte schon generiert wurden oder der Container nicht mehr existiert
      if (dotsGeneratedRef.current || !containerRef.current) {
        // Wenn ja, entferne den Observer vom spezifischen Element und tue nichts mehr
        if (containerRef.current) { // Nur wenn currentContainer noch gültig ist
            resizeObserver.unobserve(containerRef.current);
        }
        return;
      }

      const entry = entries[0];
      if (entry.contentRect.width > 0 && entry.contentRect.height > 0) {
        const currentWidth = entry.contentRect.width;
        const currentHeight = entry.contentRect.height;

        setViewBoxDimensions({ width: currentWidth, height: currentHeight });

        const numberOfDotsToGenerate = Math.floor((currentWidth * currentHeight * initialDensity) / 10000);
        const newGeneratedDots: Dot[] = [];
        for (let i = 0; i < numberOfDotsToGenerate; i++) {
          newGeneratedDots.push({
            id: i,
            cx: Math.random() * currentWidth,
            cy: Math.random() * currentHeight,
          });
        }
        setDots(newGeneratedDots);
        dotsGeneratedRef.current = true; // Markiere, dass die Punkte generiert wurden

        // Wichtig: Nachdem die Punkte erfolgreich generiert wurden, entferne den Observer.
        resizeObserver.unobserve(currentContainer); // Verwende die oben erstellte Kopie
      }
    });

    resizeObserver.observe(currentContainer);

    return () => {
      // Aufräumen: Vollen disconnect beim Unmounten der Komponente
      resizeObserver.disconnect();
    };
  }, []); // Leeres Array: Effekt läuft nur einmal nach dem ersten Rendern.

  const svgElement = useMemo(() => {
    if (viewBoxDimensions.width === 0 || viewBoxDimensions.height === 0) {
      return null;
    }
    return (
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${viewBoxDimensions.width} ${viewBoxDimensions.height}`}
        preserveAspectRatio="xMidYMid slice"
      >
        {dots.map(dot => (
          <circle key={dot.id} cx={dot.cx} cy={dot.cy} r={initialDotRadius} fill={initialDotColor} />
        ))}
      </svg>
    );
  }, [dots, viewBoxDimensions, initialDotColor, initialDotRadius]);

  return (
    <div
      ref={containerRef} // Referenz auf dieses Div setzen
      className={`absolute inset-0 -z-10 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {svgElement}
    </div>
  );
};

export default RandomDotsBackground;