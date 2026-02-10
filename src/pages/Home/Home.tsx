import NavBar from "./components/NavBar";
import { } from "react";
import "../Home/components/styles.css"
// import { register } from "module";
import TextRevealLeft from "./components/TextRevealLeft";
import { config } from "../../config";


export default function Home() {






  return (
    <div className="flex flex-col items-center justify-center max-w-screen min-h-screen px-7 gap-5">
       <NavBar />
      {/*
      <div className="bg-amber-700 w-full min-h-dvh">213</div>
      <div className="bg-green-700 w-full min-h-dvh">213</div> */}
      <div className="flex w-full min-h-dvh flex-col justify-center pb-10 py-4 gap-40 translate-y-15 ">
        <div className="flex flex-row justify-around items-center w-full h-full ">        
          <div className="flex flex-col font-TronicaMono justify-start -translate-y-30 translate-x-30">
            <h2 className="text-left text-2xl">
              HELLO I'M
            </h2>
              <TextRevealLeft delay={1} stagger={0.2} animateOnScroll={false}>
                <h1 className="text-6xl font-untitledSans font-bold text-left text-white ">
                  THEODORE A. <br /> LADERA
                </h1>
              </TextRevealLeft>
          </div>

          <div className="relative h-full flex flex-col items-center justify-center ">
            <h3 className="text-left text-4xl w-full pl-3 font-untitledSans font-bold">An</h3>
            <div className="relative">
              <h2>
                <div className="text-left z-20 w-full text-7xl font-untitledSans font-bold  bg-gradient-to-b from-red-700 to-neutral-800 bg-clip-text text-transparent text-wrap">AI ENGINEER</div>
              </h2>
              <h2>
                <TextRevealLeft delay={1} stagger={0.2} animateOnScroll={false}>
                  <div className="text-7xl text-left pl-4 font-untitledSans font-bold -translate-y-9">FullStack Developer</div>
                </TextRevealLeft>
              </h2>
            </div>
          </div>
        </div>


        <div className="flex flex-col w-full items-center justify-center ">
          {/* <h1 className="text-4xl font-untitledSans font-bold text-left mb-10">ABOUT ME</h1> */}
          <div className="border-4 border-graybackground p-8 w-7xl mt-10">
            <h2 className="font-untitledSans text-4xl">
              {config.about.description}
            </h2>
          </div>
        </div>
      </div>

      
      <div className="Achievements w-full min-h-dvh justify-center item-center flex py-28">
          <h1 className="text-8xl font-untitledSans font-bold text-left mb-10">ACHIEVEMENTS</h1>
      </div>


      
      <div className="MyWorks min-w-11/12 min-h-dvh justify-left flex-col py-28 m-auto">
          <h1 className="text-8xl font-untitledSans font-bold text-left mb-10">My Work</h1>
      </div>

      <div className=" min-w-11/12 min-h-dvh justify-left flex-col py-28 m-auto">
          <h1 className="text-8xl font-untitledSans font-bold text-center mb-10">Technical and Soft Skills</h1>
      </div>


      <div className=" min-w-11/12 min-h-dvh flex-col py-28 m-auto">
          <div className="Contact pt-60 justify-start flex-col gap-20 flex">
            <h1 className="text-9xl font-untitledSans font-bold text-left mb-10">{config.developer.fullname}</h1>
            <div className="w-full flex flex-row justify-between">
              <div className="flex flex-col gap-10 w-fit text-left text-2xl">
                <div>
                    <h3>Email</h3>
                    <h3>{config.contact.email}</h3>
                    <h4>Feel free to reach out!</h4>
                </div>
                
                <div>
                    <h3>Contact</h3>
                    <h3>{config.contact.number}</h3>
                    <h4>Feel free to drop a call or text!</h4>
                </div>
                
                <div>
                    <h3>Location</h3>
                    <h3>{config.social.location}</h3>
                    <h4>Based in the beautiful Philippines</h4>
                </div>
              </div>

              <div className="flex flex-col gap-5 w-fit text-left text-2xl text-white">
                  
                    <h3>Socials</h3>
                    <a href="/#" className=" justify-between flex text-5xl font-bold border-b border-white pb-2">Github <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" d="M0 0h24v24H0z"></path><path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path></svg></a>

                    <a href="/#" className=" justify-between flex text-5xl font-bold border-b border-white pb-2">LinkedIn <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" d="M0 0h24v24H0z"></path><path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path></svg></a>
                    
                    
                    <a href="/#" className=" justify-between flex text-5xl font-bold border-b border-white pb-2">Facebook <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" d="M0 0h24v24H0z"></path><path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path></svg></a>
                    
                    <a href="/#" className=" justify-between flex text-5xl font-bold border-b border-white pb-2">Email <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" d="M0 0h24v24H0z"></path><path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path></svg></a>
                

              </div>

              <div className="flex flex-col gap-10 w-fit text-left text-2xl pr-20">
                <div>
                    <h2 className="text-4xl font-bold mb-2">Designed and Developed by </h2>
                    <h3>{config.developer.fullname}</h3>
                </div>
                
                <div>
                  <h2>
                    © 2026 All rights reserved.
                  </h2>
                </div>
                
              </div>
            </div>
          </div>
      </div>
      {/* 

      



      <div className="CallToAction">

      </div>
      
      <div className="Contact">

      </div> */}

    </div>
  )
}

<style>
  
</style>