import Image from "next/image";
import React, { useState, useEffect } from "react";

interface ImageCarouselProps {
  images: string[];
  autoPlayDelay?: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  autoPlayDelay = 3000,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, autoPlayDelay);

    return () => {
      clearInterval(interval);
    };
  }, [currentImageIndex, autoPlayDelay, images.length]);

  return (
    <div className="relative">
      <button
        onClick={prevImage}
        className="absolute hidden left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-500 text-white"
      >
        Previous
      </button>
      <button
        onClick={nextImage}
        className="absolute hidden right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-500 text-white"
      >
        Next
      </button>
      <Image
        width={1000}
        height={400}
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        className="mx-auto w-full lg:h-[500px] lg:object-cover object-contain object-center"
      />
    </div>
  );
};

export default ImageCarousel;
