import Button from "../Button/button";

interface SectionHeaderProps {
  title: string;
  description?: string;
  showButton?: boolean;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
}

const ArrowIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export default function SectionHeader({
  title,
  description,
  showButton = true,
  buttonText = "Lihat Detail",
  onButtonClick,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mb-6 md:mb-8 ${className}`}>
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
            {title}
          </h2>
          {description && (
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {description}
            </p>
          )}
        </div>
        {showButton && (
          <Button
            onClick={onButtonClick}
            icon={<ArrowIcon />}
            className="whitespace-nowrap md:ml-6 w-full md:w-auto"
          >
            {buttonText}
          </Button>
        )}
      </div>
    </div>
  );
}