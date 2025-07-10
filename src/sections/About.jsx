import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `Ich automatisiere, digitalisiere und entwickle
skalierbare Lösungen mit klarem System`;
  const aboutText = `Getrieben von der Vision einer smarten digitalen Wirtschaft
Ich entwickle skalierbare digitale Lösungen die Zeit sparen Kosten senken und Prozesse automatisieren

Als Ultramarathonläufer liebe ich Herausforderungen und bringe Ausdauer und Fokus in jedes Projekt

In meiner freien Zeit
⚙️ Baue ich Automations und Open Source Tools
🎥 Teile ich Wissen auf Twitch und YouTube
🧩 Suche ich Herausforderungen auch abseits des Bildschirms
🎶 Nutze Automatisierung um Raum für Kreativität zu schaffen`;
  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });
  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Gebaut für Effizienz – mit Fokus auf Zeit- und Kostenersparnis"}
        title={"Über mich"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white">
        <img
          ref={imgRef}
          src="images/man.png"
          alt="man"
          className="w-md rounded-3xl"
        />
        <AnimatedTextLines text={aboutText} className={"w-full"} />
      </div>
    </section>
  );
};

export default About;
