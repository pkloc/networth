import React from "react";
import SelectCurrency from "./SelectCurrency";
import Total from "./Total";
import ItemTable from "./ItemTable";
import networthcalc from "../api/networthcalc";

import "./App.css";

const data = require("../balanceSheet.json");

class App extends React.Component {
  state = {
    balanceSheet: data
  };

  onAmountChanged = async (amount, id) => {
    var cloneBalanceSheet = JSON.parse(JSON.stringify(this.state)).balanceSheet;
    cloneBalanceSheet.items[id].amount = amount;

    const response = await networthcalc.post(
      "http://localhost:4567/data",
      cloneBalanceSheet
    );

    this.setState({ balanceSheet: response.data });
  };

  onCurrencySelect = currency => {
    console.log("Chosen currency:" + currency);
  }

  render() {
    return (
      <div
        className="ui container"
        style={{ marginTop: "10px", marginBottom: "30px" }}
      >
        <h1>Tracking your Networth</h1>
        <SelectCurrency onCurrencySelect={this.onCurrencySelect} />
        <div style={{ borderBottom: "2px black solid" }}>
          <Total title="Net Worth" total={this.state.balanceSheet.netWorth} />
        </div>

        <h3>Assets</h3>
        <ItemTable
          column1header="Cash and Investments"
          column2header=""
          column3header="Interest Rate"
          items={this.state.balanceSheet.items.filter(item => {
            return item.type.match("asset") && item.term.match("short");
          })}
          onAmountChanged={this.onAmountChanged}
        />
        <ItemTable
          column1header="Long Term Assets"
          column2header=""
          column3header=""
          items={this.state.balanceSheet.items.filter(item => {
            return item.type.match("asset") && item.term.match("long");
          })}
          onAmountChanged={this.onAmountChanged}
        />
        <Total
          title="Total Assets"
          total={this.state.balanceSheet.totalAssets}
        />

        <h3>Liabilities</h3>
        <ItemTable
          column1header="Short Term Liabilities"
          column2header="Monthly Payment"
          column3header="Interest Rate"
          items={this.state.balanceSheet.items.filter(item => {
            return item.type.match("liability") && item.term.match("short");
          })}
          onAmountChanged={this.onAmountChanged}
        />
        <ItemTable
          column1header="Long Term Debt"
          column2header=""
          column3header=""
          items={this.state.balanceSheet.items.filter(item => {
            return item.type.match("liability") && item.term.match("long");
          })}
          onAmountChanged={this.onAmountChanged}
        />
        <Total
          title="Total Liabilities"
          total={this.state.balanceSheet.totalLiabilities}
        />
      </div>
    );
  }
}

export default App;
