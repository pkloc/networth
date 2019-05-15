import React from "react";
import AssetAmount from "./AssetAmount";

const AssetItem = ({ asset, onAmountChanged }) => {
  return (
    <tr>
      <td>{asset.name}</td>
      <td style={{ textAlign: "right" }}>
        {asset.monthlyPayment ? asset.monthlyPayment : ""}
      </td>
      <td style={{ textAlign: "right" }}>{asset.irate}</td>
      <td style={{ textAlign: "right" }}>
        <AssetAmount asset={asset} onAmountChanged={onAmountChanged} />
      </td>
    </tr>
  );
};

export default AssetItem;
