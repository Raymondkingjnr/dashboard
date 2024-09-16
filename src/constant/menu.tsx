import {
  HomeIcon,
  LoanIcon,
  InvestmentIcon,
  UserIcon,
  ServiceIcon,
  SettingsIcon,
  CreditCardIcon,
  TransfareIcon,
  person1,
  person2,
  person3,
} from "@/assests";
import {
  CardDepositIcon,
  DepositIcon,
  PaypalIcon,
} from "@/assests/icons/deposit";

export const sideMenu = [
  {
    text: "DashBoard",
    route: "/",
    icon: <HomeIcon />,
  },
  {
    text: "Transaction",
    route: "/transaction",
    icon: <TransfareIcon />,
  },
  {
    text: "Account",
    route: "/account",
    icon: <UserIcon />,
  },
  {
    text: "Investment",
    route: "/investment",
    icon: <InvestmentIcon />,
  },
  {
    text: "credit card",
    route: "/credit-card",
    icon: <CreditCardIcon />,
  },
  {
    text: "loans",
    route: "/loans",
    icon: <LoanIcon />,
  },
  {
    text: "service",
    route: "/service",
    icon: <ServiceIcon />,
  },
  // {
  //   text: "My Previlages",
  //   route: "/previlages",
  //   icon: <MetricsIcon />,
  // },
  {
    text: "settings",
    route: "/settings",
    icon: <SettingsIcon />,
  },
];

export const transactions = [
  {
    description: "All Tran*",
    TransactionId: "#12548796",
    type: "Shipping",
    Card: "1571***",
    date: "28,Jan",
    amount: "-$200",
  },

  {
    description: "All Tran*",
    TransactionId: "#12548796",
    type: "Shipping",
    Card: "1571***",
    date: "28,Jan",
    amount: "$200",
  },
  {
    description: "All Tran*",
    TransactionId: "#12548796",
    type: "Shipping",
    Card: "1571***",
    date: "28,Jan",
    amount: "-$200",
  },
  {
    description: "All Tran*",
    TransactionId: "#12548796",
    type: "Shipping",
    Card: "1571***",
    date: "28,Jan",
    amount: "-$200",
  },
  {
    description: "All Tran*",
    TransactionId: "#12548796",
    type: "Shipping",
    Card: "1571***",
    date: "28,Jan,",
    amount: "-$200",
  },
  {
    description: "All Tran*",
    TransactionId: "#12548796",
    type: "Shipping",
    Card: "1571***",
    date: "28,Jan",
    amount: "$280",
  },
];

export const expenses = [
  {
    description: "expenses 1",
    TransactionId: "#12548796",
    type: "Shipping",
    Card: "1571***",
    date: "28,Jan",
    amount: "-$200",
  },
  {
    description: "expenses 2",
    TransactionId: "#12548796",
    type: "Shipping",
    Card: "1571***",
    date: "28,Jan",
    amount: "-$200",
  },
  {
    description: "expenses 3",
    TransactionId: "#12548796",
    type: "Shipping",
    Card: "1571***",
    date: "28,Jan",
    amount: "-$200",
  },
  {
    description: "expenses 4",
    TransactionId: "#12548796",
    type: "Shipping",
    Card: "1571***",
    date: "28,Jan",
    amount: "$200",
  },
];

export const income = [
  {
    description: "Income 1",
    TransactionId: "#12548796",
    type: "Shipping",
    Card: "1571***",
    date: "28,Jan",
    amount: "-$200",
  },
  {
    description: "Income 2",
    TransactionId: "#12548796",
    type: "Shipping",
    Card: "1571***",
    date: "28,Jan",
    amount: "-$200",
  },
  {
    description: "Income 3",
    TransactionId: "#12548796",
    type: "Shipping",
    Card: "1571***",
    date: "28,Jan",
    amount: "-$200",
  },
  {
    description: "Income 4",
    TransactionId: "#12548796",
    type: "Shipping",
    Card: "1571***",
    date: "28,Jan",
    amount: "$200",
  },
  {
    description: "Income 5",
    TransactionId: "#12548796",
    type: "Shipping",
    Card: "1571***",
    date: "28,Jan",
    amount: "$200",
  },
];

export const recentDeposit = [
  {
    icon: <CardDepositIcon />,
    text: "Deposit from card",
    date: "28,January 2021",
    amount: "$100",
    status: "pending",
    card: "0000****",
    service: "Shopping",
  },
  {
    icon: <PaypalIcon />,
    text: "deposit paypal",
    date: "28,January 2021",
    amount: "$80",
    status: "pending",
    card: "2345****",
    service: "Service",
  },
  {
    icon: <DepositIcon />,
    text: "Jemi Wilson",
    date: "28,January 2021",
    amount: "$180",
    status: "completed",
    card: "5266****",
    service: "Transfar",
  },
];

export const recentTrf = [
  {
    image: person1,
    name: "Randy Press",
  },
  {
    image: person2,
    name: "Kennedy Jones",
  },
  {
    image: person3,
    name: "Livia Bator",
  },
];
