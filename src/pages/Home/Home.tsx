import NavBar from "./sections/NavBar";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../Home/components/styles.css"
// import { register } from "module";
// import TextRevealLeft from "./components/TextRevealLeft";
// import { config } from "../../config";
import Hero from "./sections/Hero";
import Works from "./sections/Works";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";
import Achievements from "./sections/Achievements";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const state = (location as any).state;
    const target = state?.scrollTo || (location.hash ? location.hash.replace('#','') : null);
    if (!target) return;

    const t = setTimeout(() => {
      const el = document.getElementById(target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      try { window.history.replaceState({}, '', window.location.pathname); } catch {}
    }, 50);

    return () => clearTimeout(t);
  }, [location]);

  return (
    <div className="lenis flex flex-col w-full min-h-screen px-5 scroll-smooth">
      <NavBar />
      <Hero />
      <TechStack />
      <Achievements />
      <Works />
      <Contact/>
    </div>
  )
}