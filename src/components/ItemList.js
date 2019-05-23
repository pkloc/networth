import React from "react";
import ItemRow from "./ItemRow";

const ItemList = ({ items, onAmountChanged, onAmountSubmitted, currency }) => {
  const rows = items.map(item => {
    return (
      <ItemRow key={item.id} item={item} onAmountChanged={onAmountChanged} onAmountSubmitted={onAmountSubmitted} currency={currency} />
    );
  });
  return rows;
};

export default ItemList;
