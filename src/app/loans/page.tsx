import {
  BusinessIcon,
  CoperateLoansIcon,
  CustomeLoan,
  LoanUserIcon,
} from "@/assests";
import BalanceCard from "@/components/balance-card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { loan_data } from "@/constant/loans";

// import { Table } from "antd";

const account = [
  {
    balance: "$30,000",
    icon: <LoanUserIcon />,
    text: "Personal Loans",
  },
  {
    balance: "$20,000",
    icon: <CoperateLoansIcon />,
    text: "Corporate Loans",
  },
  {
    balance: "$40,000",
    icon: <BusinessIcon />,
    text: "Business Loans",
  },
  {
    balance: "$30,000",
    icon: <CustomeLoan />,
    text: "Custom Loans",
  },
];

const Loans = () => {
  return (
    <div className=" py-[1rem] px-2 md:px-5">
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

      <main className=" mt-12">
        <h1 className=" headerText">Active Loan Overview</h1>
        <main className="overflow-x-auto max-w-[360px] rounded-md mx-auto md:max-w-full shadow-md sm:rounded-md mt-4 ">
          <Table className=" w-full">
            <TableHeader>
              <TableRow>
                <TableHead className=" text-light_blue font-medium text-[10px] md:text-sm">
                  SL/No
                </TableHead>
                <TableHead className="text-light_blue font-medium text-[10px] md:text-sm">
                  Loan
                </TableHead>
                <TableHead className=" max-w-[600px] text-light_blue font-medium text-[10px] md:text-sm">
                  Remaining
                </TableHead>
                <TableHead className=" text-light_blue font-medium text-[10px] md:text-sm">
                  Duration
                </TableHead>
                <TableHead className=" text-light_blue font-medium text-[10px] md:text-sm">
                  Interest
                </TableHead>
                <TableHead className=" text-right text-light_blue font-medium text-[10px] md:text-sm">
                  Installment
                </TableHead>
                <TableHead className=" text-right text-light_blue font-medium text-[10px] md:text-sm">
                  Repay
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {loan_data.map((data, index) => (
                <TableRow key={index}>
                  <TableCell className=" text-[10px] font-normal md:text-sm ">
                    0{index + 1}
                  </TableCell>
                  <TableCell className=" text-[10px] font-normal md:text-sm ">
                    ${data.loan}
                  </TableCell>
                  <TableCell className=" text-[10px] font-normal md:text-sm ">
                    ${data.loan_left}
                  </TableCell>
                  <TableCell className=" text-[10px] font-normal md:text-sm">
                    {data.duration}
                  </TableCell>
                  <TableCell className="  text-[10px] font-normal md:text-sm ">
                    {data.interest_rate}
                  </TableCell>
                  <TableCell className=" text-[10px] font-normal md:text-sm text-right">
                    ${data.installment}
                  </TableCell>
                  <TableCell className=" text-[10px] font-normal md:text-sm text-right">
                    Repay
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </main>
      </main>
    </div>
  );
};

export default Loans;
