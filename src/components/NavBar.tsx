"use client";

import React from "react";
import { Input } from "./ui/input";
import { BellIcon, profileImg } from "@/assests";
import Image from "next/image";
import { LucideSettings, MenuIcon } from "lucide-react";
import { sideMenu } from "@/constant/menu";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "./ui/drawer";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  // let page =""

  // switch (pathname) {
  //   case "/":
  //     page = "Overview";
  //     break;
  //   case "/settings":
  //     page = "settings";
  //     break;
  //   case "/transaction":
  //     page = "transaction";
  //     break;
  //   case "/account":
  //     page = "account";
  //     break;
  //   case "/investment":
  //     page = "investment";
  //     break;
  //   case "/settings":
  //     page = "settings";
  //     break;
  //   case "/settings":
  //     page = "settings";
  //     break;
  //   default:
  //     page = pathname;
  //     break;
  // }
  return (
    <>
      <div className=" hidden lg:flex justify-between bg-white items-center py-3 px-2 md:px-5 shadow">
        <h2 className=" headerText capitalize">
          {" "}
          {pathname?.replace(/^\/+/, "")}
        </h2>
        <main className=" flex items-center gap-8">
          <Input type="text" className="w-[300px]" />
          <LucideSettings
            size={26}
            style={{ color: "gray", fontWeight: "400" }}
          />
          <BellIcon />
          <Image
            src={profileImg}
            alt=""
            width={40}
            height={40}
            className="object-contain"
          />
        </main>
      </div>
      {/* MOBILE VIEW */}
      <Drawer open={open} onOpenChange={setOpen}>
        <div className=" lg:hidden top-0 border flex justify-between bg-white items-center px-2 py-3 ">
          <DrawerTrigger asChild>
            <MenuIcon size={25} />
          </DrawerTrigger>
          <h3 className=" headerText capitalize">
            {pathname?.replace(/^\/+/, "")}
          </h3>
          <Image
            src={profileImg}
            alt=""
            width={40}
            height={40}
            className="object-contain"
          />
          <DrawerContent className=" pb-[1.3rem] bg-gray-950">
            <main>
              {sideMenu.map((item, index) => (
                <DrawerClose asChild key={index}>
                  <Link
                    href={item.route}
                    className="  font-medium pl-5 flex flex-col text-base gap-y-8"
                  >
                    <span className=" flex gap-6 pt-6">
                      <p className=" text-gray-400 text-sm">
                        {item.mobileIcon}
                      </p>
                      <p className=" text-gray-50 text-base">{item.text}</p>
                    </span>
                  </Link>
                </DrawerClose>
              ))}
            </main>
          </DrawerContent>
        </div>
      </Drawer>
    </>
  );
};

export default NavBar;
