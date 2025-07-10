import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const CTAModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const formRef = useRef(null);
  const [status, setStatus] = useState("");

  useGSAP(() => {
    if (isOpen && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
      );
    }
  }, [isOpen]);
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    const mailto = `mailto:nelson.mehlis@igoultra.de?subject=Kostenloses%20Erstgespr%C3%A4ch%20Buchung%20von%20${encodeURIComponent(name)}&body=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0ANachricht:%20${encodeURIComponent(message)}`;
    window.location.href = mailto;
    setStatus("success");
    form.reset();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div
        ref={modalRef}
        className="relative w-full max-w-lg p-8 bg-[#181818] rounded-3xl shadow-2xl border-2 border-gold"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gold text-3xl font-bold focus:outline-none"
          aria-label="Schließen"
        >
          ×
        </button>
        <h2 className="mb-6 text-3xl font-black text-center text-gold tracking-tight uppercase">Kostenloses Erstgespräch buchen</h2>
        <form ref={formRef} className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="px-5 py-3 bg-black/60 text-white border border-gold rounded-xl focus:outline-none focus:ring-2 focus:ring-gold placeholder:text-gold text-lg transition-all"
          />
          <input
            type="email"
            name="email"
            placeholder="E-Mail"
            required
            className="px-5 py-3 bg-black/60 text-white border border-gold rounded-xl focus:outline-none focus:ring-2 focus:ring-gold placeholder:text-gold text-lg transition-all"
          />
          <textarea
            name="message"
            placeholder="Nachricht"
            required
            rows={5}
            className="px-5 py-3 bg-black/60 text-white border border-gold rounded-xl focus:outline-none focus:ring-2 focus:ring-gold placeholder:text-gold text-lg transition-all resize-none"
          />
          <button
            type="submit"
            className="px-8 py-4 mt-2 font-bold text-black uppercase bg-gold rounded-full shadow-lg hover:bg-white hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 text-lg tracking-widest transition-all"
          >
            Anfrage senden
          </button>
        </form>
        {status === "success" && (
          <div className="mt-6 text-center font-bold text-lg text-gold bg-black/70 rounded-xl py-3">E-Mail-Client wurde geöffnet!</div>
        )}
      </div>
    </div>
  );
};

export default CTAModal; 