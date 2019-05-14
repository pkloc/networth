import React from "react";
import AssetList from "./AssetList";

const AssetsTable = (props) => {
  
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
          <AssetList assets={props.assets} onAmountChanged={props.onAmountChanged} />
        </tbody>
      </table>
    </div>
  );
};

export default AssetsTable;
