import React from "react";

const SelectCurrency = () => {
  return (
    <div className="select-currency" align="right" style={{ fontWeight: "bold" }}>
      <span style={{ fontSize: "20px" }}>SelectCurrency:</span>
      <select
        className="ui search dropdown"
        style={{ marginLeft: "10px", color: "red", fontWeight: "bold" }}
      >
        <option value="AL">USD</option>
        <option value="AK">BGN</option>
        <option value="CA">CAD</option>
        <option value="DC">CZK</option>
        <option value="CT">EUR</option>
        <option value="DE">GBP</option>
        <option value="CO">JPY</option>
        <option value="AZ">NZD</option>
        <option value="FL">PLN</option>
        <option value="AR">RUB</option>
      </select>
    </div>
  );
};

export default SelectCurrency;
