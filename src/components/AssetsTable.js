import React from "react";
import AssetList from "./AssetList";

const AssetsTable = () => {
  const assets = [
    { name: "Chequing", irate: "0%", amount: "2000.00" },
    { name: "Savings for Taxes", irate: "5%", amount: "4000.00" },
    { name: "Rainy Day Fund", irate: "0%", amount: "506.00" },
    { name: "Savings for Fun", irate: "0%", amount: "5000.00" },
    { name: "Savings for Travel", irate: "0%", amount: "400.00" },
    {
      name: "Savings fro Personal Development",
      irate: "1.50%",
      amount: "200.00"
    },
    { name: "Investment 1", irate: "2.30%", amount: "5000.00" },
    { name: "Investment 2", irate: "2%", amount: "60000.00" },
    { name: "Investment 3", irate: "5%", amount: "30000.00" },
    { name: "Investment 4", irate: "10%", amount: "50000.00" },
    { name: "Investment 5", irate: "0%", amount: "24000.00" }
  ];

  return (
    <div>
      <table className="ui very basic table">
        <thead>
          <tr>
            <th>Cash and Imvestments</th>
            <th style={{ textAlign: "right" }}>Interest Rate</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <AssetList assets={assets} />
        </tbody>
      </table>
    </div>
  );
};

export default AssetsTable;
