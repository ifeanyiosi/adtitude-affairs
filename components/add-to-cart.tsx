"use client";

import { useStateContext } from "@/context/StateContext";
import React from "react";
import { Button } from "./ui/button";

interface AddToCartButtonProps {
  product: string;
  qty: number;
}

export default function AddToCartButton({
  product,
  qty,
}: AddToCartButtonProps) {
  const { onAdd } = useStateContext();
  return (
    <Button
      className="w-full"
      type="button"
      onClick={() => onAdd(product, qty)}
    >
      Add to cart
    </Button>
  );
}
