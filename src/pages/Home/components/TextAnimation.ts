import { useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";

export default function useTextAnimation() {
    useEffect(() => {

        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);
            
            const elements = document.querySelectorAll('[data-animation]');
            const smallViewportStart = (typeof window !== 'undefined' && window.innerHeight < 700) ? 'top 95%' : 'top 80%';
            
            elements.forEach((element) => {
                const animType = (element as HTMLElement).dataset.animation;
                const delay = parseFloat((element as HTMLElement).dataset.delay || '0')
                
                if (animType === 'fade-in') {
                    gsap.fromTo(element, {
                        opacity: 0,
                        y: 50
                    }, {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        delay: delay,
                        scrollTrigger: {
                            trigger: element,
                            start: smallViewportStart,
                            toggleActions: "play none none reverse",
                            // markers: true,
                        }
                    });
                }

                if (animType === 'slide-in-left') {
                    
                    gsap.fromTo(element, {
                        opacity: 0,
                        x: -100
                    }, {
                        opacity: 1,
                        x: 0,
                        stagger: 1,
                        duration: 1,
                        delay: delay,
                        scrollTrigger: {
                            trigger: element,
                            start: smallViewportStart,
                            toggleActions: "play none none reverse",
                        }
                    });
                }

                if (animType === 'scramble') {
                    const targetText = (element as HTMLElement).dataset.text || element.textContent || "";
                    
                    gsap.to(element, {
                        scrambleText: {
                            text: targetText,
                            chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@._-",
                            revealDelay: 0.5,
                            speed: 0.3
                        },
                        duration: 1,
                        delay: delay,
                        scrollTrigger: {
                            trigger: element,
                            start: smallViewportStart,
                            toggleActions: "play none none reverse",
                        }
                    });
                }
            });
            
        });
        
        return () => ctx.revert();
        
        }, []); 
}