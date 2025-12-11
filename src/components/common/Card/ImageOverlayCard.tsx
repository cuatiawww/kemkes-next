import Image from "next/image";
import { ReactNode } from "react";

interface ImageOverlayCardProps {
  image: string;
  title: string;
  description?: string;
  badge?: string;
  overlayGradient?: "primary" | "secondary" | "dark";
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
}

export default function ImageOverlayCard({
  image,
  title,
  description,
  badge,
  overlayGradient = "primary",
  className = "",
  onClick,
  children,
}: ImageOverlayCardProps) {
  const gradients = {
    primary: "from-primary/90 via-primary/50 to-transparent",
    secondary: "from-secondary/90 via-secondary/50 to-transparent",
    dark: "from-black/90 via-black/50 to-transparent",
  };

  return (
    <div
      onClick={onClick}
      className={`relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer ${className}`}
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
      />
      
      <div className={`absolute inset-0 bg-gradient-to-t ${gradients[overlayGradient]} opacity-80 group-hover:opacity-90 transition-opacity duration-500`} />

      {/* Decorative Elements */}
      <div className="absolute top-6 right-6 w-24 h-24 border-4 border-white/30 rounded-full group-hover:scale-125 transition-transform duration-500" />
      <div className="absolute bottom-20 left-6 w-16 h-16 border-4 border-white/20 rotate-45 group-hover:rotate-90 transition-all duration-700" />

      <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 group-hover:translate-y-[-10px]">
        {badge && (
          <div className="inline-block px-4 py-2 bg-secondary rounded-full text-white text-xs font-bold mb-4 group-hover:bg-yellow-400 group-hover:text-primary transition-all duration-300">
            {badge}
          </div>
        )}
        <h3 className="text-white text-3xl font-bold mb-3 group-hover:text-yellow-300 transition-colors duration-300">
          {title}
        </h3>
        {description && (
          <p className="text-white/90 text-sm max-w-xl">
            {description}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}