import { config } from "../../../config"
import ScrollTrigger from "gsap/ScrollTrigger" 
import DrawSVGPlugin from "gsap/DrawSVGPlugin" 
import MotionPathPlugin from "gsap/MotionPathPlugin"
import gsap from "gsap"
import { useEffect, useRef } from "react"   
import useTextAnimation from "../components/TextAnimation"

export default function Achievements() {

    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin)
    const pathRef = useRef<SVGPathElement | null>(null)
    const circleRef = useRef<SVGCircleElement | null>(null)
    const sectionRef = useRef<HTMLDivElement | null>(null)
    useTextAnimation()

    useEffect(() => {
    if (!pathRef.current || !circleRef.current || !sectionRef.current) return;

    const tl = gsap.timeline({
        scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
        // markers: true,
        id: "timeline",
        }
    });

    tl.fromTo(
        pathRef.current,
        { drawSVG: "0%" },
        { drawSVG: "100%", ease: "none" },
        0
    );

    tl.to(
        circleRef.current,
        {
        motionPath: {
            path: pathRef.current,
            align: pathRef.current,
            alignOrigin: [0.5, 1],
            autoRotate: false
        },
        ease: "none"
        },
        0
    );

    

    return () => ScrollTrigger.getAll().forEach(st => st.kill());
    }, []);

    return (
        <div className="w-full h-fit flex flex-col justify-center items-center px-6 sm:px-28 mt-20">
            <h1 className="text-4xl sm:text-6xl font-untitledSans font-bold text-left mb-10">ACHIEVEMENTS</h1>

            {/* Mobile list: simple stacked cards */}
            <div className="w-full sm:hidden flex flex-col gap-6 mt-6" ref={sectionRef}>
                {config.achievements.map((achievement) => (
                    <div key={achievement.id} data-animation="fade-in" className="p-4 bg-white/5 border border-white/10 rounded-lg">
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col gap-1 font-bold text-lg text-white">
                                {achievement.title}
                                {achievement.link && (
                                    <a href={achievement.link} target="_blank" rel="noopener noreferrer" className="text-xs text-white/40 hover:underline">
                                        View Credential 
                                    </a>
                                )}
                            </div>
                            <div className="text-center">
                                <div className="font-bold text-2xl">{achievement.year}</div>
                                <div className="font-extralight text-white/70 text-sm">{achievement.month}</div>
                            </div>
                        </div>
                        <div className="mt-3 text-white/80">{achievement.description}</div>
                    </div>
                ))}
            </div>

            {/* Desktop timeline: visible on sm and up */}
            <div className="hidden sm:grid career-timeline grid-cols-5 relative px-6 sm:px-20 mx-auto my-auto justify-around w-full h-full gap-20 mt-20" ref={sectionRef}>
                <div className="grid grid-cols-1 sm:col-span-2 gap-10">
                    {config.achievements.map((achievement) => (
                    <div  data-animation="fade-in" className="grid grid-cols-1 sm:grid-cols-2 justify-between gap-2" id={`achievement-${achievement.id}`} key={`title-${achievement.id}`}>
                                <div className="flex flex-col gap-1 font-bold text-xl text-white">
                                    {achievement.title}
                                    
                                    {achievement.link && (
                                        <a href={achievement.link} target="_blank" rel="noopener noreferrer" className="text-xs text-white/40 hover:underline">
                                            View Credential 
                                        </a>
                                    )}
                                </div>
                                <div className="w-full flex items-center justify-center">
                                    <div className="text-center flex flex-col">
                                        <div className="font-bold text-6xl">
                                            {achievement.year}
                                        </div>
                                        <div className="font-extralight text-white/70">
                                            {achievement.month}
                                        </div>
                                    </div>
                                </div>
                            </div>
                    ))}
                </div>

                <div>
                    <svg
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-full  hidden sm:block"
                    viewBox="0 0 20 1000"
                    >
                    <path
                        ref={pathRef}
                        d="M10 0 L10 1000"
                        stroke="#EFEFEF"
                        strokeWidth="3"
                        strokeDasharray="6 6"
                        vectorEffect="non-scaling-stroke"
                    />
                    <circle
                        ref={circleRef}
                        cx="10"
                        cy="0"
                        r="6"
                        fill="#EFEFEF"
                    />
                    </svg>
                </div>

                <div  className="grid col-span-2 gap-10">
                    {config.achievements.map((achievement) => (
                    <div  data-animation="fade-in" className="grid  gap-2" id={`achievement-desc-${achievement.id}`} key={`desc-${achievement.id}`}>
                                <div className="w-full">
                                    {achievement.description}
                                </div>
                            </div>
                    ))}
                </div>
            </div>
        </div>
    )
}