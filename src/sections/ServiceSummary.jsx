import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const ServiceSummary = () => {
  useGSAP(() => {
    const createYoyoTween = (selector, from, to) => {
      gsap.fromTo(
        selector,
        { xPercent: from, opacity: 0 },
        {
          xPercent: to,
          opacity: 1,
          scrollTrigger: {
            trigger: selector,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            onUpdate: (self) => {
              const progress = self.progress;
              const mid = 0.5;
              const direction = progress < mid ? (to - from) * (progress / mid) + from : (from - to) * ((progress - mid) / mid) + to;
              gsap.set(selector, { xPercent: direction });
            },
          },
          duration: 1,
          ease: "power2.inOut",
        }
      );
    };
    createYoyoTween("#title-service-1", 0, -50);
    createYoyoTween("#title-service-2", 0, 80);
    createYoyoTween("#title-service-3", 0, -80);
    createYoyoTween("#title-service-4", 0, 50);
  }, []);
  return (
    <section className="mt-20 overflow-hidden font-light leading-snug text-center mb-42 contact-text-responsive px-4 sm:px-6 md:px-10">
      <div id="title-service-1">
        <p className="break-words">Architektur</p>
      </div>
      <div id="title-service-2" className="flex flex-col items-center justify-center gap-3">
        <p className="font-normal break-words">Entwicklung</p>
        <p className="break-words">Automation</p>
        <p className="break-words">APIs</p>
        <p className="italic break-words">Frontends</p>
      </div>
      <div id="title-service-3" className="flex flex-col items-center justify-center gap-3">
        <p className="break-words">Skalierung</p>
        <p className="break-words">Datenbanken</p>
        <p className="break-words">Systemintegration</p>
      </div>
      <div id="title-service-4" className="flex flex-col items-center justify-center gap-3">
        <p className="break-words">Prozessdigitalisierung</p>
        <p className="break-words">Workflow-Optimierung</p>
      </div>
    </section>
  );
};

export default ServiceSummary;
