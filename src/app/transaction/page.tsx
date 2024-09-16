"use client";

import CardCredit from "@/components/credit-card";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ExpenseBarChart } from "@/components/Charts";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { expenses, income, transactions } from "@/constant/menu";
import { ChipIcon, GrayChipIcon } from "@/assests";

const Transactions = () => {
  const router = useRouter();

  const [currentNav, setCurrentNav] = useState<
    " All Transactions" | "income" | "expenses"
  >(" All Transactions");

  return (
    <section className="">
      <div className=" py-[0.6rem] px-1 md:px-5">
        <main className=" grid lg:grid-cols-12 gap-x-5 gap-y-8">
          <div className="lg:col-span-8">
            <span className=" flex justify-between items-center">
              <h2 className=" headerText">My Cards</h2>
              <h2
                className=" cursor-pointer headerText"
                onClick={() => router.push("/credit-card")}
              >
                + Add Cards
              </h2>
            </span>
            <main className=" flex gap-x-4 gap-y-7 flex-col md:flex-row justify-between pt-4">
              <CardCredit
                rest="bg-gradient-to-br md:w-[450px] w-full  text-white from-blue-500 to-blue-800"
                icon={<ChipIcon />}
              />
              <CardCredit
                rest="bg-[#fff] text-[#000]  md:w-[450px] w-full "
                icon={<GrayChipIcon />}
              />
            </main>
          </div>
          <div className="lg:col-span-4">
            <h2 className=" headerText">My Expense</h2>
            <ExpenseBarChart />
          </div>
        </main>
        <main className=" w-full overflow-x-auto">
          <h1 className=" py-9 headerText">Your Transaction History</h1>
          <div className=" flex gap-5 items-center">
            <span
              className=" relative cursor-pointer hover:text-main_primary transition-all duration-200 text-light_blue "
              onClick={() => setCurrentNav(" All Transactions")}
            >
              <h3
                className={`font-semibold text-base hover:text-main_primary transition-all duration-200 text-light_blue ${
                  currentNav === " All Transactions"
                    ? "text-main_primary"
                    : "text-light_blue"
                }`}
              >
                All Transactions
              </h3>
              <span
                className={` absolute ${
                  currentNav === " All Transactions"
                    ? "w-full h-[2px] rounded-xl mt-3 bg-main_primary absolute left-0 scale-x-100"
                    : ""
                }`}
              />
            </span>
            <span
              className=" relative cursor-pointer hover:text-main_primary transition-all duration-200 text-light_blue "
              onClick={() => setCurrentNav("income")}
            >
              <h3
                className={`font-semibold text-base hover:text-main_primary transition-all duration-200 text-light_blue ${
                  currentNav === "income"
                    ? "text-main_primary"
                    : "text-light_blue"
                }`}
              >
                Income
              </h3>
              <span
                className={` absolute ${
                  currentNav === "income"
                    ? "w-full h-[2px] rounded-xl mt-3 bg-main_primary absolute left-0 scale-x-100"
                    : ""
                }`}
              />
            </span>

            <span
              className=" relative cursor-pointer hover:text-main_primary transition-all duration-200 text-light_blue "
              onClick={() => setCurrentNav("expenses")}
            >
              <h3
                className={`font-semibold text-base hover:text-main_primary transition-all duration-200 text-light_blue ${
                  currentNav === "expenses"
                    ? "text-main_primary"
                    : "text-light_blue"
                }`}
              >
                Expenses
              </h3>
              <span
                className={` absolute ${
                  currentNav === "expenses"
                    ? "w-full h-[2px] rounded-xl mt-3 bg-main_primary absolute left-0 scale-x-100"
                    : ""
                }`}
              />
            </span>
          </div>
          <main className="overflow-x-auto max-w-[390px] rounded-md mx-auto md:max-w-full shadow-md sm:rounded-md mt-4">
            <Table className=" w-full">
              <TableCaption title="A List of all your transaction" />
              <TableHeader>
                <TableRow>
                  <TableHead className=" text-light_blue font-medium text-[10px] md:text-sm">
                    Description
                  </TableHead>
                  <TableHead className=" text-light_blue font-medium text-[10px] md:text-sm">
                    TransactionID
                  </TableHead>
                  <TableHead className=" text-light_blue font-medium text-[10px] md:text-sm">
                    Type
                  </TableHead>
                  <TableHead className=" text-light_blue font-medium text-[10px] md:text-sm">
                    Card
                  </TableHead>
                  <TableHead className=" text-light_blue font-medium text-[10px] md:text-sm">
                    Date
                  </TableHead>
                  <TableHead className=" text-right text-light_blue font-medium text-[10px] md:text-sm">
                    Amount
                  </TableHead>
                </TableRow>
              </TableHeader>
              {currentNav === " All Transactions" ? (
                <TableBody>
                  {transactions.map((invoice) => (
                    <TableRow key={invoice.description}>
                      <TableCell className=" font-medium capitalize text-[9px] md:text-sm">
                        {invoice.description}
                      </TableCell>
                      <TableCell className=" font-medium md:text-sm text-[9px]">
                        {invoice.TransactionId}
                      </TableCell>
                      <TableCell className=" font-medium md:text-sm text-[9px]">
                        {invoice.type}
                      </TableCell>
                      <TableCell className="  font-medium md:text-sm text-[9px]">
                        {invoice.Card}
                      </TableCell>
                      <TableCell className="  font-medium md:text-sm text-[9px]">
                        {invoice.date}
                      </TableCell>
                      <TableCell
                        className={`${
                          invoice.amount.includes("-")
                            ? " text-red-500"
                            : " text-green-500"
                        } font-medium md:text-sm text-[9px] text-right`}
                      >
                        {invoice.amount}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              ) : (
                <></>
              )}
              {currentNav === "income" ? (
                <TableBody>
                  {income.map((invoice) => (
                    <TableRow key={invoice.description}>
                      <TableCell className=" font-medium capitalize md:text-sm text-[9px]">
                        {invoice.description}
                      </TableCell>
                      <TableCell className=" font-medium md:text-sm text-[9px]">
                        {invoice.TransactionId}
                      </TableCell>
                      <TableCell className=" font-medium md:text-sm text-[9px]">
                        {invoice.type}
                      </TableCell>
                      <TableCell className="  font-medium md:text-sm text-[9px]">
                        {invoice.Card}
                      </TableCell>
                      <TableCell className="  font-medium md:text-sm text-[9px]">
                        {invoice.date}
                      </TableCell>
                      <TableCell
                        className={`${
                          invoice.amount.includes("-")
                            ? " text-red-500"
                            : " text-green-500"
                        } font-medium md:text-sm text-[9px] text-right`}
                      >
                        {invoice.amount}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              ) : (
                <></>
              )}
              {currentNav === "expenses" ? (
                <TableBody>
                  {expenses.map((invoice) => (
                    <TableRow key={invoice.description}>
                      <TableCell className=" font-medium capitalize md:text-sm text-[9px]">
                        {invoice.description}
                      </TableCell>
                      <TableCell className=" font-medium md:text-sm text-[9px]">
                        {invoice.TransactionId}
                      </TableCell>
                      <TableCell className=" font-medium md:text-sm text-[9px]">
                        {invoice.type}
                      </TableCell>
                      <TableCell className="  font-medium md:text-sm text-[9px]">
                        {invoice.Card}
                      </TableCell>
                      <TableCell className="  font-medium md:text-sm text-[9px]">
                        {invoice.date}
                      </TableCell>
                      <TableCell
                        className={`${
                          invoice.amount.includes("-")
                            ? " text-red-500"
                            : " text-green-500"
                        } font-medium text-xs text-right`}
                      >
                        {invoice.amount}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              ) : (
                <></>
              )}
            </Table>
          </main>
        </main>
      </div>
    </section>
  );
};

export default Transactions;
