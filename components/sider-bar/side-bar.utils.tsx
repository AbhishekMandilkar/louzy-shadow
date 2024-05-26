import {Currency, File, FileLock, FileTextIcon, Home, LucideIcon} from "lucide-react";

  
  export interface ITabs {
    path: string;
    icon: LucideIcon;
    name: string;
  }
  
  export const getAvailableTabs = () => {
    const tabList: ITabs[] = [];
    tabList.push({
      path: "/",
      name: "Home",
      icon: Home
    });

    tabList.push({
      path: "/forms",
      name: "Forms",
      icon: FileTextIcon
    });
    // tabList.push({
    //   path: "/blog",
    //   name: "Blog",
    //   icon: File
    // });
    // tabList.push({
    //   path: "/docs",
    //   name: "Docs",
    //   icon: FileLock
    // });
    return tabList;
  };
  