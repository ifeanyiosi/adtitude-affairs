"use client";

import { useStateContext } from "@/context/StateContext";
import React from "react";
import { CiHeart } from "react-icons/ci";

interface AddToWishlistProps {
  product: string;
}

export default function AddToWishlist({ product }: AddToWishlistProps) {
  const { addWish } = useStateContext();
  return (
    <button onClick={() => addWish(product)}>
      <CiHeart className="text-[#000] mt-4 text-[25px]" />
    </button>
  );
}
