import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const CTAButton = ({ onClick }) => {
  const btnRef = useRef(null);
  const containerRef = useRef(null);
  useGSAP(() => {
    if (btnRef.current && containerRef.current) {
      gsap.fromTo(
        btnRef.current,
        { x: 200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5, // schneller
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
          },
          onComplete: () => {
            // Shake/Vibration nach Ankunft
            gsap.to(btnRef.current, {
              x: [0, -8, 8, -6, 6, -4, 4, -2, 2, 0],
              duration: 0.4,
              ease: "power1.inOut",
            });
          },
        }
      );
    }
  }, []);
  return (
    <div ref={containerRef} className="flex justify-center w-full my-16">
      <button
        ref={btnRef}
        onClick={onClick}
        className="px-10 py-5 text-lg font-bold text-black uppercase transition-all duration-300 bg-white rounded-full shadow-lg hover:bg-gold hover:text-white focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
      >
        Kostenloses Erstgespräch buchen
      </button>
    </div>
  );
};

export default CTAButton; 