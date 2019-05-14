import React from "react";
import AssetAmount from "./AssetAmount";

const AssetList = props => {
  const rows = props.assets.map(asset => {
    return (
      <tr>
        <td>{asset.name}</td>
        <td style={{ textAlign: "right" }}>{asset.irate}</td>
        <td style={{ textAlign: "right" }}>
          <AssetAmount amount={asset.amount} />
        </td>
      </tr>
    );
  });
  return rows;
};

export default AssetList;
