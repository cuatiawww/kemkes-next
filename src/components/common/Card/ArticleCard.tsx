import Image from "next/image";

interface ArticleCardProps {
  image: string;
  title: string;
  date?: string;
  variant?: "default" | "featured" | "compact";
  className?: string;
  onClick?: () => void;
}

export default function ArticleCard({
  image,
  title,
  date,
  variant = "default",
  className = "",
  onClick,
}: ArticleCardProps) {
  if (variant === "featured") {
    return (
      <div
        onClick={onClick}
        className={`relative rounded-xl md:rounded-2xl overflow-hidden border border-gray-200 group cursor-pointer ${className}`}
      >
        <div className="relative w-full h-full min-h-[300px]">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 66vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
            <h3 className="text-white text-base md:text-xl font-bold mb-1 md:mb-2 line-clamp-2">
              {title}
            </h3>
            {date && (
              <div className="flex items-center gap-1 text-xs md:text-sm text-white/90">
                <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {date}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div
        onClick={onClick}
        className={`flex items-start gap-2 md:gap-3 cursor-pointer hover:bg-gray-50 p-3 md:p-4 transition-all rounded-lg ${className}`}
      >
        <div className="relative w-24 md:w-30 h-16 md:h-20 flex-shrink-0 rounded-md md:rounded-lg overflow-hidden bg-gray-100">
          <Image
            src={image}
            alt={title}
            fill
            sizes="120px"
            className="object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs md:text-sm font-semibold text-gray-800 mb-1 md:mb-2 line-clamp-2">
            {title}
          </p>
          {date && <p className="text-[10px] md:text-xs text-gray-500">{date}</p>}
        </div>
      </div>
    );
  }

  return (
    <article
      onClick={onClick}
      className={`bg-white border border-gray-200 rounded-2xl md:rounded-3xl transition-all duration-300 group cursor-pointer transform p-3 md:p-4 hover:shadow-lg ${className}`}
    >
      <div className="relative w-full aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden mb-3 md:mb-4">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="px-1 md:px-2">
        <p className="text-sm md:text-base text-gray-800 font-bold mb-1 md:mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </p>
        {date && (
          <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-gray-500">
            <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {date}
          </div>
        )}
      </div>
    </article>
  );
}