import TextRevealLeft from "../components/TextRevealLeft"
import { config } from "../../../config";
export default function Hero() {


    return (
        <div className="flex w-full  min-h-dvh flex-col justify-center items-start mt-24">
            <div className="pt-10 flex flex-row justify-around items-center w-full h-full ">        
                <div className="flex flex-col font-TronicaMono justify-start -translate-y-30 translate-x-30">
                    <h2 className="text-left text-2xl">
                    HELLO I'M
                    </h2>
                    <TextRevealLeft delay={1} stagger={0.2} animateOnScroll={false}>
                        <h1 className="text-7xl font-untitledSans font-bold text-left text-white ">
                        THEODORE A. <br /> LADERA
                        </h1>
                    </TextRevealLeft>
                </div>

                <div className="relative h-full flex flex-col items-center justify-center ">
                    <h3 className="text-left text-3xl w-full pl-3 font-untitledSans font-bold">An</h3>
                    <div className="relative text-7xl">
                        <h2>
                            <div className="text-left z-20 w-full font-untitledSans font-bold  bg-gradient-to-b from-red-700 to-neutral-800 bg-clip-text text-transparent text-wrap">AI ENGINEER</div>
                        </h2>
                        <h2>
                            <TextRevealLeft delay={1} stagger={0.2} animateOnScroll={false}>
                            <div className=" text-left pl-4 font-untitledSans font-bold -translate-y-9">FullStack Developer</div>
                            </TextRevealLeft>
                        </h2>
                    </div>
                </div>
            </div>


            <div className="flex flex-col w-full items-center justify-center p-20 ">
                {/* <h1 className="text-4xl font-untitledSans font-bold text-left mb-10">ABOUT ME</h1> */}
                <div className="border-4 border-graybackground p-8 w-7xl ">
                    <h2 className="font-untitledSans text-2xl">
                    {config.about.description}
                    </h2>
                </div>
            </div>
        </div>
    )
        
}


{/* //  <div className="flex w-full min-h-dvh flex-col justify-center pb-10 py-4 gap-40">

//          </div>
//        </div> */}