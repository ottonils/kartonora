"use client";

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
// Optional: Ein Herz-Icon, falls Sie eine "Made with love" Zeile hinzufügen möchten
// import { FaHeart } from 'react-icons/fa';

interface FooterLink {
  href: string;
  label: string;
}

interface SocialLink {
  href: string;
  label: string;
  icon: IconDefinition;
  hoverColor?: string; // Für spezifische Hover-Farben der Icons
}

const legalLinks: FooterLink[] = [
  { href: '/imp', label: 'Impressum' },
  { href: '/datasecure', label: 'Datenschutz' },
  { href: '/contact', label: 'Kontakt' },
];

const socialMedia: SocialLink[] = [
  { href: 'https://www.facebook.com/profile.php?id=100007685778096', label: 'Facebook', icon: faFacebook, hoverColor: '#1877F2' },
  { href: 'https://pin.it/7p9DhFqkP', label: 'Pinterest', icon: faPinterest, hoverColor: '#1DA1F2' },
  { href: 'https://www.instagram.com/kartonora?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', label: 'Instagram', icon: faInstagram, hoverColor: '#E4405F' },
];

interface FooterProps {
  companyName?: string;
}

const Footer: React.FC<FooterProps> = ({ companyName = "Kartonora" }) => {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const linkItemVariants = {
    hover: { y: -2, color: '#FFFFFF' }, // Weiß bei Hover für bessere Sichtbarkeit auf dunklem Grund
  };
  
  const socialIconVariants = {
    initial: { color: '#A0AEC0' }, // Tailwind gray-500
    hover: { scale: 1.2, transition: { type: 'spring', stiffness: 300 } },
  };

  return (
    <motion.footer
      className="bg-gray-800 text-gray-400"
      variants={footerVariants}
      initial="hidden"
      animate="visible" // Oder whileInView="visible" viewport={{ once: true, amount: 0.3 }} für Animation beim Scrollen
    >
      <div className="container mx-auto py-10 px-6 md:px-8 lg:px-12">
        {/* Hauptbereich: Copyright/Links und Social Media */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          
          {/* Linker/Oberer Bereich: Copyright und rechtliche Links */}
          <div className="mb-6 md:mb-0">
            <p className="text-sm mb-3">
              &copy; {currentYear} {companyName}. Alle Rechte vorbehalten.
            </p>
            <nav className="flex flex-col sm:flex-row justify-center md:justify-start space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6 mt-[1rem]">
              {legalLinks.map((link : FooterLink) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="text-sm hover:text-white transition-colors duration-200"
                  variants={linkItemVariants}
                  whileHover="hover"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Rechter/Unterer Bereich: Social Media Icons */}
          <div className="flex justify-center md:justify-end space-x-5">
            {socialMedia.map((social : SocialLink) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-gray-400 hover:text-white transition-colors duration-200" // Grundfarbe und Fallback-Hover
                variants={socialIconVariants}
                initial="initial"
                whileHover={{
                  ...socialIconVariants.hover, // Behält Skalierung etc.
                  color: social.hoverColor || '#FFFFFF', // Spezifische oder weiße Hover-Farbe
                }}
              >
                <FontAwesomeIcon className="w-10 h-10 sm:w-15 sm:h-6 text-[1.5rem]" icon={social.icon} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Optional: Trennlinie und zusätzliche Info */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-500">
            Entworfen mit <FontAwesomeIcon icon={faHeart} className="inline text-red-500 mx-1" /> in Zeischa 
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;