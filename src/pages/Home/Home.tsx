import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import NavBar from "./components/NavBar";
import { useEffect, useRef } from "react";


gsap.registerPlugin(TextPlugin);



export default function Home() {
  useEffect((
  ) => {
    const Hello = document.getElementById("hello")
    gsap.to(Hello, {
      duration: 2,
      text: "THEODORE A.LADERA",
    });
  }, [])

  
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-screen h-full max-h-screen px-7">
      <NavBar />
      <div className="Landing flex w-full h-svh max-w-[1920px] flex-row justify-between items-center pb-10 py-4">

        <div className="flex flex-col font-TronicaMono justify-start -translate-y-52">
          <h2 className="text-left text-2xl scrambled">
            HELLO I'M
          </h2>
          <h1 className="text-6xl font-untitledSans font-bold text-left scrambled" id="hello">
            THEODORE A. <br/> LADERA
          </h1>
        </div>

        <div className="relative h-full flex flex-col items-center justify-center ">
          <h3 className="text-left text-4xl w-full pl-3 font-untitledSans font-bold">An</h3>
          <div className="relative">
            <h2>
              <div className="text-left z-20 w-full text-7xl font-untitledSans font-bold  bg-gradient-to-b from-red-700 to-neutral-800 bg-clip-text text-transparent text-wrap">AI ENGINEER</div>
            </h2>
            <h2>
              <div className="text-7xl text-left pl-4 font-untitledSans font-bold -translate-y-9">Aspiring FullStack  <br/>  Developer</div>
            </h2>
          </div>

        </div>
      </div>

      <div className="AboutMe">

      </div>

      <div className="Achievements">

      </div>

      <div className="MyWorks">

      </div>

      <div className="TechStack">

      </div>

      <div className="CallToAction">

      </div>
      
      <div className="Contact">

      </div>

    </div>
  )
}