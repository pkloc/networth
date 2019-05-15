import React from "react";
import ItemRow from "./ItemRow";

const ItemList = ({ items, onAmountChanged }) => {
  const rows = items.map(item => {
    return (
      <ItemRow key={item.id} item={item} onAmountChanged={onAmountChanged} />
    );
  });
  return rows;
};

export default ItemList;
