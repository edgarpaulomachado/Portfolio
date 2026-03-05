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
    <div className="w-92 h-25 rounded-2xl bg-[#09090A] border border-[#212125] p-3 flex items-center gap-3 hover:border-[#FF1493] transition-all duration-300">

      <div
        className="w-20 h-16 rounded-lg flex justify-center items-center"
        style={{ backgroundColor: bgColor }}
      >
        {image && (
          <Image
            src={image}
            alt={title}
            width={24}
            height={24}
          />
        )}
      </div>

      <div className="flex flex-col justify-center">
        <h1 className="text-lg font-medium text-white">{title}</h1>
        <p className="text-sm text-[#C4C3C3]">{description}</p>
      </div>

    </div>
  );
}