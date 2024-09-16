"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

interface StockData {
  symbol: string;
  open: string;
  high: string;
  low: string;
  price: string;
  volume: string;
  latestTradingDay: string;
  previousClose: string;
  change: string;
  changePercent: string;
}

const Stocks: React.FC = () => {
  const [stocks, setStocks] = useState<StockData[]>([]);

  useEffect(() => {
    const fetchStocks = async () => {
      const symbols = ["IBM", "AAPL", "GOOGL", "MSFT", "AMZN"]; // Symbols of the stocks you want to track
      const requests = symbols.map((symbol) =>
        axios.get(
          `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=BQ1QRW0TKZDY1LZT`
        )
      );

      try {
        const responses = await Promise.all(requests);
        const fetchedStocks = responses
          .map((response) => response.data["Global Quote"])
          .map((quote) => ({
            symbol: quote["01. symbol"],
            open: quote["02. open"],
            high: quote["03. high"],
            low: quote["04. low"],
            price: quote["05. price"],
            volume: quote["06. volume"],
            latestTradingDay: quote["07. latest trading day"],
            previousClose: quote["08. previous close"],
            change: quote["09. change"],
            changePercent: quote["10. change percent"],
          }));
        setStocks(fetchedStocks);
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };

    fetchStocks();
  }, []);

  return (
    <Table className=" rounded-md shadow-md">
      <TableHeader className=" shadow-md bg-ligther_blue">
        <TableHead>S/N</TableHead>
        <TableHead>Name</TableHead>
        <TableHead>Price</TableHead>
        <TableHead className=" text-right">Return</TableHead>
      </TableHeader>
      <TableBody className="  bg-white rounded-lg">
        {stocks.map((stock, index) => (
          <TableRow key={index} className=" font-medium text-sm">
            <TableCell>{index + 1}</TableCell>
            <TableCell>{stock.symbol}</TableCell>
            <TableCell> {stock.price}</TableCell>
            <TableCell
              className={`text-right ${
                stock.changePercent.includes("-")
                  ? "text-red-500"
                  : "text-green-500"
              }`}
            >
              {stock.changePercent}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Stocks;
