import {File, Files, House, Icon, Money, User} from "@phosphor-icons/react";

  
  export interface ITabs {
    path: string;
    icon: Icon;
    name: string;
  }
  
  export const getAvailableTabs = () => {
    const tabList: ITabs[] = [];
    tabList.push({
      path: "/",
      name: "Dashboard",
      icon: House
    });
    tabList.push({
      path: "/pricing",
      name: "Price",
      icon: Money
    });
    tabList.push({
      path: "/blog",
      name: "Blog",
      icon: File
    });
    tabList.push({
      path: "/docs",
      name: "Docs",
      icon: Files
    });
    return tabList;
  };
  