"use client";

import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Playwrite_DK_Loopet } from 'next/font/google';
import { useState } from "react";
import NavLink from "../Navlink";
import { motion } from "framer-motion";

const playwriteDKLoopet = Playwrite_DK_Loopet({
    weight: ['100', '200', '300', '400'],
});

const Navbar = () => {

    //RETURN HTML 
    return (
        <section className="w-full flex border-b-2 border-b-[#A3C1AD]">
                <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="w-[35%] text-[2rem] font-bold p-3 flex items-baseline"
                >
                    <h1 className={`${playwriteDKLoopet.className} ml-[2rem]`}>Kartonora</h1>
                    <FontAwesomeIcon className='ml-[1rem]' icon={faHeart} />
                </motion.div>

            <div className="w-[65%] flex justify-evenly items-center">
                <NavLink>Start</NavLink>
                <NavLink>Zeischa</NavLink>
                <NavLink>Über mich</NavLink>
            </div>
        </section>
    );
}

export default Navbar;