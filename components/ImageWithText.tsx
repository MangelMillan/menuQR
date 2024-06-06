import Image from "next/image";
import { FC } from "react";

interface ImageWithTextProps {
  imageUrl: string;
  text: string;
  linkUrl: string;
}

const ImageWithText: FC<ImageWithTextProps> = ({ imageUrl, text, linkUrl }) => {
  return (
    <a
      href={linkUrl}
      className="relative block w-60 h-60 sm:w-64 sm:h-64 md:w-70 md:h-70 lg:w-80 lg:h-80 overflow-hidden rounded-lg hover:z-10"
    >
      <div className="relative h-full w-full">
        <Image
          src={imageUrl}
          alt="background image"
          fill
          className="rounded-lg object-cover transition-all duration-300  saturate-[70%] hover:saturate-200 hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center pointer-events-none">
        <h1 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center">
          {text}
        </h1>
      </div>
    </a>
  );
};

export default ImageWithText;
