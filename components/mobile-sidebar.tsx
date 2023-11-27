import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { HiMenuAlt4 } from "react-icons/hi";
import NavbarContent from "./navbar-content";

export default function MobileSideBar() {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden pr-4 hover:opacity-75 transition">
        <HiMenuAlt4 className="text-[20px]" />
      </SheetTrigger>

      <SheetContent side="left" className="p-0 bg-white">
        <NavbarContent />
      </SheetContent>
    </Sheet>
  );
}
