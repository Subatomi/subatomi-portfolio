import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useEffect} from "react"

export default function Works() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let contents = gsap.utils.toArray(".panel");

        const tween = gsap.to(contents, {
            xPercent: -100 * (contents.length - 1),
            ease: "none",
        });

        // console.log(contents)
        ScrollTrigger.create({
            trigger: ".works-container",
            start: "top top",
            scrub: true,
            pin: true,
            animation: tween,
            // markers: true,   
        });
    }, [])


    return(
        <div className=" works-container flex flex-row overflow-x-hidden ">
                <div className="panel px-20 flex flex-col shrink-0 min-h-screen min-w-screen pt-50">
                    <h1 className="text-6xl font-untitledSans font-bold text-left mb-10">My Works</h1>
                    <div className="min-w-full min-h-fullflex flex-row justify-around items-end bg-white">
asd
                    </div>
                    {/* <h1 className="text-6xl font-untitledSans font-bold text-left mb-10">My Works</h1> */}
                </div>

                <div className="panel bg-blue-200 grid place-items-center shrink-0 min-h-screen min-w-screen">
                    <h1 className="text-6xl font-untitledSans font-bold text-left mb-10">My Works</h1>
                </div>

                <div className="panel bg-green-200 grid place-items-center shrink-0 min-h-screen min-w-screen">
                    <h1 className="text-6xl font-untitledSans font-bold text-left mb-10">My Works</h1>
                </div>
        </div>
    )
}