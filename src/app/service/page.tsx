import {
  BusinessIcon,
  CoperateLoansIcon,
  InsuranceIcon,
  LoanUserIcon,
  SafetyIcon,
  ShoppingIcon,
} from "@/assests";
import BalanceCard from "@/components/balance-card";

const balance = [
  {
    icon: <InsuranceIcon />,
    amount: "$ 30,000",
    text: "Total Invested Amount",
  },
  {
    icon: <ShoppingIcon />,
    amount: "$ 40,000",
    text: "Number of Investments",
  },
  {
    icon: <SafetyIcon />,
    amount: "+5.9%",
    text: "Rate of Return",
  },
];

const services = [
  {
    icon: <ShoppingIcon />,

    type: "Business loans",
    type_sub_text: "It is a long established ",
    bank: "UBA",
    card_number: "5615***",
    card_name: "Raymond Nnaji",
  },
  {
    icon: <CoperateLoansIcon />,
    type: "Checking accounts",
    bank: "UBA",
    type_sub_text: "It is a long established ",
    card_number: "5615***",
    card_name: "Raymond Nnaji",
  },
  {
    icon: <LoanUserIcon />,
    type: "Savings accounts",
    bank: "UBA",
    type_sub_text: "It is a long established ",
    card_number: "5615***",
    card_name: "Raymond Nnaji",
  },
  {
    icon: <InsuranceIcon />,
    type: "Life Insurance",
    type_sub_text: "It is a long established ",
    bank: "UBA",

    card_number: "5615***",
    card_name: "Raymond Nnaji",
  },
  {
    icon: <BusinessIcon />,
    type: " Debit and credit cards",
    bank: "UBA",
    type_sub_text: "It is a long established ",
    card_number: "5615***",
    card_name: "Raymond Nnaji",
  },
  {
    icon: <ShoppingIcon />,
    type: "Business loans",
    type_sub_text: "It is a long established ",
    bank: "UBA",
    card_number: "5615***",
    card_name: "Raymond Nnaji",
  },
];

const Service = () => {
  return (
    <div className=" flex flex-col justify-between py-[0.6rem] px-1 md:px-5">
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
      <div className=" mt-12">
        <h2 className=" headerText ">Bank Services List</h2>
        <main className=" flex flex-col gap-6 mt-6">
          {services.map((data, index) => (
            <div
              key={index}
              className=" flex justify-between items-center rounded-3xl bg-white px-4 py-2"
            >
              <span className=" flex gap-4 items-center  md:w-[270px]">
                {data.icon}
                <aside>
                  <p className=" text-[#232323] text-sm md:text-base font-medium pb-1">
                    {data.type}
                  </p>
                  <p className=" text-light_blue font-medium text-[8px] md:text-sm">
                    {data.type_sub_text}
                  </p>
                </aside>
              </span>
              <span className=" lg:flex hidden flex-col justify-start items-start md:w-[200px]">
                <h3 className=" text-[#232323] text-[11px] md:text-base font-medium pb-1">
                  Lorem, ipsum.
                </h3>
                <p className=" text-light_blue font-medium text-[8px] md:text-sm">
                  Lorem, ipsum dolor.
                </p>
              </span>
              <span className=" md:flex hidden flex-col justify-start items-start md:w-[200px]">
                <h3 className=" text-[#232323] text-[11px] md:text-base font-medium pb-1">
                  Lorem, ipsum.
                </h3>
                <p className=" text-light_blue font-medium text-[8px] md:text-sm">
                  Lorem, ipsum dolor.
                </p>
              </span>
              <span className=" lg:flex hidden flex-col justify-start items-start md:w-[200px]">
                <h3 className=" text-[#232323] text-[11px] md:text-base font-medium pb-1">
                  Lorem, ipsum.
                </h3>
                <p className=" text-light_blue font-medium text-[8px] md:text-sm">
                  Lorem, ipsum dolor.
                </p>
              </span>
              <span className=" lg:flex hidden flex-col justify-start items-start md:w-[200px]">
                <h3 className=" text-[#232323] text-[11px] md:text-base font-medium pb-1">
                  Lorem, ipsum.
                </h3>
                <p className=" text-light_blue font-medium text-[8px] md:text-sm">
                  Lorem, ipsum dolor.
                </p>
              </span>

              <p className=" border rounded-2xl py-2 px-4 text-light_blue font-medium text-[8px] md:text-sm">
                View Detailes
              </p>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Service;
