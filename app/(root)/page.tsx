import Carousel from "@/components/banner";
import React from "react";
import Newest from "./_components/newest";
import CategoryHero from "./_components/category-section";
import ModeHero from "./_components/mode-hero";
import SpecialOffer from "./_components/special-offer";
import NewsLetter from "@/components/newsletter";

export default function Home() {
  return (
    <div>
      <Carousel />
      <div className="flex mt-8 flex-col lg:flex-row gap-4 items-center justify-between">
        <ModeHero
          background="mode-one"
          heading="Fun Time"
          label="Shop Casuals"
        />
        <ModeHero
          background="mode-two"
          heading="Boss babe"
          label="Shop Work wear"
        />
        <ModeHero
          background="mode-three"
          heading="Party Mode"
          label="Shop Party wear"
        />
      </div>
      <Newest />
      <SpecialOffer />
      <CategoryHero />
      <NewsLetter />
    </div>
  );
}
