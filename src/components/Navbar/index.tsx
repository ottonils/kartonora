"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // AnimatePresence für Ein-/Ausblenden
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"; // faBars und faTimes für Menü-Icon
import NavLink from "../Navlink"; // Sicherstellen, dass der Pfad korrekt ist
import Image from 'next/image'; // Für das Logo-Bild
import Link from 'next/link';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Navigationspunkte für einfachere Verwaltung
    const navItems = [
        { href: "/", label: "Start" }, // Beispiel-href, anpassen
        { href: "/zeischa", label: "Dorfliebe-Zeischa" },
        { href: "/about-me", label: "Über mich" },
    ];

    // Framer Motion Varianten für das mobile Menü
    const mobileMenuVariants = {
        open: {
            opacity: 1,
            y: 0,
            height: "auto",
            transition: { type: "spring", stiffness: 300, damping: 30 }
        },
        closed: {
            opacity: 0,
            y: -20,
            height: 0,
            transition: { duration: 0.2 }
        }
    };

    return (
        <nav className="w-full border-b-2 border-b-[#A3C1AD] sticky top-0 z-50 bg-white/90 backdrop-blur-md">
            {/* Container für maximale Breite und zentrierten Inhalt mit Padding */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20"> {/* Höhe der Navbar */}

                    {/* Logo/Brand Sektion */}
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="flex-shrink-0" // Verhindert, dass das Logo zu stark schrumpft
                    >
                        <Link href="/" className="flex items-center text-gray-800 hover:text-pink-500 transition-colors duration-200">
                            <Image width={300} height={300} src={"/logo.webp"} alt="Logo" className="h-18 w-auto mr-2" /> {/* Logo-Bild */}
                        </Link>
                    </motion.div>

                    {/* Desktop Navigations-Links */}
                    <div className="hidden md:flex md:items-center md:space-x-2 lg:space-x-4">
                        {navItems.map((item) => (
                            // Annahme: Deine NavLink Komponente kann einen href und children entgegennehmen
                            // und ist bereits für Desktop gestyled.
                            <NavLink key={item.label} href={item.href}> 
                                {item.label}
                            </NavLink>
                        ))}
                    </div>

                    {/* Mobile Menu Button (Hamburger Icon) */}
                    <div className="md:hidden sm:block flex items-center">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-[#A3C1AD] hover:text-pink-600 hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500"
                            aria-controls="mobile-menu"
                            aria-expanded={isMenuOpen}
                            aria-label="Menü öffnen/schließen"
                        >
                            <span className="sr-only">Hauptmenü öffnen</span>
                            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="block h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        id="mobile-menu"
                        className="md:hidden bg-white border-b-2 border-x-2 border-[#A3C1AD] rounded-b-lg shadow-xl mx-2" // Etwas abgesetzt für besseres Aussehen
                        variants={mobileMenuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        style={{ position: 'absolute', left: 0, right: 0, top: '100%'}} // Direkt unter der Navbar positionieren
                    >
                        <div className="pt-2 pb-3 space-y-1">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.label}
                                    href={item.href}
                                    // Hier könntest du eine Prop `isMobile={true}` an NavLink übergeben,
                                    // um das Styling für mobile Links anzupassen (z.B. Block-Level, zentriert etc.)
                                    // Für dieses Beispiel nehmen wir an, NavLink passt sich an oder du passt es an.
                                    // Ein einfacher mobiler Link könnte so aussehen, wenn NavLink nicht direkt passt:
                                    // <a href={item.href} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md text-center">{item.label}</a>
                                >
                                    <span className="block w-full text-center py-2">{item.label}</span> 
                                    {/* Wrapper für besseres Klickverhalten und Styling in NavLink */}
                                </NavLink>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

export default Navbar;