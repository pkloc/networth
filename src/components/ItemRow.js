import React from "react";
import Amount from "./Amount";

const ItemRow = ({ item, onAmountChanged }) => {
  return (
    <tr>
      <td>{item.name}</td>
      <td style={{ textAlign: "right" }}>
        {item.monthlyPayment ? item.monthlyPayment : ""}
      </td>
      <td style={{ textAlign: "right" }}>{item.irate}</td>
      <td style={{ textAlign: "right" }}>
        <Amount item={item} onAmountChanged={onAmountChanged} />
      </td>
    </tr>
  );
};

export default ItemRow;
