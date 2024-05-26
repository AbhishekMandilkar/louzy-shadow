"use client";
import React from "react";
import { getAvailableTabs } from "./side-bar.utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Branding from "../common/branding";
import { Listbox, ListboxItem } from "@nextui-org/react";

function SideBar() {
  const pathname = usePathname();
  const tabs = getAvailableTabs();
  const isActive = (path: string) => {
    return pathname === path ? "bg-default-200" : "";
  };

  return (
    <aside className="min-w-[200px] p-2">
      <div className="px-2 py-3 mx-auto flex-1 flex justify-center">
        <Branding />
      </div>
      <Listbox className="flex flex-col mt-2">
        {tabs.map((tab) => (
          <ListboxItem
            as={Link}
            href={tab.path}
            startContent={<tab.icon size={20} className="" />}
            key={tab.path}
            className={`flex items-center gap-2 p-2 rounded-small cursor-pointer transition-colors duration-200 ease-in-out my-0.5 text-foreground ${
              isActive(tab.path)
                ? "bg-foreground-200 text-default-900"
                : "hover:bg-default-50"
            }
            `}
          >
            <span>{tab.name}</span>
          </ListboxItem>
        ))}
      </Listbox>
    </aside>
  );
}

export default SideBar;

