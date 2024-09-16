import React from "react";
import { Input } from "./ui/input";
import { BellIcon, profileImg } from "@/assests";
import Image from "next/image";
import { LucideSettings, MenuIcon } from "lucide-react";

const NavBar = () => {
  return (
    <>
      <div className=" hidden lg:flex justify-between bg-white items-center py-3 px-4 shadow">
        <h2 className=" font-semibold text-base text-gray-900"></h2>
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
      <div className=" lg:hidden top-0 border flex justify-between bg-white items-center p-5 ">
        <MenuIcon size={25} />
        <h3 className=" font-semibold text-base text-gray-900">Overview</h3>
        <Image
          src={profileImg}
          alt=""
          width={40}
          height={40}
          className="object-contain"
        />
      </div>
    </>
  );
};

export default NavBar;
