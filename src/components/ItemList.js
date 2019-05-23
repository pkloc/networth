import React from "react";
import ItemRow from "./ItemRow";

const ItemList = ({ items, onAmountChanged, onAmountSubmitted }) => {
  const rows = items.map(item => {
    return (
      <ItemRow key={item.id} item={item} onAmountChanged={onAmountChanged} onAmountSubmitted={onAmountSubmitted} />
    );
  });
  return rows;
};

export default ItemList;
