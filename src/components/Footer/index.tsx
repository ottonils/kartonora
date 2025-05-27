"use client"

import { motion } from "framer-motion";

const Footer = () => {
    return (
  <>
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#151515] text-white p-4 text-center"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="inline-block"
      >
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Kartonora. Alle Rechte vorbehalten.
        </p>
      </motion.div>
    </motion.footer>
  </>
  );
};

export default Footer;