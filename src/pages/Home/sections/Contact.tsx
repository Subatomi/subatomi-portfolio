import { config } from "../../../config";
import useTextAnimation from "../components/TextAnimation";

export default function Contact() {
    
    useTextAnimation();

    return(
        
        <div id="contact" className="w-full min-h-screen pb-40  sm:pb-0">

            <div className="w-full flex flex-col sm:mt-24 sm:p-24 items-center p-8 mt-12">
                <h1 data-animation="fade-in" className="sm:text-8xl font-untitledSans w-full font-bold text-left mb-10 max-text-4xl">   {config.developer.fullname}
                </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 justify-between">
                        <div className="flex flex-col gap-10 w-full text-left sm:text-2xl text-lg">
                            <div data-animation="fade-in">
                                <h3 className="text-base text-white/40">Email</h3>
                                <h3 data-animation="scramble">{config.contact.email}</h3>
                                <h4 className="text-base text-white/40">Feel free to reach out!</h4>
                            </div>

                            <div data-animation="fade-in">
                                <h3 className="text-base text-white/40">Contact</h3>
                                <h3 data-animation="scramble">{config.contact.number}</h3>
                                <h4 className="text-base text-white/40">Feel free to drop a call or text!</h4>
                            </div>

                            <div data-animation="fade-in">
                                <h3 className="text-base text-white/40">Location</h3>
                                <h3 data-animation="scramble">{config.social.location}</h3>
                                <h4 className="text-base text-white/40">Based in the beautiful Philippines</h4>
                            </div>
                    </div>

                    <div className="flex flex-col  gap-5 w-fit text-left text-2xl text-white">

                        <h3 data-animation="fade-in">Socials</h3>
                        <a href="/#" data-animation="fade-in" className="justify-between flex sm:text-5xl font-bold border-b border-white pb-2 :text-2xl :py-2 w-full">Github <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" d="M0 0h24v24H0z"></path><path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path></svg></a>

                        <a href="/#" data-animation="fade-in" className="justify-between flex sm:text-5xl font-bold border-b border-white pb-2 :text-2xl :py-2 w-full">LinkedIn <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" d="M0 0h24v24H0z"></path><path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path></svg></a>


                        <a href="/#" data-animation="fade-in" className=" justify-between flex sm:text-5xl font-bold border-b border-white pb-2">Facebook <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" d="M0 0h24v24H0z"></path><path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path></svg></a>

                        <a href="/#" data-animation="fade-in" className="justify-between flex sm:text-5xl font-bold border-b border-white pb-2 text-2xl py-2 w-full">Email <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" d="M0 0h24v24H0z"></path><path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path></svg></a>
                    </div>

                    <div className="flex flex-col w-full h-2xl text-left sm:text-2xl text-lg  ">
                        <h2 data-animation="fade-in" className="sm:text-4xl font-bold mb-2 :text-2xl">Designed and Developed by </h2>
                        <h3 data-animation="fade-in" className="">{config.developer.fullname}</h3>
                        
                        <h2 data-animation="fade-in" className=":text-sm">
                        ©2026 All rights reserved.
                        </h2>
                    </div>
                </div>
                
            </div>


          

        </div>
    )
}