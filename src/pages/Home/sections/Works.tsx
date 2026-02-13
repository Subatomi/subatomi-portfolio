import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useEffect} from "react"
import { config } from "../../../config"

export default function Works() {
    useEffect(() => {
        if (typeof window === 'undefined') return;
        if (window.innerWidth <= 768) return;
        gsap.registerPlugin(ScrollTrigger);

        let translateX: number = 0;

        function setTranslateX() {
            const box = document.getElementsByClassName("panel");
            

            if (box.length === 0) return;
            const rectLeft = document
                .querySelector(".works-container")!
                .getBoundingClientRect().left;
       
            const rect = box[0].getBoundingClientRect();
            const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
            
            let padding: number =
                parseInt(window.getComputedStyle(box[0]).padding) / 2;
                
            translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
            
        }


        setTranslateX();


        console.log(translateX);
        let timeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".works-container",
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

        timeline.to(".panel", {
            x: -translateX,
            ease: "none",
        });
    }, [])


    return(
        <div id="work" className="works-container max-w-screen min-w-screen h-[calc(100vh-80px)] pb-2 font-untitledSans">
            <div className="flex items-end border-graybackground h-3/12 border-b-1 border-b-graybackground">
                <h1 className="text-5xl font-untitledSans mx-20 mb-4 font-semibold text-left">My Works</h1>
            </div>
            <div className="flex h-10/12 flex-row overflow-x-hidden w-screen works-list">
                {config.projects.slice(0,5).map((project, index) => (
                      <div className="panel flex max-w-2xl w-full h-full shrink-0 flex-col justify-between items-end border-r-2 border-graybackground  bg-gray-500 px-20 py-15">
                        <div className="flex space-between w-full mb-5">
                            <h3 className="!text-5xl w-full h-fit text-left">0{index+1}</h3>
                            <div>
                                <h4 className="text-2xl font-bold">{project.title}</h4>
                                <p className="text-base font-extralight">{project.category}</p>
                            </div>
                        </div>
                        <div>
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover"/>
                        </div>
                        <div className="flex justify-end gap-20 w-full">
                            <a href={project.link} className="text-sm font-bold border-b-2 border-graybackground">Repo</a>
                            <a href={project.link} className="text-sm font-bold border-b-2 border-graybackground">View Project</a>
                        </div>
                    </div>
                ))}
              
            </div>
        </div>
    )
}