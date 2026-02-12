import NavBar from "./sections/NavBar";
import { } from "react";
import "../Home/components/styles.css"
// import { register } from "module";
// import TextRevealLeft from "./components/TextRevealLeft";
// import { config } from "../../config";
import Hero from "./sections/Hero";
import Works from "./sections/Works";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-dvh mx-20px">
      <NavBar />
      <Hero />
      <Works />
      <TechStack />
      <Contact/>
    </div>


      
    //   <div className="Achievements w-full min-h-dvh justify-center item-center flex py-28">
    //       <h1 className="text-6xl font-untitledSans font-bold text-left mb-10">ACHIEVEMENTS</h1>
    //   </div>


      
    //   <div className="MyWorks w-full min-h-dvh justify-left flex-col py-28 m-auto">
    //       <h1 className="text-6xl font-untitledSans font-bold text-left mb-10">My Work</h1>
    //   </div>

    //   <div className=" w-full min-h-dvh justify-left flex-col py-28 m-auto">
    //       <h1 className="text-6xl font-untitledSans font-bold text-center mb-10">Technical and Soft Skills</h1>
    //   </div>


    //   <div className=" w-full min-h-dvh flex-col py-28 m-auto">
    //       <div className="Contact pt-60 justify-start flex-col gap-20 flex">
    //         <h1 className="text-6xl font-untitledSans font-bold text-left mb-10">{config.developer.fullname}</h1>
    //         <div className="w-full flex flex-row justify-between">
    //           <div className="flex flex-col gap-10 w-fit text-left text-2xl">
    //             <div>
    //                 <h3>Email</h3>
    //                 <h3>{config.contact.email}</h3>
    //                 <h4>Feel free to reach out!</h4>
    //             </div>
                
    //             <div>
    //                 <h3>Contact</h3>
    //                 <h3>{config.contact.number}</h3>
    //                 <h4>Feel free to drop a call or text!</h4>
    //             </div>
                
    //             <div>
    //                 <h3>Location</h3>
    //                 <h3>{config.social.location}</h3>
    //                 <h4>Based in the beautiful Philippines</h4>
    //             </div>
    //           </div>

    //           <div className="flex flex-col gap-5 w-fit text-left text-2xl text-white">
                  
    //                 <h3>Socials</h3>
    //                 <a href="/#" className=" justify-between flex text-5xl font-bold border-b border-white pb-2">Github <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="em" width="1em" xmlns="http://www.w3.org/2000/svg">
    //                 <path fill="none" d="M0 0h24v24H0z"></path><path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path></svg></a>

    //                 <a href="/#" className=" justify-between flex text-5xl font-bold border-b border-white pb-2">LinkedIn <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="em" width="1em" xmlns="http://www.w3.org/2000/svg">
    //                 <path fill="none" d="M0 0h24v24H0z"></path><path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path></svg></a>
                    
                    
    //                 <a href="/#" className=" justify-between flex text-5xl font-bold border-b border-white pb-2">Facebook <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="em" width="1em" xmlns="http://www.w3.org/2000/svg">
    //                 <path fill="none" d="M0 0h24v24H0z"></path><path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path></svg></a>
                    
    //                 <a href="/#" className=" justify-between flex text-5xl font-bold border-b border-white pb-2">Email <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="em" width="1em" xmlns="http://www.w3.org/2000/svg">
    //                 <path fill="none" d="M0 0h24v24H0z"></path><path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path></svg></a>
                

    //           </div>

    //           <div className="flex flex-col gap-10 w-fit text-left text-2xl pr-20">
    //             <div>
    //                 <h2 className="text-4xl font-bold mb-2">Designed and Developed by </h2>
    //                 <h3>{config.developer.fullname}</h3>
    //             </div>
                
    //             <div>
    //               <h2>
    //                 © 2026 All rights reserved.
    //               </h2>
    //             </div>
                
    //           </div>
    //         </div>
    //       </div>
    //   </div>
      /* 

      



      <div className="CallToAction">

      </div>
      
      <div className="Contact">

      </div> */

    // </div>
  )
}