import {
  BalanceChart,
  ExpensesChart,
  WeeklyExpnsesChart,
} from "@/components/Charts";
import CardCredit from "@/components/credit-card";
import { Card } from "@/components/ui/card";
import { recentDeposit } from "@/constant/menu";
import Image from "next/image";
import { recentTrf } from "@/constant/menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { ChipIcon, GrayChipIcon } from "@/assests";

export default function Home() {
  return (
    <section className=" py-[0.6rem] px-1 md:px-5">
      <main className=" grid lg:grid-cols-12 gap-x-5 gap-y-8">
        <div className="lg:col-span-8">
          <span className=" flex justify-between items-center">
            <h2 className=" headerText">Cards</h2>
            <h2 className=" font-medium text-sm headerText">See All</h2>
          </span>
          <main className=" flex gap-x-4 gap-y-7 flex-col md:flex-row justify-between pt-4">
            <CardCredit
              rest="bg-gradient-to-br md:w-[450px] w-full text-white from-blue-500 to-blue-800"
              icon={<ChipIcon />}
            />
            <CardCredit
              rest="bg-[#fff] w-full md:w-[450px] text-[#000] "
              icon={<GrayChipIcon />}
            />
          </main>
        </div>
        <div className=" lg:col-span-4 md:w-[450px] lg:w-full">
          <h2 className=" font-medium text-[15px] headerText">
            Recent Transaction
          </h2>
          <main className=" flex flex-col justify-between gap-4 h-[220px] mt-4 shadow-md rounded-md p-3 bg-gray-50">
            {recentDeposit.map((data, index) => (
              <div
                key={index}
                className=" flex gap-2 items-center justify-between"
              >
                <span className=" flex items-center gap-4">
                  <p>{data.icon}</p>
                  <div>
                    <h2 className=" capitalize font-medium text-xs">
                      {data.text}
                    </h2>
                    <p className=" capitalize font-medium text-xs">
                      {data.date}
                    </p>
                  </div>
                </span>
                <p className=" capitalize font-medium text-xs">{data.amount}</p>
              </div>
            ))}
          </main>
        </div>
      </main>

      {/* WEEKLY ACTIVITIES  */}
      <main className=" gap-x-[2rem] w-full gap-y-9 pt-8 grid md:grid-cols-12">
        <div className=" md:col-span-8">
          <h2 className=" text-lg font-medium headerText">Weekly Activity</h2>
          <WeeklyExpnsesChart />
        </div>
        <div className=" md:col-span-4">
          <h2 className=" text-lg font-medium headerText">
            Expense Statistics
          </h2>
          <ExpensesChart />
        </div>
      </main>

      {/* TRANSFARS AND BALANCE HISTORY */}
      <main className="w-full grid pt-10 pb-3 gap-7 md:grid-cols-12">
        <div className="md:col-span-4 w-full ">
          <h2 className="text-lg font-medium headerText">Quick Transfer</h2>
          <Card className=" flex flex-col gap-5   mt-4 py-2 lg:h-[220px] ">
            <div className="flex gap-6 p-3 items-center justify-between md:justify-center  text-center">
              {recentTrf.map((data, index) => (
                <div key={index} className=" flex flex-col items-center">
                  <Image
                    src={data.image}
                    alt=""
                    width={50}
                    height={50}
                    className=" object-contain"
                  />
                  <p className=" pt-2 font-normal text-xs">{data.name}</p>
                </div>
              ))}
            </div>
            <span className=" pt-7 pb-4 px-3 items-center flex flex-wrap gap-y-3 justify-between">
              <h2 className=" font-medium text-[#718EBF] text-sm ">
                Write amount
              </h2>
              <div className=" relative">
                <Input className=" w-[200px]" />
                <Button className=" flex items-center gap-2 bg-main_primary rounded-3xl absolute w-28 top-0 right-0">
                  Send <Send size={15} />
                </Button>
              </div>
            </span>
          </Card>
        </div>
        <div className="md:col-span-8">
          <h2 className=" text-lg font-medium headerText">Balance History</h2>
          <div className=" h-auto">
            <BalanceChart />
          </div>
        </div>
      </main>
    </section>
  );
}
