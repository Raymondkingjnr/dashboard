import { FC, ReactNode } from "react";

type IBalanceCard = {
  icons: ReactNode;
  amount: string;
  text: string;
};

const BalanceCard: FC<IBalanceCard> = ({
  icons,
  amount,
  text,
}: IBalanceCard) => {
  return (
    <div className=" rounded-2xl p-4 bg-white min-w-full  md:w-[250px] flex items-center  gap-5">
      <p>{icons}</p>
      <span>
        <h2 className=" pb-1 text-xs md:text-sm font-medium text-light_blue ">
          {text}
        </h2>
        <h2 className=" font-medium text-base md:text-lg text-gray-900 ">
          {amount}
        </h2>
      </span>
    </div>
  );
};

export default BalanceCard;
