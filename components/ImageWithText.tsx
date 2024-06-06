import Image from 'next/image';
import { FC } from 'react';

interface ImageWithTextProps {
  imageUrl: string;
  text: string;
  linkUrl: string;
}

const ImageWithText: FC<ImageWithTextProps> = ({ imageUrl, text, linkUrl }) => {
  return (
    <a href={linkUrl} className="relative block w-full h-64 sm:w-64">
      <Image
        src={imageUrl}
        alt="background image"
        fill
        className="rounded-lg object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
        <h1 className="text-white text-2xl font-bold">{text}</h1>
      </div>
    </a>
  );
};

export default ImageWithText;
