import Image from "next/image";

interface SmallBannerProps {
  image: string;
  title: string;
  description?: string;
  height?: string;
}

export default function SmallBanner({
  image,
  title,
  description,
  height = "300px",
}: SmallBannerProps) {
  return (
    <div className="relative w-full overflow-hidden" style={{ height }}>
      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />

      <div className="relative h-full container mx-auto px-4 md:px-6 flex flex-col justify-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4 max-w-3xl">
          {title}
        </h1>
        {description && (
          <p className="text-sm md:text-base lg:text-lg text-white/90 max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
