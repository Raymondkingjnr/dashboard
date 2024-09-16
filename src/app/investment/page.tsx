import {
  AppleIcon,
  GoogleIcon,
  InvestBalanceIcon,
  InvestmentIcon2,
  ReturnIcon,
  TeslaIcon,
} from "@/assests";
import BalanceCard from "@/components/balance-card";
import { YearLineChart } from "@/components/Charts";
import Stocks from "@/components/stocks";
import React from "react";

const balance = [
  {
    icon: <InvestBalanceIcon />,
    amount: "$ 30,000",
    text: "Total Invested Amount",
  },
  {
    icon: <InvestmentIcon2 />,
    amount: "$ 40,000",
    text: "Number of Investments",
  },
  {
    icon: <ReturnIcon />,
    amount: "+5.9%",
    text: "Rate of Return",
  },
];

const investment = [
  {
    icon: <AppleIcon />,
    asset: "Apple",
    des: "E-commerce, Marketplace",
    amount: "$54,000",
    text: "Envestment Value",
    return: "+16%",
    return_text: "Return Value",
  },
  {
    icon: <GoogleIcon />,
    asset: "Samsung Mobile",
    des: "E-commerce, Marketplace",
    amount: "$25,300",
    text: "Envestment Value",
    return: "-4%",
    return_text: "Return Value",
  },
  {
    icon: <TeslaIcon />,
    asset: "Tesla Motors",
    des: "Electric Vehicles",
    amount: "$9,000",
    text: "Envestment Value",
    return: "+24%",
    return_text: "Return Value",
  },
];

const Investments = () => {
  return (
    <div className=" py-[0.6rem] px-1 md:px-5">
      <div>
        <main className="grid md:grid-cols-3 lg:grid-cols-3 gap-3 w-full">
          {balance.map((data, index) => (
            <div key={index}>
              <BalanceCard
                icons={data.icon}
                text={data.text}
                amount={data.amount}
              />
            </div>
          ))}
        </main>
      </div>

      <main className=" grid md:grid-cols-12 gap-x-5 gap-y-9 mt-10">
        <div className="md:col-span-6">
          <h2 className=" headerText">Yearly Total Investment</h2>
          <div className=" mt-7">
            <YearLineChart color="#FCAA0B" />
          </div>
        </div>
        <div className="md:col-span-6">
          <h2 className=" headerText">Monthly Revenue</h2>
          <div className=" mt-7">
            <YearLineChart color="#16DBCC" />
          </div>
        </div>
      </main>

      {/*  */}
      <main className=" grid gap-5 lg:grid-cols-12 mt-11">
        <div className=" lg:col-span-7">
          <h1 className=" headerText">My Investment</h1>

          <main className=" flex flex-col gap-6 mt-6">
            {investment.map((data, index) => (
              <div
                key={index}
                className=" flex justify-between items-center rounded-3xl bg-white p-4"
              >
                <span className=" flex gap-4 items-center  md:w-[270px]">
                  {data.icon}
                  <aside>
                    <p className=" text-[#232323] text-sm md:text-base font-semibold pb-1">
                      {data.asset}
                    </p>
                    <p className=" text-light_blue font-medium text-[10px] md:text-sm">
                      {data.des}
                    </p>
                  </aside>
                </span>
                <span className=" flex flex-col justify-start items-start md:w-[200px]">
                  <h3 className=" text-[#232323] text-sm md:text-base font-semibold pb-1">
                    {data.amount}
                  </h3>
                  <p className=" text-light_blue font-medium text-[10px] md:text-sm">
                    {data.text}
                  </p>
                </span>
                <span className=" md:w-[280px] text-left flex flex-col justify-end items-end">
                  <p
                    className={`${
                      data.return.includes("-")
                        ? "text-red-500"
                        : "text-green-500"
                    } text-sm md:text-base font-semibold pb-1 `}
                  >
                    {data.return}
                  </p>
                  <p className=" text-light_blue font-medium text-[10px] md:text-sm">
                    {data.return_text}
                  </p>
                </span>
              </div>
            ))}
          </main>
        </div>
        <div className=" lg:col-span-5">
          <h1 className=" headerText">Trending Stock</h1>

          <div className=" mt-7">
            <Stocks />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Investments;
