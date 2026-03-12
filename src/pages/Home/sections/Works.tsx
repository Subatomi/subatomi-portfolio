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

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
        const mm = gsap.matchMedia();

        mm.add("(min-width: 1536px)", () => { // 2xl
        initGsap("top top");
        });

        mm.add("(max-width: 1535px) and (min-width: 641px)", () => {
        initGsap("10% top");
        });

        mm.add("(max-width: 640px)", () => {
        ScrollTrigger.getAll().forEach(st => st.kill());
        gsap.set(".panel", { clearProps: "all" });
        });

        function initGsap(startPoint: string) {
        const boxes = document.getElementsByClassName("panel");
        if (!boxes.length) return;

        const container = document.querySelector(".works-container");
        if (!container) return;

        const rectLeft = container.getBoundingClientRect().left;
        const parentWidth = boxes[0].parentElement?.getBoundingClientRect().width ?? 0;
        const padding = parseInt(window.getComputedStyle(boxes[0]).padding) / 2;

        const translateX =
            boxes[0].getBoundingClientRect().width * boxes.length -
            (rectLeft + parentWidth) +
            padding;

        gsap.to(".panel", {
            x: -translateX,
            ease: "none",
            scrollTrigger: {
            trigger: container,
            start: startPoint,
            end: `+=${translateX}`,
            scrub: 1,
            pin: true,
            pinSpacing: true,
            invalidateOnRefresh: true,
            // markers: true
            }
        });
        }
    });

    return () => ctx.revert();
    }, []);


    return(
        <div id="work" className="works-container max-w-screen min-w-screen  h-fit mb-10 font-untitledSans">
            <div className="flex items-end border-graybackground h-auto sm:h-3/12 border-b-1 border-b-graybackground">
                <h1 className="text-4xl sm:text-5xl w-full font-untitledSans mx-6 mt-10 sm:mt-0 sm:mx-20 mb-4 font-semibold 
                text-center sm:text-left">My Works</h1>
            </div>
            <div className="flex h-auto sm:h-10/12 flex-col sm:flex-row sm:overflow-hidden w-90 sm:w-full works-list">
                    {config.projects.slice(0,5).map((project, index) => (
                        <div key={project.id || index} className="panel max-w-2xl w-full  sm:min-h-screen 2xl:min-h-[80vh] shrink-0 flex flex-col sm:border-r-2 border-b-2 sm:border-b-0 border-graybackground px-2 sm:px-15 py-4 sm:py-10">
                        {/* Header Section */}
                        <div className="flex flex-col sm:flex-row justify-between w-full mb-3 gap-2 shrink-0">
                            <h3 className="text-2xl sm:!text-6xl font-bold w-fit h-fit text-left">0{index+1}</h3>
                            <div>
                                <h4 className="text-base sm:text-4xl font-bold">{project.title}</h4>
                                <p className="text-xs sm:text-sm text-white/60 font-extralight">{project.category}</p>
                            </div>
                        </div>
                        
                        {/* Image Section - Fixed */}
                        <div className="h-32 sm:h-64 shrink-0 mb-3">
                          <ImageGrid project={project} isHome={true} />
                        </div>
                        
                        {/* Content Section */}
                        <div className="flex flex-col overflow-hidden mb-3">
                            <p className="text-xs sm:text-sm text-white font-bold shrink-0">Technology Used:</p>
                            {project.technologies && project.technologies.length > 0 && (
                              <div className="mt-1 sm:mt-2 flex flex-wrap gap-1 sm:gap-2 justify-start sm:justify-s mb-2 sm:mb-3 shrink-0">
                                {project.technologies.map((tech, idx) => (
                                  <span
                                    key={idx}
                                    className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded-full border border-white/20"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            )}

                            <p className="text-xs sm:text-sm mt-1 sm:mt-2 text-left sm:text-right text-white/70 line-clamp-3 sm:line-clamp-4">{project.description}</p>
                        </div>

                        {/* Links Section - Fixed */}
                        <div className="flex flex-col sm:flex-row flex-wrap justify-start sm:justify-end gap-2 sm:gap-8 w-full shrink-0">
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