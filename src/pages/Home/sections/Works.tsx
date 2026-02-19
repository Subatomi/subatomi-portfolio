import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useEffect} from "react"
import { config } from "../../../config"
import ImageGrid from "./components/ImageGrid"
import { Link } from "react-router-dom"
import LinkDisplay from "./components/LinkDisplay"

export default function Works() {

    useEffect(() => {
        if (typeof window === "undefined") return;
        let ctx = gsap.context(() => {

            gsap.registerPlugin(ScrollTrigger);

            function initGsap() {
            if (window.innerWidth <= 640) {
                ScrollTrigger.getAll().forEach(st => st.kill());
                const panels = document.getElementsByClassName("panel");
                for (let i = 0; i < panels.length; i++) {
                    const el = panels[i] as HTMLElement;
                    el.style.transform = "none";
                    el.style.transition = "none";
                }
                return;
            }

            const boxes = document.getElementsByClassName("panel");
            if (!boxes.length) return;

            const container = document.querySelector(".works-container")!;
            const rectLeft = container.getBoundingClientRect().left;
            const parentWidth = boxes[0].parentElement!.getBoundingClientRect().width;
            const padding = parseInt(window.getComputedStyle(boxes[0]).padding) / 2;

            const translateX = boxes[0].getBoundingClientRect().width * boxes.length - (rectLeft + parentWidth) + padding;

            gsap.to(".panel", {
                x: -translateX,
                ease: "none",
                scrollTrigger: {
                trigger: container,
                start: "top top",
                end: `+=${translateX}`,
                scrub: 1,
                pin: true,
                pinSpacing: true,
                id: "work",
                invalidateOnRefresh: true,
                // markers: true,
                },
            });
            }

            initGsap();

            const handleResize = () => {
            ScrollTrigger.getAll().forEach(st => st.kill());
            initGsap();
            }

            window.addEventListener("resize", handleResize);

            return () => {
            window.removeEventListener("resize", handleResize);
            ScrollTrigger.getAll().forEach(st => st.kill());
            }
        })

        return () => ctx.revert();
    }, [])


    return(
        <div id="work" className="works-container max-w-screen min-w-screen  h-fit mb-10 font-untitledSans">
            <div className="flex items-end border-graybackground h-auto sm:h-3/12 border-b-1 border-b-graybackground">
                <h1 className="text-4xl sm:text-5xl w-full font-untitledSans mx-6 mt-10 sm:mt-0 sm:mx-20 mb-4 font-semibold 
                text-center sm:text-left">My Works</h1>
            </div>
            <div className="flex h-auto sm:h-10/12 flex-col sm:flex-row sm:overflow-hidden w-90 sm:w-full works-list">
                    {config.projects.slice(0,5).map((project, index) => (
                        <div key={project.id || index} className="panel max-w-2xl w-full h-auto shrink-0 grid grid-cols-1 justify-between items-end sm:border-r-2 border-b-2 sm:border-b-0 border-graybackground px-6 sm:px-20 py-8 sm:py-15">
                        <div className="flex flex-col sm:flex-row justify-between w-full mb-5 gap-4">
                            <h3 className="text-3xl sm:!text-6xl font-bold w-fit h-fit text-left">0{index+1}</h3>
                            <div>
                                <h4 className="text-xl sm:text-4xl font-bold">{project.title}</h4>
                                <p className="text-sm text-white/60 font-extralight">{project.category}</p>
                            </div>
                        </div>
                        <ImageGrid project={project} isHome={true} /> 
                        <div>
                            <p className="text-sm mt-5 text-left sm:text-right text-white/70">{project.description}</p>
                        </div>

                        <div className="flex justify-end gap-8 sm:gap-20 w-full my-4">
                            <LinkDisplay link={project.link} repoLink={project.repoLink} />
                        </div>
                    </div>
                ))}
                <div className="panel max-w-2xl w-full h-auto shrink-0 grid grid-cols-1 justify-center items-center sm:border-r-2 border-b-2 border-graybackground px-6 sm:px-20 py-12 sm:py-15 text-center">
                    <div className="flex flex-col">   
                        <h1 className="text-6xl mb-3 font-bold">Want to see more?</h1>
                        <h3 className="mb-10">Explore all my projects and creation</h3>
                        <Link to="/MyWorks">
                            <div className="text-sm font-bold text-black bg-white w-fit mx-auto px-8 py-4 rounded-xl hover:bg-white/95 hover:-translate-y-1 transition-all duration-300">View All Projects</div>
                        </Link>
                    </div>
                </div>
              
            </div>
        </div>
    )
}