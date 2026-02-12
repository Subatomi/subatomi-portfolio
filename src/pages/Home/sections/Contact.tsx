import { config } from "../../../config";

export default function Contact() {
    return(
        <div className="w-full min-h-dvh ">

            <div className="w-full flex flex-col mt-24 p-24 items-center">
                <h1 className="text-8xl font-untitledSans w-full font-bold text-left mb-10">   {config.developer.fullname}
                </h1>
                    <div className="flex flex-row w-full justify-between">
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

                    <div className="flex flex-col  gap-5 w-fit text-left text-2xl text-white">

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

                    <div className="flex flex-col gap-10 w-fit text-left text-2xl">
                        <h2 className="text-4xl font-bold mb-2">Designed and Developed by </h2>
                        <h3>{config.developer.fullname}</h3>
                        
                        <h2>
                        © 2026 All rights reserved.
                        </h2>
                    </div>
                </div>
                
            </div>


          

        </div>
    )
}