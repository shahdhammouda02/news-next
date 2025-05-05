import React from "react";
import Image, { StaticImageData } from "next/image";

interface CardProps {
  number: string;
  title: string;
  description: string;
  imageSrc: StaticImageData | string;
  imageAlt: string;
  activeItem: string | null;
  setActiveItem: (title: string) => void;
}

export const Card = ({
  number,
  title,
  description,
  imageSrc,
  imageAlt,
  activeItem,
  setActiveItem,
}: CardProps) => {
  return (
    <div className="flex gap-4 h-full">
      <div className="min-w-[90px] sm:w-[120px] h-[120px] sm:h-[150px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={400}
          height={300}
          className="w-full h-full object-cover"
          sizes="(max-width: 640px) 80px, 100px"
        />
      </div>
      <div className="flex-1">
        <span className="text-gray-400 text-2xl sm:text-3xl font-bold">
          {number}
        </span>
        <h3
          className={`text-base sm:text-lg font-bold cursor-pointer mb-1 sm:mb-2 ${
            activeItem === title ? "text-red-400" : "hover:text-red-400"
          }`}
          onClick={() => setActiveItem(title)}
        >
          {title}
        </h3>
        <p className="text-gray-500 text-sm sm:text-base">{description}</p>
      </div>
    </div>
  );
};

export default Card;
