'use client';

import Image, { StaticImageData } from "next/image";

interface CardsProps {
  title: string;
  description: string;
  image?: string | StaticImageData;
  bgColor?: string;
}

export default function Card({ title, description, image, bgColor }: CardsProps) {
  return (
    <div className="md:w-92 sm:w-70 md:h-25 sm:h-20 md:rounded-2xl sm:rounded-xl bg-[#09090A] border border-[#212125] md:p-3 sm:p-2 flex items-center md:gap-3 sm:gap-1 hover:border-[#FF1493] transition-all duration-300">

      <div
        className="md:w-20 sm:w-16 md:h-16 sm:h-12 rounded-lg flex justify-center items-center"
        style={{ backgroundColor: bgColor }}
      >
        {image && (
          <Image
            src={image}
            alt={title}
            width={24}
            height={24}

            className="sm:w-12 sm:h-12"
          />
        )}
      </div>

      <div className="flex flex-col justify-center">
        <h1 className="md:text-lg sm:text-base font-medium text-white">{title}</h1>
        <p className="md:text-sm sm:text-xs text-[#C4C3C3]">{description}</p>
      </div>

    </div>
  );
}