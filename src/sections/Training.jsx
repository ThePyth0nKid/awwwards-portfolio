import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Training = () => {
  const text = `Ich vermittle praxisnahes Wissen für die digitale Transformation
und befähige Teams, KI und Automatisierung erfolgreich einzusetzen.`;
  
  const trainingText = `Digitalisierung und KI verändern die Arbeitswelt fundamental
Ich vermittle das Wissen und die Kompetenzen die Teams brauchen um diese Transformation erfolgreich zu gestalten

Mein Ansatz kombiniert theoretisches Verständnis mit praktischer Umsetzung
Von Grundlagen bis zur Implementierung begleite ich Sie durch den gesamten Prozess

Schulungen und Workshops
🎓 KI-Grundlagen für Unternehmen und Teams
⚙️ Automatisierung mit n8n Make und anderen Tools
🔒 DSGVO-konforme Implementierung und Datenschutz
📈 Strategische Beratung für digitale Transformation`;

  const trainingRef = useRef(null);

  useGSAP(() => {
    gsap.to("#training", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#training",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(trainingRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(trainingRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: trainingRef.current },
    });
  });

  return (
    <section id="training" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Wissen vermitteln, Kompetenzen aufbauen"}
        title={"Schulung & Coaching"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white">
        <div className="w-full lg:w-1/2">
          <AnimatedTextLines text={trainingText} className={"w-full"} />
        </div>
        <div 
          ref={trainingRef}
          className="w-full lg:w-1/2 p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl"
        >
          <div className="space-y-8">
            <div className="border-b border-white/20 pb-6">
              <h3 className="text-2xl font-light text-white mb-4">Digitalisierung & KI-Schulungen</h3>
              <p className="text-lg text-white/80 leading-relaxed">
                Von Grundlagen bis zur praktischen Umsetzung: Ich vermittle das Wissen, das Ihr Team braucht, um KI und Automatisierung erfolgreich in bestehende Prozesse zu integrieren.
              </p>
            </div>
            
            <div className="border-b border-white/20 pb-6">
              <h3 className="text-2xl font-light text-white mb-4">Individuelles Coaching & Beratung</h3>
              <p className="text-lg text-white/80 leading-relaxed">
                Maßgeschneiderte Unterstützung für Führungskräfte und Teams bei der digitalen Transformation. Von der Strategie bis zur Umsetzung.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-light text-white mb-4">Workshops & Hands-on Training</h3>
              <p className="text-lg text-white/80 leading-relaxed">
                Interaktive Workshops, in denen Teilnehmer praktisch lernen, wie sie Automatisierung und KI in ihrem Arbeitsalltag einsetzen können.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training; 