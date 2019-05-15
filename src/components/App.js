import React from "react";
import SelectCurrency from "./SelectCurrency";
import "./App.css";
import AssetsTable from "./AssetsTable";

class App extends React.Component {
  state = {
    balanceSheet: {
      assets: [
        {
          id: 0,
          type: "shortTerm",
          name: "Chequing",
          irate: "0%",
          amount: "2000.00"
        },
        {
          id: 1,
          type: "shortTerm",
          name: "Savings for Taxes",
          irate: "5%",
          amount: "4000.00"
        },
        {
          id: 2,
          type: "shortTerm",
          name: "Rainy Day Fund",
          irate: "0%",
          amount: "506.00"
        },
        {
          id: 3,
          type: "shortTerm",
          name: "Savings for Fun",
          irate: "0%",
          amount: "5000.00"
        },
        {
          id: 4,
          type: "shortTerm",
          name: "Savings for Travel",
          irate: "0%",
          amount: "400.00"
        },
        {
          id: 5,
          type: "shortTerm",
          name: "Savings fro Personal Development",
          irate: "1.50%",
          amount: "200.00"
        },
        {
          id: 6,
          type: "shortTerm",
          name: "Investment 1",
          irate: "2.30%",
          amount: "5000.00"
        },
        {
          id: 7,
          type: "shortTerm",
          name: "Investment 2",
          irate: "2%",
          amount: "60000.00"
        },
        {
          id: 8,
          type: "shortTerm",
          name: "Investment 3",
          irate: "5%",
          amount: "30000.00"
        },
        {
          id: 9,
          type: "shortTerm",
          name: "Investment 4",
          irate: "10%",
          amount: "50000.00"
        },
        {
          id: 10,
          type: "shortTerm",
          name: "Investment 5",
          irate: "0%",
          amount: "24000.00"
        },
        {
          id: 11,
          type: "longTerm",
          name: "Primary Home",
          irate: "1%",
          amount: "455000"
        },
        {
          id: 12,
          type: "longTerm",
          name: "Second Home",
          irate: "2%",
          amount: "1564321"
        },
        { id: 13, type: "longTerm", name: "Other", irate: "", amount: "" }
      ],
      liabilities: [
        {
          id: 0,
          type: "shortTerm",
          name: "Credit Card 1",
          monthlyPayment: "200",
          irate: "50%",
          amount: "4342.00"
        },
        {
          id: 1,
          type: "shortTerm",
          name: "Credit Card 2",
          monthlyPayment: "150",
          irate: "22%",
          amount: "322.00"
        },
        {
          id: 2,
          type: "shortTerm",
          name: "(others...)",
          monthlyPayment: "",
          irate: "",
          amount: ""
        },
        {
          id: 3,
          type: "shortTerm",
          name: "",
          monthlyPayment: "",
          irate: "",
          amount: ""
        },
        {
          id: 4,
          type: "shortTerm",
          name: "",
          monthlyPayment: "",
          irate: "",
          amount: ""
        }
      ]
    }
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
        <AssetsTable
          column1header="Cash and Investments"
          column2header=""
          column3header="Interest Rate"
          assets={this.state.balanceSheet.assets.filter(asset => {
            return asset.type.match("shortTerm");
          })}
          onAmountChanged={this.onAmountChanged}
        />
        <AssetsTable
          column1header="Long Term Assets"
          column2header=""
          column3header="Interest Rate"
          assets={this.state.balanceSheet.assets.filter(asset => {
            return asset.type.match("longTerm");
          })}
          onAmountChanged={this.onAmountChanged}
        />
        <h3>Liabilities</h3>
        <AssetsTable
          column1header="Short Term Liabilities"
          column2header="Monthly Payment"
          column3header="Interest Rate"
          assets={this.state.balanceSheet.liabilities.filter(asset => {
            return asset.type.match("shortTerm");
          })}
          onAmountChanged={this.onAmountChanged}
        />
      </div>
    );
  }
}

export default App;
