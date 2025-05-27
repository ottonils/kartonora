"use client"; // Wichtig für die Verwendung von Framer Motion in Next.js

import { motion } from 'framer-motion';
import React from 'react';

// Define or import NavLinkProps including the new isActive prop
interface NavLinkProps {
  children: React.ReactNode;
  href?: string;
}

// Die animierte NavLink Komponente
const NavLink = ({ children, href = "#" }: NavLinkProps) => {
    return (
        <motion.a
            href={href}
            style={{
                position: 'relative', // Wichtig für die absolute Positionierung des animierten Divs
                display: 'inline-block', // Stellt sicher, dass der Link Platz einnimmt und der Hover-Bereich korrekt ist
                padding: '10px 15px', // Innenabstand für den Text
                margin: '0 10px',     // Abstand zwischen den Links
                textDecoration: 'none',
                color: '#A3C1AD',     // Standard-Textfarbe
                fontWeight: 500,
                cursor: 'pointer',
                overflow: 'hidden',
            }}
            initial="rest" // Setzt den Ausgangszustand für Kind-Varianten
            whileHover="hover" // Löst die "hover"-Variante bei Kind-Elementen aus
            // Steuert den "Ruhezustand" des Links basierend darauf, ob er aktiv ist oder nicht
        >
            {/* Der Text des Links */}
            <motion.span style={{ position: 'relative', zIndex: 1 }}>
                {children}
            </motion.span>

            {/* Das "coole" animierte Div (als Unterstrich) */}
            <motion.div
                style={{
                    position: 'absolute',
                    bottom: '5px', // Position des Unterstrichs
                    left: '0',
                    right: '0',
                    height: '3px', // Dicke des Unterstrichs
                    // Die Hintergrundfarbe wird nun dynamisch gesetzt: rot wenn aktiv, sonst die coole Farbe
                    backgroundColor: '#A3C1AD',
                    transformOrigin: 'center',
                }}
                variants={{
                    rest: { scaleX: 0 }, // Im Ruhezustand (nicht aktiv, nicht gehovert) ist der Unterstrich unsichtbar
                    hover: {
                        scaleX: 0.7, // Beim Hovern wird der Unterstrich skaliert
                        transition: { duration: 0.3, ease: 'easeOut' },
                    },
                    activeState: { // Zustand, wenn der Link aktiv ist (und nicht gehovert)
                        scaleX: 0.7, // Der Unterstrich ist sichtbar
                        // Die Farbe (rot) wird bereits durch das style-Attribut oben gesetzt
                    },
                }}
                // `initial` und `animate` Props sind hier nicht nötig, da sie vom Elternelement
                // (`motion.a`) durch die Varianten-Propagation gesteuert werden.
            />
        </motion.a>
    );
};

export default NavLink;