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
      className="flex flex-col items-center justify-between min-h-screen gap-8 sm:gap-12 mt-16"
    >
      <Marquee items={items} />
      <div className="overflow-hidden font-light text-center contact-text-responsive px-4 sm:px-6 md:px-8">
        <p className="break-words">
          Zeigen Sie mir Ihren Prozess – ich digitalisiere und automatisiere ihn, damit Sie Zeit und Geld sparen
        </p>
      </div>
      <Marquee
        items={["kontaktiere uns", "kontaktiere uns", "kontaktiere uns"]}
        reverse={true}
        className="text-white bg-[#181818] border-y-2 border-white"
        iconClassName="stroke-gold stroke-2 text-gold text-xl sm:text-2xl"
        icon="material-symbols-light:square"
        gap="gap-x-32 sm:gap-x-48 md:gap-x-64"
      />
    </section>
  );
};

export default ContactSummary;
