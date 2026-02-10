import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface BlockRevealProps {
    children: React.ReactNode;
    animateOnScroll?: boolean;
    delay?: number;
    blockcolor?: string;
    stagger?: number;
    duration?: number;
}

export default function BlockReveal({
    children,
    animateOnScroll = true,
    delay = 0,
    blockcolor = "#000",
    stagger = 0.15,
    duration = 0.75

}: BlockRevealProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const splitRefs = useRef<any[]>([]);
    const lines = useRef<Element[]>([]);
    const blocks = useRef<HTMLDivElement[]>([]);

    useGSAP(() => {
        if (!containerRef.current) return;

        let cleanupFn: (() => void) | undefined;
        let cancelled = false;

        const run = async () => {
            await document.fonts.ready;
            if (cancelled || !containerRef.current) return;

            splitRefs.current = [];
            lines.current = [];
            blocks.current = [];

            let elements: Element[] = [];

            if (containerRef.current.hasAttribute("data-copy-wrapper")) {
                elements = Array.from(containerRef.current.children) as Element[];
            } else {
                elements = [containerRef.current as Element];
            }

            elements.forEach((element) =>{
                const split = SplitText.create(element as any, {
                    type: "lines",
                    linesClass: "block-line--",
                    lineThreshold: 0.1,
                });

                splitRefs.current.push(split);

                split.lines.forEach((line: Element) =>{
                    const wrapper = document.createElement("div");
                    wrapper.className = "block-line-wrapper";
                    line.parentNode?.insertBefore(wrapper, line);
                    wrapper.appendChild(line);

                    const block = document.createElement("div");
                    block.className = "block-revealer";
                    block.style.backgroundColor = blockcolor;
                    wrapper.appendChild(block);

                    lines.current.push(line);
                    blocks.current.push(block);
                });
            });

            gsap.set(lines.current, { yPercent: 100 });
            gsap.set(blocks.current, { scaleX: 0, transformOrigin: "left center" });

            const createBlockRevealAnimation = (
                block: HTMLDivElement,
                line: Element,
                index: number
            ) => {
                const tl = gsap.timeline({ delay: delay + index * stagger });
                tl.to(block, { scaleX: 1, duration, ease: "power4.inOut" });
                tl.to(line, { yPercent: -10, duration, ease: "power4.inOut" });
                tl.set(block, { transformOrigin: "right" });
                tl.to(block, { scaleX: 0, duration, ease: "power4.inOut" });
                return tl;
            };

            if (animateOnScroll) {
                blocks.current.forEach((block, index) => {
                    const tl = createBlockRevealAnimation(block, lines.current[index], index);
                    tl.pause();

                    ScrollTrigger.create({
                        trigger: containerRef.current,
                        start: "top 90%",
                        once: true,
                        onEnter: () => tl.play(),
                        onLeaveBack: () => tl.reverse(),
                    });
                });
            } else {
                blocks.current.forEach((block, index) => {
                    createBlockRevealAnimation(block, lines.current[index], index);
                });
            }

            cleanupFn = () => {
                splitRefs.current.forEach((split) => split?.revert());

                const wrappers = containerRef.current?.querySelectorAll(".block-line-wrapper");
                wrappers?.forEach((wrapper) => {
                    if (wrapper.parentNode && wrapper.firstChild) {
                        wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
                        wrapper.remove();
                    }
                });
            };
        };

        run();

        return () => {
            cancelled = true;
            cleanupFn?.();
        };
    },
    {
        scope: containerRef,
        dependencies: [animateOnScroll, delay, blockcolor ,stagger, duration]
    })

    return (
        <div ref={containerRef} data-copy-wrapper="true">
            {children}
        </div>
    )

}