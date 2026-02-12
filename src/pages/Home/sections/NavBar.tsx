import { motion } from "motion/react";
import { useState } from "react";

function Navigation() {
    return (
        <ul className="nav-ul  ">
            <li className="nav-li">
                <a className="nav-link" href="#about">ABOUT</a>
            </li>
            <li className="nav-li">
                <a className="nav-link" href="#works">WORKS</a>
            </li>
            <li className="nav-li">
                <a className="nav-link" href="#contact">CONTACT</a>
            </li>
        </ul>
    );
}


export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg  bg-primary/40 p-6 sm:p-4">
            <div className="mx-auto c-space max-w-7xl flex items-center justify-between py-2 sm:py-0">
                <a className="text-xl font-bold transition-colors text-neutral-400 hover:text-white" href="/">LOGO</a>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
                >
                    <img
                        src={isOpen ? "/close.svg" : "/menu.svg"}
                        className="w-6 h-6"
                        alt="toggle"
                    />
                </button>
                <nav className="hidden sm:flex">
                    <Navigation />
                </nav>
            </div>
            {isOpen && (
                <motion.div
                    className="sm:hidden text-white z-50 mt-4"
                    transition={{ duration: 1 }}
                >
                    <nav className="z-50 text-white">
                        <Navigation />
                    </nav>
                </motion.div>
            )}

            {/* <div className="flex items-center gap-10">
                <a href="/#" className="text-lg">Logo</a>
                <a 
                        href="mailto:theodoreladera.tl@gmail.com"
                    >
                    theodoreladera.tl@gmail.com
                </a>
            </div>

            <ul className="flex flex-row gap-10">
                <li>
                    <a href="#about">ABOUT</a>
                </li>
                <li>
                    <a href="#works">WORKS</a>
                </li>
                <li>
                    <a href="#contact">CONTACT</a>
                </li>
            </ul> */}
        </div>
    )
}