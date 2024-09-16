"use client";

import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  Pie,
  PieChart,
  Area,
  AreaChart,
  YAxis,
  LineChart,
  Line,
  Sector,
} from "recharts";

import { PieSectorDataItem } from "recharts/types/polar/Pie";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";

import { Card, CardContent, CardFooter } from "./ui/card";
import { FC } from "react";

type IDoubleChatData = {
  month: string;
  debit: number;
  credit: number;
};

const doubleBarData: IDoubleChatData[] = [
  { month: "January", debit: 186, credit: 80 },
  { month: "February", debit: 305, credit: 200 },
  { month: "March", debit: 237, credit: 120 },
  { month: "April", debit: 73, credit: 190 },
  { month: "May", debit: 209, credit: 130 },
  { month: "June", debit: 214, credit: 140 },
];

const singleBarData = [
  { month: "January", expense: 100 },
  { month: "February", expense: 180 },
  { month: "March", expense: 237 },
  { month: "April", expense: 180 },
  { month: "May", expense: 159 },
  { month: "June", expense: 100 },
];

const singleBarConfig = {
  expense: {
    label: "expense",
    color: "#16DBCC",
  },
} satisfies ChartConfig;

const doubleBarConfig = {
  deposits: {
    label: "Debit",
    color: "#1814f3",
  },
  withdrew: {
    label: "credit",
    color: "#16DBCC",
  },
} satisfies ChartConfig;

export const ExpenseBarChart = () => {
  return (
    <Card className=" md:h-[220px] mt-5 ">
      <CardContent>
        <ChartContainer
          config={singleBarConfig}
          className="md:h-[160px] w-full mt-[3.6rem]"
        >
          <BarChart accessibilityLayer data={singleBarData} className=" ">
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={1}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              // content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="expense" fill="#16DBCC" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export const WeeklyExpnsesChart = () => {
  return (
    <Card className=" mt-6">
      <main className=" flex gap-3 justify-end p-4">
        <span className=" flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#1814f3]" />
          <h1>Debit</h1>
        </span>
        <span className=" flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#16DBCC]" />
          <h1>Credit</h1>
        </span>
      </main>
      <CardContent>
        <ChartContainer
          config={doubleBarConfig}
          className=" lg:h-[380px] w-full"
        >
          <BarChart accessibilityLayer data={doubleBarData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={1}
              axisLine={false}
              // tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="debit" fill="var(--color-deposits)" radius={4} />
            <Bar dataKey="credit" fill="var(--color-withdrew)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

const pieData = [
  { expenses: "entertainment", amount: 275, fill: "#343C6A" },
  { expenses: " bill_expenses", amount: 200, fill: "#FC7900" },
  { expenses: "investments", amount: 187, fill: "#FA00FF" },

  { expenses: "other", amount: 90, fill: "#1814F3" },
];

const pieConfig = {
  visitors: {
    label: "Assets",
  },
  entertainment: {
    label: "Entertainment",
    color: "#343C6A",
  },
  bill_expenses: {
    label: "Bill Expenses",
    color: "#FC7900",
  },
  investments: {
    label: "Investments",
    color: "#FA00FF",
  },

  other: {
    label: "Other",
    color: "#1814F3",
  },
} satisfies ChartConfig;

export const DonutChart = () => {
  return (
    <Card className=" mt-5">
      <CardContent>
        <ChartContainer config={pieConfig}>
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={pieData}
              dataKey="amount"
              nameKey="expenses"
              innerRadius={60}
              strokeWidth={5}
              activeIndex={0}
              activeShape={({
                outerRadius = 0,
                ...props
              }: PieSectorDataItem) => (
                <Sector {...props} outerRadius={outerRadius + 10} />
              )}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <main className=" grid grid-cols-2 gap-2 max-w-[400px] mx-auto place-content-center items-start place-items-center p-4 mt-6">
        <span className=" flex items-center gap-4">
          <div className="w-2 h-2 rounded-full bg-[#343C6A]" />
          <h1 className=" font-medium text-base text-light_blue">
            Entertainment
          </h1>
        </span>
        <span className=" flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#FC7900]" />
          <h1 className=" font-medium text-base text-light_blue">
            Bill Expenses
          </h1>
        </span>
        <span className=" flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#FA00FF]" />
          <h1 className=" font-medium text-base text-light_blue">
            Investments
          </h1>
        </span>
        <span className=" flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#1814F3]" />
          <h1 className=" font-medium text-base text-light_blue">Other</h1>
        </span>
      </main>
    </Card>
  );
};

export const ExpensesChart = () => {
  return (
    <Card className=" mt-6">
      <CardContent>
        <ChartContainer config={pieConfig} className=" lg:h-[220px]">
          <PieChart className=" md:my-8">
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={pieData} dataKey="amount" label nameKey="expenses" />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <main className=" flex flex-col gap-3 justify-end p-4 mt-6">
          <span className=" flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-[#343C6A]" />
            <h1 className=" font-medium text-base text-light_blue">
              Entertainment
            </h1>
          </span>
          <span className=" flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#FC7900]" />
            <h1 className=" font-medium text-base text-light_blue">
              Bill Expenses
            </h1>
          </span>
          <span className=" flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#FA00FF]" />
            <h1 className=" font-medium text-base text-light_blue">
              Investments
            </h1>
          </span>
          <span className=" flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#1814F3]" />
            <h1 className=" font-medium text-base text-light_blue">Other</h1>
          </span>
        </main>
      </CardFooter>
    </Card>
  );
};

const AreaData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 100 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
  { month: "July", desktop: 40 },
  { month: "August", desktop: 104 },
  { month: "September", desktop: 70 },
];
const AreaConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
};

export const BalanceChart = () => {
  return (
    <Card className=" mt-4  ">
      <CardContent>
        <ChartContainer
          config={AreaConfig}
          className="lg:h-[220px] md:h-[270px] py-2 w-full"
        >
          <AreaChart accessibilityLayer data={AreaData}>
            <CartesianGrid vertical={true} />
            <XAxis dataKey="month" />
            <YAxis dataKey="desktop" />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

// LINE CHART
const LineData = [
  { month: "January", amount: 186 },
  { month: "February", amount: 305 },
  { month: "March", amount: 237 },
  { month: "April", amount: 73 },
  { month: "May", amount: 209 },
  { month: "June", amount: 214 },
];
const lineConfig = {
  amount: {
    label: "Amount",
    // color: "#FCAA0B",
  },
} satisfies ChartConfig;

type ILineChart = {
  color: string;
};

export const YearLineChart: FC<ILineChart> = ({ color }: ILineChart) => {
  return (
    <Card className=" w-full">
      <CardContent>
        <ChartContainer
          config={lineConfig}
          className=" py-3 pr-3 lg:h-[340px] w-full"
        >
          <LineChart
            accessibilityLayer
            data={LineData}
            margin={{
              left: 12,
              right: 12,
            }}
            className=" w-full"
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis
              dataKey="amount"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <Line
              dataKey="amount"
              type="natural"
              stroke={color}
              strokeWidth={2}
              dot={{
                fill: color,
              }}
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
