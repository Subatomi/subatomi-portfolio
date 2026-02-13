import { useEffect } from "react";
import {tech} from "./config/tech-url"
import ItemBox from "./components/item-box";
export default function TechStack() {
    useEffect(() => {

        }, [])

    return (
        <div className="w-full h-fit mt-20 justify-between  p-20 gap-20 flex  ">
            <div className="flex flex-col h-full justify-items-start">
                <h1 className="text-5xl font-untitledSans font-bold text-left mb-10">About Me</h1>

                <p className="text-white/70">
                    My journey in programming started in high school where i was fascinated of web scraping from an application in github and my interest in the web and gaming. Since starting college I worked on personal projects from web development to machine learning modes. As i strive to always learn and grow.
                    <br/><br/>
                    Currently pursuing my Bachelors degree in Computer Science at Cebu Institute of Technology-University as DOST scholar in 2022 and hopefully graduating this month in May 2026.
                </p>
            </div>

            <div className="flex w-full flex-col gap-4">
                <h1 className="text-5xl font-untitledSans font-bold text-left mb-10">Technical Skills</h1>
                <div className="flex flex-col">
                    <h2 className="font-bold mb-2">Frontend</h2>
                    <div className="flex flex-row w-full gap-4 flex-wrap">
                        {Object.values(tech).slice(0,6).map((tech) => (
                            <ItemBox link={tech.link} name={tech.name} logo={tech.logo} />
                        ))}
                    </div>
                </div>

                
                <div className="flex flex-col">
                    <h2 className="font-bold mb-2">Backend</h2>
                    <div className="flex flex-row w-full gap-4 flex-wrap">
                        {Object.values(tech).slice(6,9).map((tech) => (
                            <ItemBox link={tech.link} name={tech.name} logo={tech.logo} />
                        ))}
                    </div>
                </div>

                
                <div className="flex flex-col">
                    <h2 className="font-bold mb-2">Databases</h2>
                    <div className="flex flex-row w-full gap-4 flex-wrap">
                        {Object.values(tech).slice(9,12).map((tech) => (
                            <ItemBox link={tech.link} name={tech.name} logo={tech.logo} />
                        ))}
                    </div>
                </div>

                
                <div className="flex flex-col">
                    <h2 className="font-bold mb-2">Tools</h2>
                    <div className="flex flex-row w-full gap-4 flex-wrap">
                        {Object.values(tech).slice(12,15).map((tech) => (
                            <ItemBox link={tech.link} name={tech.name} logo={tech.logo} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}   