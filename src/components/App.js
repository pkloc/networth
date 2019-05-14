import React from "react";
import SelectCurrency from "./SelectCurrency";
import "./App.css";
import AssetsTable from "./AssetsTable";

class App extends React.Component {
  state = {
    networth: {
      assets: [
        { id: 0, name: "Chequing", irate: "0%", amount: "2000.00" },
        { id: 1, name: "Savings for Taxes", irate: "5%", amount: "4000.00" },
        { id: 2, name: "Rainy Day Fund", irate: "0%", amount: "506.00" },
        { id: 3, name: "Savings for Fun", irate: "0%", amount: "5000.00" },
        { id: 4, name: "Savings for Travel", irate: "0%", amount: "400.00" },
        {
          id: 5,
          name: "Savings fro Personal Development",
          irate: "1.50%",
          amount: "200.00"
        },
        { id: 6, name: "Investment 1", irate: "2.30%", amount: "5000.00" },
        { id: 7, name: "Investment 2", irate: "2%", amount: "60000.00" },
        { id: 8, name: "Investment 3", irate: "5%", amount: "30000.00" },
        { id: 9, name: "Investment 4", irate: "10%", amount: "50000.00" },
        { id: 10, name: "Investment 5", irate: "0%", amount: "24000.00" }
      ]
    }
  };

  onAmountChanged = (amount, id) => {
    console.log("Amount changed: " + amount + " for id: " + id);
    console.log(this.state.networth);
  };

  render() {
    return (
      <div className="ui container">
        <h1>Tracking your Networth</h1>
        <SelectCurrency />
        <h3>Net Worth</h3>
        <h3>Assets</h3>
        <AssetsTable
          assets={this.state.networth.assets}
          onAmountChanged={this.onAmountChanged}
        />
      </div>
    );
  }
}

export default App;
