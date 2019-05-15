import React from "react";
import SelectCurrency from "./SelectCurrency";
import "./App.css";
import ItemTable from "./ItemTable";

const data = require("../balanceSheet.json");

class App extends React.Component {
  state = {
    balanceSheet: data
  };

  onAmountChanged = (amount, id) => {
    console.log("Amount changed: " + amount + " for id: " + id);
    //this.setState();
    console.log(this.state.balanceSheet);
  };

  render() {
    return (
      <div className="ui container">
        <h1>Tracking your Networth</h1>
        <SelectCurrency />
        <h3>Net Worth</h3>

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
      </div>
    );
  }
}

export default App;
