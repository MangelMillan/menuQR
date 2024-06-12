import Image from "next/image";
import { FC } from "react";

interface FlipCardProps {
  frontImageUrl: string;
  text: string;
  backText: string;
  price: string;
}

const FlipCard: FC<FlipCardProps> = ({
  frontImageUrl,
  text,
  backText,
  price,
}) => {
  return (
    <div className="group relative w-full h-64 sm:w-64 perspective">
      <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
        <div className="absolute w-full h-full backface-hidden ">
          <Image
            src={frontImageUrl}
            alt="Front"
            layout="fill"
            objectFit="cover"
            className="rounded-lg  saturate-[175%]"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center rounded-lg p-4">
            <h1 className="text-white text-2xl font-bold self-center">
              {text}
            </h1>
          </div>
          <div className="absolute bottom-0 right-0  p-4 rounded-br-lg rounded-tl-lg">
            <span className="text-white text-lg font-bold">{price}</span>
          </div>
        </div>
        <div className="absolute w-full h-full backface-hidden rotate-y-180  ">
          <Image
            src={frontImageUrl}
            alt="Back"
            layout="fill"
            objectFit="cover"
            className="rounded-lg saturate-100 "
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg p-4">
            <p className="text-white text-lg font-medium ">{backText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
