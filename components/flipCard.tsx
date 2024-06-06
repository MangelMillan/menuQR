import Image from 'next/image';
import { FC } from 'react';

interface FlipCardProps {
  frontImageUrl: string;
  text: string;
  backText: string;
}

const FlipCard: FC<FlipCardProps> = ({ frontImageUrl, text, backText }) => {
  return (
    <div className="group relative w-full h-64 sm:w-64 perspective">
      <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
        <div className="absolute w-full h-full backface-hidden">
          <Image
            src={frontImageUrl}
            alt="Front"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
            <h1 className="text-white text-2xl font-bold">{text}</h1>
          </div>
        </div>
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <Image
            src={frontImageUrl}
            alt="Back"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
            <h1 className="text-white text-lg font-medium font-serif">{backText}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
