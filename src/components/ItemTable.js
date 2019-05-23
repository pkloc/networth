import React from "react";
import ItemList from "./ItemList";

const ItemTable = ({
  column1header,
  column2header,
  column3header,
  items,
  onAmountChanged,
  onAmountSubmitted
}) => {
  return (
    <div>
      <table className="ui table">
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
          <ItemList items={items} onAmountChanged={onAmountChanged} onAmountSubmitted={onAmountSubmitted} />
        </tbody>
      </table>
    </div>
  );
};

export default ItemTable;
