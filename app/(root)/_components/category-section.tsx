import CategoryCard from "@/components/category-card";
import React from "react";

export default function CategoryHero() {
  return (
    <div className="flex flex-col px-4 gap-2 lg:flex-row items-center py-[30px] justify-between">
      <CategoryCard href="/JERSEYS" background="pic-one" label="JERSIES" />
      <CategoryCard href="/ANKARA" background="pic-two" label="ANKARA" />
      <CategoryCard href="/" background="pic-three" label="ACCESSORIES" />
      <CategoryCard href="/GIFTS" background="pic-four" label="GIFTING" />
    </div>
  );
}
