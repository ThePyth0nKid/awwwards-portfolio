import React, { forwardRef } from "react";

interface CalendlyButtonProps {
  onClick?: () => void;
  className?: string;
}

const CalendlyButton = forwardRef<HTMLButtonElement, CalendlyButtonProps>(
  ({ onClick, className = "" }, ref) => (
    <div className="flex justify-center w-full my-12 sm:my-16 px-4 sm:px-6 md:px-10">
      <button
        ref={ref}
        onClick={onClick}
        className={`px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 lg:py-5 text-sm sm:text-base md:text-lg font-bold text-black uppercase transition-all duration-300 bg-white rounded-full shadow-lg hover:bg-gold hover:text-white focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 whitespace-nowrap ${className}`}
        style={{ fontFamily: 'Amiamie, sans-serif' }}
        type="button"
      >
        Kostenloses Erstgespräch buchen
      </button>
    </div>
  )
);

CalendlyButton.displayName = "CalendlyButton";

export default CalendlyButton; 