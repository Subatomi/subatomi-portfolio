import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";



  // useEffect(() => {
  //   // Split into words
  //   let split = SplitText.create(".animated", { type: "words" });

  //   // For each word, append a block overlay
  //   split.words.forEach(word => {
  //     let block = document.createElement("div");
  //     block.classList.add("block");
  //     word.appendChild(block);
  //   });

  //   const tl = gsap.timeline();

  //   tl.to(".block", {
  //     scaleX: 1,
  //     duration: 0.04,
  //     ease: "power2.in",
  //     stagger: 0.1
  //   })
  //   .set(".animated", { autoAlpha: 1 })
  //   .set(".block", { transformOrigin: "right" })
  //   .to(".block", {
  //     scaleX: 0,
  //     duration: 2,
  //     ease: "power2.out",
  //     stagger: 0.1
  //   });
  // }, []);


gsap.registerPlugin(SplitText, ScrollTrigger);

interface TextRevealLeftProps {
    children: React.ReactNode;
    animateOnScroll?: boolean;
    delay?: number;
    stagger?: number;
    duration?: number;
}


export default function TextRevealLeft({
    children,
    animateOnScroll = true,
    delay = 0,
    stagger = 0.15,
    duration = 0.75
}: TextRevealLeftProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const splitRefs = useRef<any[]>([]);
    useGSAP(() => {
        if (!containerRef.current) return;

        let cancelled = false;
        let cleanup: (() => void) | undefined;

        const run = async () => {
            await document.fonts.ready;
            if (cancelled || !containerRef.current) return;

            const split = SplitText.create(containerRef.current, { type: "words", wordsClass: "reveal-word" });
            splitRefs.current.push(split);

            gsap.set(split.words, { xPercent: -100, opacity: 0 });

            const animate = () => {
                gsap.to(split.words, {
                    xPercent: 0,
                    opacity: 1,
                    duration: duration,
                    ease: "power2.out",
                    stagger: { each: stagger, from: "start" },
                    delay,
                });
            };

            if (animateOnScroll) {
                ScrollTrigger.create({
                    trigger: containerRef.current,
                    start: "top 90%",
                    once: true,
                    onEnter: animate,
                });
            } else {
                animate();
            }

            cleanup = () => {
                splitRefs.current.forEach((s) => s?.revert && s.revert());
            };
        };

        run();

        return () => {
            cancelled = true;
            cleanup?.();
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, { scope: containerRef, dependencies: [animateOnScroll, delay, stagger, duration] });

    return (
        <div ref={containerRef} style={{ display: "inline-block" }}>
            {children}
        </div>
    );
}