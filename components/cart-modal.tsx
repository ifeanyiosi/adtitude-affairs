import React from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { BsMinecartLoaded } from "react-icons/bs";
import Cart from "./cart";
import { Button } from "./ui/button";

export default function CartModal() {
  return (
    <Sheet>
      <SheetTrigger className=" pr-4 hover:opacity-75 transition">
        <BsMinecartLoaded className="text-[#000] text-[20px]" />
      </SheetTrigger>

      <SheetContent side="right" className="p-0 bg-white">
        <Cart />
        <SheetClose asChild>
          <Button type="submit">Save changes</Button>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}
