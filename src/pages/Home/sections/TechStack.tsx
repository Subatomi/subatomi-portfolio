// import { useEffect } from "react";
import {tech} from "./config/tech-url"
import ItemBox from "./components/item-box";
import useTextAnimation from "../components/TextAnimation"

export default function TechStack() {
    useTextAnimation();

    return (
        <section id="techstack" className="max-w-screen h-full mt-20 grid grid-cols-1 lg:grid-cols-2 justify-between sm:p-20 gap-20 ">
            <div className="flex flex-col justify-around w-full">
                <div className="flex flex-col h-full justify-items-start">
                    <h1 data-animation="fade-in" className="text-5xl font-untitledSans font-bold text-left mb-10">About Me</h1>

                    <p  data-animation="fade-in"  className="text-gray-400">
                        Hello! You can call me Theo. <br/><br/>
                        I’m a Computer Science student with interests in Web & Mobile Development and AI/Machine Learning. I face challenging problems and continuously improve my technical skills. I adapt quickly and learn efficiently, while staying persistent when faced with difficult tasks.<br/><br/>

                        My programming journey began in high school, driven by curiosity about web technologies and gaming after exploring applications and projects from GitHub. This early exposure sparked my interest in how software works under the hood and motivated me to pursue Computer Science.<br/><br/>

                        I am currently pursuing a Bachelor of Science in Computer Science at Cebu Institute of Technology-University, a DOST-SEI Scholarship recipient since 2022, and I am on track to graduate in May 2026.
                    </p>
                </div>

                <div className="flex flex-col h- w-full justify-items-start mt-10 ">
                    <h1 data-animation="fade-in" className="text-5xl font-untitledSans font-bold text-left mb-10">What I am </h1>
                    <div className="flex flex-row flex-wrap justify-center">
                         <div data-animation="slide-in-left"  data-delay="0.8" >
                            <div className="flex flex-col gap-2 max-w-50 max-h-60 h-full w-full px-5 py-10 backdrop-blur-sm bg-white/10 border-white/10  border rounded-lg  rotate-12 z-1 hover:border-white/20 hover:-translate-y-1 hover:border-2">
                                <h2 className="font-bold mb-2 text-center">Collaborative</h2>
                                <p className="text-gray-400">Strong team player and adaptability in collaborative environments.</p>
                            </div>
                         </div>
                        
                        <div data-animation="slide-in-left"   data-delay="0.6" >
                            <div  className="flex flex-col gap-2  max-w-50 max-h-60 h-full w-full px-5 py-10 backdrop-blur-sm bg-white/10 border-white/10  border rounded-lg  z-2 -rotate-10 hover:border-white/20 hover:-translate-y-1 hover:border-2">
                                <h2 className="font-bold mb-2 text-center">Problem Solver</h2>
                                <p className="text-gray-400">Find solutions to complex problems and technical challenges.</p>
                            </div>
                        </div>
          
                        <div data-animation="slide-in-left"  data-delay="0.4" >
                            <div className="flex flex-col gap-2 max-w-50 max-h-60 h-full w-full px-5 py-10 backdrop-blur-sm bg-white/10 border-white/10 hover:border-white/20 hover:-translate-y-1 hover:border-2 border rounded-lg z-3 rotate-11">
                                <h2 className="font-bold mb-2 text-center">Learner</h2>
                                <p className="text-gray-400">Continuously seeking knowledge and improving skills in various domains.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           

            <div  className="flex flex-col gap-4 items-center w-full">
                <h1 data-animation="fade-in" className="text-5xl font-untitledSans font-bold text-center sm:text-left my-10">Technical Stack</h1>
                <div data-animation="fade-in" className="flex flex-col">
                    <h2 className="font-bold mb-2 text-center sm:text-left">Frontend</h2>
                    <div className="justify-center sm:justify-around flex flex-row w-full gap-4 flex-wrap">
                        {Object.values(tech).slice(0,6).map((tech) => (
                            <ItemBox key={tech.name || tech.link || tech.logo} link={tech.link} name={tech.name} logo={tech.logo} />
                        ))}
                    </div>
                </div>

                
                <div data-animation="fade-in" className="flex flex-col">
                    <h2 className="font-bold mb-2 text-center sm:text-left">Backend</h2>
                    <div className="justify-center flex flex-row w-full gap-4 flex-wrap">
                        {Object.values(tech).slice(6,9).map((tech) => (
                            <ItemBox key={tech.name || tech.link || tech.logo} link={tech.link} name={tech.name} logo={tech.logo} />
                        ))}
                    </div>
                </div>

                
                <div data-animation="fade-in"className="flex flex-col">
                    <h2 className="font-bold mb-2 text-center sm:text-left">Databases</h2>
                    <div className="justify-center flex flex-row w-full gap-4 flex-wrap">
                        {Object.values(tech).slice(9,12).map((tech) => (
                            <ItemBox key={tech.name || tech.link || tech.logo} link={tech.link} name={tech.name} logo={tech.logo} />
                        ))}
                    </div>
                </div>

                
                <div data-animation="fade-in" className="flex flex-col pb-0 sm:pb-20 ">
                    <h2 className="font-bold mb-2 text-center sm:text-left">Tools</h2>
                    <div className="justify-center flex flex-row w-full gap-4 flex-wrap">
                        {Object.values(tech).slice(12,15).map((tech) => (
                            <ItemBox key={tech.name || tech.link || tech.logo} link={tech.link} name={tech.name} logo={tech.logo} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}   