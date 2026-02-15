import { motion } from "motion/react";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

type NavigationProps = {
    onNavigateTo: (id: string) => void;
};

function Navigation({ onNavigateTo }: NavigationProps) {
    return (
        <ul className="nav-ul font-bold">
            <li className="nav-li">
                <button className="nav-link cursor-pointer" onClick={() => onNavigateTo('techstack')}>ABOUT</button>
            </li>
            <li className="nav-li">
                <Link className="nav-link" to="/MyWorks">WORKS</Link>
            </li>
            <li className="nav-li">
                <button className="nav-link cursor-pointer" onClick={() => onNavigateTo('contact')}>CONTACT</button>
            </li>
        </ul>
    );
}


export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    function scrollToId(id: string) {
        if (location.pathname === '/' || location.pathname === '/Home') {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            return;
        }

        navigate('/Home', { state: { scrollTo: id } });
    }

    return (
        <div className="fixed inset-x-0 z-100 w-full backdrop-blur-lg bg-primary/40 p-6 sm:p-4">
            <div className="mx-auto c-space max-w-7xl flex items-center justify-between py-2 sm:py-0">
                
                <a className="text-xl font-bold transition-colors text-neutral-400 hover:text-white" href="/Home">
                    <img src="public/assets/LogoWhite.svg" alt="Logo" className="text-white w-8 h-8 mr-2" />
                </a>
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
                    <Navigation onNavigateTo={scrollToId} />
                </nav>
            </div>
            {isOpen && (
                <motion.div
                    className="sm:hidden text-white z-50 mt-4"
                    transition={{ duration: 1 }}
                >
                    <nav className="z-50 text-white">
                        <Navigation onNavigateTo={scrollToId} />
                    </nav>
                </motion.div>
            )}

        </div>
    )
}