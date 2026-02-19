// import { useEffect } from "react"
import TextRevealLeft from "../components/TextRevealLeft"
import { Link } from "react-router-dom";
// import { config } from "../../../config";
// import DrawSVGPlugin from "gsap/DrawSVGPlugin"

export default function Hero() {
    
    // gsap.registerPlugin(DrawSVGPlugin);
    
    // useEffect(() => {

    // })

    return (
        <div className="flex w-full min-h-screen flex-col justify-center items-center sm:mt-0 mt-15 px-6 py-20">
            <div className="flex items-center gap-2 mb-8 bg-white/5 shadow-lg px-4 py-2 rounded-xl border border-white/20 backdrop-blur-md hover:-translate-y-1 transition-transform duration-300 hover:text-white text-gray-400">
                <span className="relative flex size-3 mr-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
                </span>
                <span className="text-sm ">Available for opportunities</span>
            </div>

            <TextRevealLeft delay={0.5} stagger={0.05} animateOnScroll={false}>
                <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold text-center text-white mb-6">
                    Hi, I'm Theodore A. Ladera
                </h1>
            </TextRevealLeft>

            <p data-animation="fade-in" className="text-xl sm:text-2xl text-gray-400 text-center mb-8">
                Full-Stack Developer and <br/>  <span className="text-white">Computer Science Student at Cebu Institute of Technology - University</span>
            </p>

            <p data-animation="fade-in" className="text-base sm:text-lg text-gray-400 text-center max-w-3xl mb-12">
                Passionate about creating innovative solutions through code. Working in
                full-stack development and a bit of machine learning.
            </p>

            <div className="grid grid-cols-1 items-center  justify-center gap-4">
                
                {/* <div data-animation="fade-in" className="w-full">
                    <a 
                        href="/path-to-your-cv.pdf" 
                        download
                        className=" bg-white/5 shadow-lg border border-white/20 backdrop-blur-md hover:-translate-y-1 transition-transform duration-300 hover:text-gray/20 text-white font-semibold px-8 py-3 rounded-md flex items-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download CV
                    </a>
                </div> */}
                <div data-animation="fade-in" className="w-full">
                    <Link to="/MyWorks" className="bg-white/5 shadow-lg border w-full border-white/20 backdrop-blur-md hover:-translate-y-1 transition-transform duration-300 hover:text-gray/20 text-white font-semibold  px-8 py-3 rounded-md flex items-center justify-center">
                        View Projects
                    </Link>
                </div>
            </div>
        </div>
    )
}