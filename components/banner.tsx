"use client";

import React from "react";
import ImageCarousel from "./image-carousel";

const images = [
  "/images/asos.jpg",
  "/images/shein.jpg",
  "/images/zara.jpg",
  // Add more image paths as needed
];

const Carousel = () => {
  return (
    <div>
      <ImageCarousel images={images} />
    </div>
  );
};

export default Carousel;
