import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CTAButton = ({ onClick }) => {
  const btnRef = React.useRef(null);
  useGSAP(() => {
    gsap.fromTo(
      btnRef.current,
      { scale: 0.95, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.7,
        ease: "back.out(1.7)",
      }
    );
  }, []);
  return (
    <button
      ref={btnRef}
      onClick={onClick}
      className="px-8 py-4 mt-8 text-lg font-bold text-black uppercase transition-all duration-300 bg-white rounded-full shadow-lg hover:bg-gold hover:text-white focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
    >
      Kostenloses Erstgespräch buchen
    </button>
  );
};

export default CTAButton; 