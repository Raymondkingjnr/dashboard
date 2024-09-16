"use client";

import { logo } from "@/assests";
import Image from "next/image";
import React from "react";
import { ReactNode } from "react";
import { sideMenu } from "@/constant/menu";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface INavlink {
  icon: ReactNode;
  text: string;
  path: string;
}

const NavLinks = ({ icon, text, path }: INavlink) => {
  const pathname = usePathname();
  const isActive = pathname === path.toLowerCase();

  return (
    <Link
      href={path}
      className={`relative ${
        isActive ? "activeLink" : "LinkNav"
      } flex items-center gap-6 px-4 pt-7 transition-all duration-300 cursor-pointer`}
    >
      <span
        className={` rounded-xl absolute left-0 h-full w-1 bg-[#1814F3] ${
          isActive ? "scale-y-100" : "scale-y-0"
        }`}
      ></span>
      <p className="transition-all duration-700 ">{icon}</p>
      <h2 className="transition-all duration-700 tracking-wide text-base">
        {text}
      </h2>
    </Link>
  );
};

const SideBar = () => {
  return (
    <div className="  py-5 min-h-screen  w-full  bg-white hidden overflow-hidden lg:flex flex-col  ">
      <header className="px-4">
        <Image src={logo} alt="" width={100} height={100} />
      </header>
      <section className=" flex flex-col gap-6 pt-5">
        {sideMenu.map((link, index) => (
          <NavLinks
            key={index}
            icon={link.icon}
            text={link.text}
            path={link.route}
          />
        ))}
      </section>
    </div>
  );
};

export default SideBar;
