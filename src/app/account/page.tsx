import { ChipIcon } from "@/assests";
import {
  BalanceIcon,
  ExpenseIcon,
  IncomeIcon,
} from "@/assests/icons/accounts-icons";
import { DepositIcon, PaypalIcon } from "@/assests/icons/deposit";
import BalanceCard from "@/components/balance-card";
import { WeeklyExpnsesChart } from "@/components/Charts";
import CardCredit from "@/components/credit-card";
import { recentDeposit } from "@/constant/menu";

import React from "react";

const account = [
  {
    balance: "$30,000",
    icon: <BalanceIcon />,
    text: "My Balance",
  },
  {
    balance: "$20,000",
    icon: <IncomeIcon />,
    text: "Income",
  },
  {
    balance: "$40,000",
    icon: <ExpenseIcon />,
    text: "Expenses",
  },
  {
    balance: "$30,000",
    icon: <DepositIcon />,
    text: "My Savings",
  },
];

const invoice = [
  {
    name: "Apple Store",
    icon: <DepositIcon />,
    date: "15 Aug",
    amount: "500",
  },
  {
    name: "Micheal",
    icon: <DepositIcon />,
    date: "12 days ago",
    amount: "1000",
  },
  {
    name: "playstation",
    icon: <DepositIcon />,
    date: "5h ago",
    amount: "700",
  },
  {
    name: "william",
    icon: <PaypalIcon />,
    date: "5 days ago",
    amount: "2000",
  },
];

const Account = () => {
  return (
    <div className=" py-[0.6rem] px-1 md:px-5 h-full">
      <div className="overflow-x-auto w-full">
        <div>
          <main className=" grid md:grid-cols-3 lg:grid-cols-4 gap-5">
            {account.map((data, index) => (
              <div key={index}>
                <BalanceCard
                  icons={data.icon}
                  text={data.text}
                  amount={data.balance}
                />
              </div>
            ))}
          </main>
        </div>
      </div>
      <main className="pt-10 grid md:grid-cols-12 gap-6">
        {/* Left Section - Last Transactions */}
        <div className="md:col-span-8">
          <h2 className="headerText">Last Transaction</h2>
          <div className="flex flex-col justify-between gap-4 h-[220px] mt-4 shadow-md rounded-md p-3 bg-gray-50">
            {recentDeposit.map((data, index) => (
              <div
                key={index}
                className="flex items-center gap-2 justify-between px-2"
              >
                <span className="flex items-center gap-3">
                  <p>{data.icon}</p>
                  <div className="">
                    <h2 className="capitalize font-normal text-[9px] md:text-xs">
                      {data.text}
                    </h2>
                    <p className="capitalize font-normal text-[9px] md:text-xs">
                      {data.date}
                    </p>
                  </div>
                </span>

                <p className="text-right text-[9px] md:text-sm font-medium capitalize">
                  {data.service}
                </p>
                <p className="text-right text-[9px] md:text-sm font-medium capitalize">
                  {data.card}
                </p>
                <p
                  className={`float-start font-medium text-[9px] md:text-sm capitalize ${
                    data.status === "completed"
                      ? "text-green-500"
                      : data.status === "pending"
                      ? "text-yellow-500"
                      : "text-red-500"
                  }`}
                >
                  {data.status}
                </p>

                <p className="capitalize font-medium text-[9px] md:text-sm">
                  {data.amount}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - My Card */}
        <div className="md:col-span-4">
          <h1 className="headerText pb-4">My Card</h1>
          <CardCredit
            rest="bg-gradient-to-br text-white from-blue-500 to-blue-800"
            icon={<ChipIcon />}
          />
        </div>
      </main>

      <main className=" grid w-full md:items-center lg:items-start md:grid-cols-12 gap-5 pt-10">
        <div className=" md:col-span-8">
          <h1 className=" headerText">Debit & Credit Overview</h1>
          <div>
            <WeeklyExpnsesChart />
          </div>
        </div>
        <div className=" md:col-span-4">
          <h1 className=" headerText">Invoices Sent</h1>
          <main className=" bg-white rounded p-3 flex flex-col gap-10 mt-6">
            {invoice.map((data) => (
              <div
                className="flex justify-between items-center"
                key={data.date}
              >
                <span className="flex items-start gap-4">
                  {" "}
                  {/* Reduced gap */}
                  <p>{data.icon}</p>
                  <div className="text-left">
                    {" "}
                    {/* Make sure this is text-left */}
                    <h2 className="font-medium text-sm pb-[2px] text-left">
                      {data.name}
                    </h2>
                    <h2 className="font-medium text-xs text-light_blue">
                      {data.date}
                    </h2>
                  </div>
                </span>
                <h2 className="font-medium text-sm text-light_blue">
                  ${data.amount}
                </h2>
              </div>
            ))}
          </main>
        </div>
      </main>
    </div>
  );
};

export default Account;
