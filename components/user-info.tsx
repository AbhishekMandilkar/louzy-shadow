"use client";
import {
  LogoutLink,
  useKindeAuth,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import {
  Avatar,
  Listbox,
  ListboxItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
  User,
} from "@nextui-org/react";
import React, {Key} from "react";
import { useTheme } from "next-themes";
import {LogOutIcon, MoonIcon, SettingsIcon, SunIcon} from "lucide-react";

function UserInfo() {
  const {user} = useKindeBrowserClient();
  console.log(user?.picture);
  const avatarName = user?.given_name?.charAt(0);
  const fullName = `${user?.given_name} ${user?.family_name}`;
  const email = user?.email || "";
  const { theme, setTheme } = useTheme();

  const onActionPress = (key: Key) => {
    switch (key) {
      case "settings":
        console.log("Settings");
        break;
      case "logout":

        break;
      case "theme-switch":
        setTheme(theme === "light" ? "dark" : "light");
        break;  
    }
  }


  return (
    <Popover placement="bottom" offset={10}>
      <PopoverTrigger>
        <div className="flex cursor-pointer">
          <Avatar
            src={user?.picture || undefined}
            name={avatarName}
            showFallback
            className="text-lg"
            size="sm"
          />
        </div>
      </PopoverTrigger>
      <PopoverContent className="p-1 min-w-28">
        <div className="w-full min-w-[300px] p-2 rounded-small">
          <div className="flex p-2">
            <User
              name={fullName}
              description={email}
              className="flex gap-1"
              avatarProps={{
                size: "md",
                src: user?.picture || undefined,
                showFallback: true,
                className: 'mr-2 text-2xl',
                name: avatarName,
              }}
            />
          </div>
          <Listbox
            onAction={onActionPress}
            aria-label="Listbox Variants"
            color={"default"}
            variant={"solid"}
          >
            <ListboxItem
              startContent={
                theme == "light" ? <MoonIcon size={24} /> : <SunIcon size={24} />
              }
              key={"theme-switch"}
            >
              {theme == "light" ? "Dark mode" : "Light mode"}
            </ListboxItem>
            <ListboxItem startContent={<SettingsIcon size={24} />} key={"settings"}>
              Settings
            </ListboxItem>
            <ListboxItem
              startContent={<LogOutIcon size={24} />}
              key="logout"
              className="text-danger"
              color="danger"
            >
              <LogoutLink>Logout</LogoutLink>
            </ListboxItem>
          </Listbox>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default UserInfo;
