import React from "react";
import AssetList from "./AssetList";

const AssetsTable = ({
  column1header,
  column2header,
  column3header,
  assets,
  onAmountChanged
}) => {
  return (
    <div>
      <table className="ui basic table">
        <thead>
          <tr>
            <th className="six wide">{column1header}</th>
            <th className="four wide" style={{ textAlign: "right" }}>
              {column2header}
            </th>
            <th className="three wide" style={{ textAlign: "right" }}>
              {column3header}
            </th>
            <th className="three wide" />
          </tr>
        </thead>
        <tbody>
          <AssetList assets={assets} onAmountChanged={onAmountChanged} />
        </tbody>
      </table>
    </div>
  );
};

export default AssetsTable;
