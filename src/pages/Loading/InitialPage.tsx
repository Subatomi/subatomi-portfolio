import Spline from "@splinetool/react-spline"
import gsap from "gsap";
import sceneUrl from "../../assets/scene-clean.splinecode?url"
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function InitialPage() {
    const barsRef = useRef<HTMLDivElement>(null);
    const mainBgRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    
    function onSplineMouseDown(e: any) {
        let current = e.target;
        while (current) {
            if (current.name === "Group") {
                if (barsRef.current && mainBgRef.current) {
                    const bars = barsRef.current.querySelectorAll('.stair-bar');
                    gsap.set(barsRef.current, { opacity: 1 });
                    
                    gsap.fromTo(bars,
                        { scaleY: 0 },
                        { 
                            scaleY: 1,
                            duration: 0.8,
                            ease: "power2.out",
                            stagger: {
                                amount: 0.6,
                                from: "end"
                            },
                            onComplete: () => {
                                if (mainBgRef.current) {
                                    mainBgRef.current.style.backgroundColor = "#000000";
                                }
                                gsap.to(barsRef.current, {
                                    opacity: 0,
                                    duration: 0.3,
                                    onComplete: () => {
                                        navigate("/home");
                                    }
                                });
                            }
                        }
                    );
                }
                break;
            }
            current = current.parent;
        }
    }

    return (
        <div ref={mainBgRef} className="relative w-full h-screen bg-white overflow-hidden">
            <div 
                ref={barsRef} 
                className="absolute inset-0 flex flex-col pointer-events-none"
                style={{ opacity: 0 }}
            >
                {[...Array(30)].map((_, i) => (
                    <div
                        key={i}
                        className="stair-bar flex-1 bg-black"
                        style={{
                            transformOrigin: 'bottom',
                            transform: 'scaleY(0)',
                        }}
                    />
                ))}
            </div>

            <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-full pl-8 sm:pl-0 sm:max-w-md aspect-square">
                    <Spline
                        scene={sceneUrl}
                        onSplineMouseDown={onSplineMouseDown}
                    />
                </div>
            </div>
        </div>
    );
}