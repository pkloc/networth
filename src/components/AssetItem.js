import React from "react";
import AssetAmount from "./AssetAmount";

const AssetItem = props => {
  return (
    <tr>
      <td>{props.asset.name}</td>
      <td style={{ textAlign: "right" }}>{props.asset.irate}</td>
      <td style={{ textAlign: "right" }}>
        <AssetAmount
          amount={props.asset.amount}
          onAmountChanged={props.onAmountChanged}
          id={props.asset.id}
        />
      </td>
    </tr>
  );
};

export default AssetItem;
