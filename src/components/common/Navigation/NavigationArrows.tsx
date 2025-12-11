import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

interface NavigationArrowsProps {
  onPrev: () => void;
  onNext: () => void;
  canScrollLeft: boolean;
  canScrollRight: boolean;
  variant?: "default" | "floating" | "inline";
  className?: string;
}

export default function NavigationArrows({
  onPrev,
  onNext,
  canScrollLeft,
  canScrollRight,
  variant = "default",
  className = "",
}: NavigationArrowsProps) {
  const baseButtonStyles = "rounded-full p-2 md:p-3 transition-all z-10";
  
  const variants = {
    default: "bg-white shadow-xl hover:scale-110 hover:shadow-2xl text-secondary",
    floating: "bg-white/80 hover:bg-white text-gray-800 shadow-lg",
    inline: "bg-primary text-white hover:bg-primary-dark border-2 border-primary",
  };

  const positionStyles = {
    default: "absolute top-1/2 -translate-y-1/2",
    floating: "absolute top-1/2 -translate-y-1/2",
    inline: "",
  };

  return (
    <>
      <button
        onClick={onPrev}
        disabled={!canScrollLeft}
        className={cn(
          baseButtonStyles,
          variants[variant],
          positionStyles[variant],
          variant === "default" || variant === "floating" ? "left-0 md:-left-4" : "",
          canScrollLeft
            ? "cursor-pointer opacity-100"
            : "opacity-0 pointer-events-none",
          className
        )}
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      <button
        onClick={onNext}
        disabled={!canScrollRight}
        className={cn(
          baseButtonStyles,
          variants[variant],
          positionStyles[variant],
          variant === "default" || variant === "floating" ? "right-0 md:-right-4" : "",
          canScrollRight
            ? "cursor-pointer opacity-100"
            : "opacity-0 pointer-events-none",
          className
        )}
        aria-label="Next slide"
      >
        <ChevronRightIcon className="w-5 h-5 md:w-6 md:h-6" />
      </button>
    </>
  );
}