import {
  AppleIcon,
  CardIcon,
  ChipIcon,
  GoogleIcon,
  GrayChipIcon,
} from "@/assests";
import { DonutChart } from "@/components/Charts";
import CardCredit from "@/components/credit-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const investment = [
  {
    icon: <CardIcon />,

    Card_type: "Secondary",
    bank: "UBA",
    card_number: "5615***",
    card_name: "Raymond Nnaji",
  },
  {
    icon: <CardIcon />,
    Card_type: "Secondary",
    bank: "UBA",
    card_number: "5615***",
    card_name: "Raymond Nnaji",
  },
  {
    icon: <CardIcon />,
    Card_type: "Secondary",
    bank: "UBA",
    card_number: "5615***",
    card_name: "Raymond Nnaji",
  },
];

const settings = [
  {
    text: "Block Card",
    sub_text: "Instantly block your card",
    icon: <CardIcon />,
  },
  {
    text: "Change Pin Code",
    sub_text: "Choose another pin code",
    icon: <CardIcon />,
  },
  {
    text: "Add Google Pay",
    sub_text: "Withdraw without any card",
    icon: <GoogleIcon />,
  },
  {
    text: "Add Apple Pay",
    sub_text: "Withdraw without any card",
    icon: <AppleIcon />,
  },
  {
    text: "Add to Apple Store",
    sub_text: "Withdraw without any card",
    icon: <AppleIcon />,
  },
];

const CreditCard = () => {
  return (
    <div className=" py-[1rem] px-2 md:px-5">
      <main>
        <h2 className=" headerText">My Cards</h2>
        <div className="  grid lg:grid-cols-3 md:grid-cols-2 w-full gap-x-5 gap-y-7 mt-4 ">
          <CardCredit
            rest="bg-gradient-to-br text-white from-blue-500 to-blue-800 "
            icon={<ChipIcon />}
          />
          <CardCredit
            rest="bg-gradient-to-br text-white from-blue-500 to-blue-800 "
            icon={<ChipIcon />}
          />
          <CardCredit rest="bg-white text-[#000] w" icon={<GrayChipIcon />} />
        </div>
      </main>

      <main className=" grid lg:grid-cols-12 gap-x-5 gap-y-7 pt-[3rem]">
        <div className=" lg:col-span-4">
          <h1 className=" headerText">Card Expense Statistics</h1>
          <div>
            <DonutChart />
          </div>
        </div>
        <div className="lg:col-span-8">
          <h1 className=" headerText">Card List</h1>

          <main className=" flex flex-col gap-6 mt-6">
            {investment.map((data, index) => (
              <div
                key={index}
                className=" flex justify-between items-center rounded-3xl bg-white py-3 px-4"
              >
                <span className=" flex gap-4 items-center  md:w-[270px]">
                  {data.icon}
                  <aside>
                    <p className=" text-[#232323] text-[11px] md:text-base font-medium pb-1">
                      Card Type
                    </p>
                    <p className=" text-light_blue font-medium text-[8px] md:text-sm">
                      {data.Card_type}
                    </p>
                  </aside>
                </span>
                <span className=" flex flex-col justify-start items-start md:w-[200px]">
                  <h3 className=" text-[#232323] text-[11px] md:text-base font-medium pb-1">
                    Bank
                  </h3>
                  <p className=" text-light_blue font-medium text-[8px] md:text-sm">
                    {data.bank}
                  </p>
                </span>
                <span className="lg:w-[230px] text-left flex flex-col justify-end items-end">
                  <p className={` text-[11px] md:text-base font-medium pb-1 `}>
                    Card Number
                  </p>
                  <p className=" text-light_blue font-medium text-[8px] md:text-sm">
                    {data.card_number}
                  </p>
                </span>
                <span className="lg:w-[230px] text-left flex flex-col justify-end items-end">
                  <p className={` text-[11px] md:text-base font-medium pb-1 `}>
                    Card Name
                  </p>
                  <p className=" text-light_blue font-medium text-[8px] md:text-sm">
                    {data.card_name}
                  </p>
                </span>
              </div>
            ))}
          </main>
        </div>
      </main>

      <main className="grid  lg:grid-cols-12 gap-x-5 gap-y-8 pt-[3rem]">
        <div className=" lg:col-span-9">
          <h1 className=" headerText">Add New Card</h1>
          <main className=" bg-slate-50 rounded-lg p-6 mt-4">
            <p className=" text-light_blue max-w-[600px] font-normal tracking-wide leading-8">
              Credit Card generally means a plastic card issued by Scheduled
              Commercial Banks assigned to a Cardholder, with a credit limit,
              that can be used to purchase goods and services on credit or
              obtain cash advances.
            </p>
            <form
              action=""
              method="post"
              className=" grid  gap-x-5 gap-y-8 md:grid-cols-2 mt-8"
            >
              <div>
                <p className=" pb-2 font-medium text-base">Card Type</p>
                <Input placeholder="classic" className="w-full" />
              </div>
              <div>
                <p className=" pb-2 font-medium text-base">Card Name</p>
                <Input placeholder="Raymond Nnaji" className=" w-full" />
              </div>
              <div>
                <p className=" pb-2 font-medium text-base">Card Number</p>
                <Input placeholder="**** **** **** ***" className=" w-full" />
              </div>
              <div>
                <p className=" pb-2 font-medium text-base">Exp Date</p>
                <Input placeholder="22/90" className=" w-full" />
              </div>
            </form>

            <Button className=" bg-main_primary rounded-md h-[45px] px-2 text-center w-[120px] mt-4 font-medium">
              Add card
            </Button>
          </main>
        </div>
        <div className=" lg:col-span-3">
          <h1 className=" headerText">Card Setting</h1>
          <div className=" bg-slate-50 p-4 flex flex-col gap-6 mt-4 rounded-lg">
            {settings.map((item, index) => (
              <div className=" flex gap-5 items-center" key={index}>
                {item.icon}
                <span>
                  <h2 className=" font-semibold text-sm text-[#232323]">
                    {item.text}
                  </h2>
                  <h2 className=" font-medium text-sm pt-2 text-light_blue">
                    {item.sub_text}
                  </h2>
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreditCard;
