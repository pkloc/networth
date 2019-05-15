import React from "react";
import AssetItem from "./AssetItem";

const AssetList = ({assets, onAmountChanged}) => {
  const rows = assets.map(asset => {
    return (
      <AssetItem key={asset.id} asset={asset} onAmountChanged={onAmountChanged} />
    );
  });
  return rows;
};

export default AssetList;
