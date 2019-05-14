import React from "react";
import AssetItem from "./AssetItem";

const AssetList = props => {
  const rows = props.assets.map(asset => {
    return (
      <AssetItem key={asset.id} asset={asset} onAmountChanged={props.onAmountChanged} />
    );
  });
  return rows;
};

export default AssetList;
