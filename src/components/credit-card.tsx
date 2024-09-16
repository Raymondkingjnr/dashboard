import React, { FC, ReactNode } from "react";
import { CardLogoIcon } from "@/assests";

type ICard = {
  rest: string;
  icon?: ReactNode;
};

const CardCredit: FC<ICard> = ({ rest, icon }: ICard) => {
  return (
    <div
      className={` flex flex-col justify-between rounded-md px-5 py-3 shadow-lg h-[220px] shadow-zinc-300 ${rest}`}
    >
      <main className=" flex items-start justify-between">
        <span>
          <p className=" font-medium text-sm tracking-wide">Balance</p>
          <p className=" font-medium text-sm tracking-wide">$200</p>
        </span>
        {icon}
      </main>
      <main className=" flex gap-[4rem] items-center pt-6">
        <span>
          <h2 className=" uppercase text-xs font-normal">Card Holders</h2>
          <p className=" text-xs capitalize pt-2 font-normal"> Nnaji raymond</p>
        </span>
        <span>
          <h2 className=" uppercase text-xs font-normal">valid thru</h2>
          <p className=" text-xs capitalize pt-2 font-normal">22/98</p>
        </span>
      </main>
      <main className=" flex justify-between items-center pt-7">
        <h2>5525**** **** 1245</h2>
        <CardLogoIcon />
      </main>
    </div>
  );
};

export default CardCredit;
