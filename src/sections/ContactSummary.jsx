import { useRef } from "react";
import Marquee from "../components/Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ContactSummary = () => {
  const containerRef = useRef(null);
  const items = [
    "Innovation",
    "Präzision",
    "Vertrauen",
    "Zusammenarbeit",
    "Exzellenz",
  ];
  const items2 = [
    "kontaktiere uns",
    "kontaktiere uns",
    "kontaktiere uns",
    "kontaktiere uns",
    "kontaktiere uns",
  ];

  useGSAP(() => {
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
        markers: false,
      },
    });
  }, []);
  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-between min-h-screen gap-12 mt-16"
    >
      <Marquee items={items} />
      <div className="overflow-hidden font-light text-center contact-text-responsive">
        <p>
          Zeigen Sie mir Ihren Prozess – ich digitalisiere und automatisiere ihn, damit Sie Zeit und Geld sparen
        </p>
      </div>
      <Marquee
        items={items2}
        reverse={true}
        className="text-white bg-[#181818] border-y-2 border-white"
        iconClassName="stroke-gold stroke-2 text-gold"
        icon="material-symbols-light:square"
      />
    </section>
  );
};

export default ContactSummary;
