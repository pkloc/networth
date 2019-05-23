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

  onAmountChanged = (amount, id) => {
    var cloneBalanceSheet = JSON.parse(JSON.stringify(this.state)).balanceSheet;
    cloneBalanceSheet.items[id].amount = amount;
    this.setState({ balanceSheet: cloneBalanceSheet });
  };

  onAmountSubmitted = async () => {
    const response = await networthcalc.post(
      "http://localhost:4567/data",
      this.state.balanceSheet
    );
    this.setState({ balanceSheet: response.data });
  };

  onCurrencySelect = currency => {
    var cloneBalanceSheet = JSON.parse(JSON.stringify(this.state)).balanceSheet;
    cloneBalanceSheet.newCurrency = currency;
    this.setState({ balanceSheet: cloneBalanceSheet });
  };

  render() {
    return (
      <div
        className="ui container"
        style={{ marginTop: "10px", marginBottom: "30px" }}
      >
        <h1>Tracking your Networth</h1>
        <SelectCurrency onCurrencySelect={this.onCurrencySelect} />
        <div style={{ borderBottom: "2px black solid" }}>
          <Total
            title="Net Worth"
            total={this.state.balanceSheet.netWorth}
            currency={this.state.balanceSheet.currentCurrency}
          />
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
          onAmountSubmitted={this.onAmountSubmitted}
          currency={this.state.balanceSheet.currentCurrency}
        />
        <ItemTable
          column1header="Long Term Assets"
          column2header=""
          column3header=""
          items={this.state.balanceSheet.items.filter(item => {
            return item.type.match("asset") && item.term.match("long");
          })}
          onAmountChanged={this.onAmountChanged}
          onAmountSubmitted={this.onAmountSubmitted}
          currency={this.state.balanceSheet.currentCurrency}
        />
        <Total
          title="Total Assets"
          total={this.state.balanceSheet.totalAssets}
          currency={this.state.balanceSheet.currentCurrency}
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
          onAmountSubmitted={this.onAmountSubmitted}
          currency={this.state.balanceSheet.currentCurrency}
        />
        <ItemTable
          column1header="Long Term Debt"
          column2header=""
          column3header=""
          items={this.state.balanceSheet.items.filter(item => {
            return item.type.match("liability") && item.term.match("long");
          })}
          onAmountChanged={this.onAmountChanged}
          onAmountSubmitted={this.onAmountSubmitted}
          currency={this.state.balanceSheet.currentCurrency}
        />
        <Total
          title="Total Liabilities"
          total={this.state.balanceSheet.totalLiabilities}
          currency={this.state.balanceSheet.currentCurrency}
        />
      </div>
    );
  }
}

export default App;
