"use client";
import { HourglassMedium, Package } from "@phosphor-icons/react";
import React from "react";
import { getAvailableTabs } from "./side-bar.utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

function SideBar() {
  const pathname = usePathname();
  const tabs = getAvailableTabs();
  const isActive = (path: string) => {
    return pathname === path ? "bg-default-200" : "";
  };

  return (
    <div className=" min-w-[200px] p-2 border-r-1">
      <div className="flex flex-col">
        {tabs.map((tab) => (
          <Link
            href={tab.path}
            key={tab.path}
            className={`flex items-center gap-2 p-2 rounded-small  cursor-pointer transition-colors duration-200 ease-in-out my-0.5 ${
              isActive(tab.path) ? "bg-default-100 font-semibold" : "hover:bg-default-200"
            }
            `}
          >
            <tab.icon size={20} weight={isActive(tab.path) ? "bold" : "regular"} className="text-default-800" />

            
            <span>{tab.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
