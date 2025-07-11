import React, { useRef, useEffect, useCallback } from "react";
import { InlineWidget } from "react-calendly";
import gsap from "gsap";

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CALENDLY_URL = "https://calendly.com/nelson-mehlis-igoultra/kostenloses-erstgesprach";

const CalendlyModal: React.FC<CalendlyModalProps> = ({ isOpen, onClose }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Animate modal in/out
  useEffect(() => {
    if (isOpen && modalRef.current && overlayRef.current) {
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );
      gsap.fromTo(
        modalRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out", delay: 0.1 }
      );
    }
    return () => {
      if (modalRef.current && overlayRef.current) {
        gsap.killTweensOf([modalRef.current, overlayRef.current]);
      }
    };
  }, [isOpen]);

  // Focus trap & close on ESC
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      // Focus trap
      if (e.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        } else if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    // Focus modal on open
    setTimeout(() => {
      modalRef.current?.focus();
    }, 100);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Close on overlay click
  const handleOverlayClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) onClose();
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm transition-opacity"
      aria-modal="true"
      role="dialog"
      tabIndex={-1}
      onClick={handleOverlayClick}
    >
      <div
        ref={modalRef}
        className="relative max-w-3xl w-full p-6 sm:p-10 bg-[#181818] rounded-3xl shadow-2xl border-2 border-gold focus:outline-none flex flex-col"
        style={{ fontFamily: 'Amiamie, sans-serif' }}
        tabIndex={0}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gold text-3xl font-bold focus:outline-none"
          aria-label="Schließen"
        >
          ×
        </button>
        <h2 className="mb-6 text-3xl font-black text-center text-gold tracking-tight uppercase">
          Kostenloses Erstgespräch buchen
        </h2>
        <div className="w-full flex justify-center">
          <div className="w-full max-w-2xl min-h-[600px]">
            <InlineWidget
              url={CALENDLY_URL}
              styles={{ height: "600px", width: "100%", background: "transparent" }}
              pageSettings={{
                backgroundColor: "181818",
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: "#FFD700",
                textColor: "#fff",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendlyModal; 