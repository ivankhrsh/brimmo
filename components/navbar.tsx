"use client";

import Box from "./icons/box";
import { useState } from "react";
import { cn } from "@/lib/utils";
import IconButton from "./ui/icon-button";
import Home from "./icons/home";
import Exchange from "./icons/exchange";
import Bookmarks from "./icons/bookmarks";
import Cart from "./icons/cart";
import Location from "./icons/location";
import Exit from "./icons/exit";

interface NavItem {
  icon: React.ReactNode;
  label: string;
}

const navItems = [
  { icon: <Home />, label: "Home" },
  { icon: <Box />, label: "Tracking" },
  { icon: <Location />, label: "Maps" },
  { icon: <Cart />, label: "Shop" },
  { icon: <Exchange />, label: "Exchange" },
  { icon: <Bookmarks />, label: "Bookmarks" },
];

export function Navbar() {
  const [activeItem, setActiveItem] = useState<NavItem>(navItems[1]);

  const handleClick = (item: NavItem) => {
    setActiveItem(item);
  };

  return (
    <nav className="sticky top-0 flex h-screen flex-col items-center justify-between p-3">
      <div className="flex flex-col gap-[113px]">
        <IconButton className="bg-foreground hover:bg-primary size-[50px] text-white transition-all duration-300 hover:text-black">
          <Box />
        </IconButton>

        <div className="bg-secondary flex flex-col gap-1 rounded-full p-1">
          {navItems.map((item) => (
            <IconButton
              key={item.label}
              className={cn(
                activeItem === item
                  ? "text-primary bg-white"
                  : "hover:text-primary text-black hover:bg-white hover:opacity-80",
              )}
              onClick={() => handleClick(item)}
            >
              {item.icon}
            </IconButton>
          ))}
        </div>
      </div>

      <IconButton className="bg-secondary hover:bg-primary size-[50px] text-black transition-all duration-300 hover:text-white">
        <Exit />
      </IconButton>
    </nav>
  );
}
