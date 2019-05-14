import React from "react";
import SelectCurrency from './SelectCurrency';
import './App.css';
import AssetsTable from "./AssetsTable";

class App extends React.Component {
  render() {
    console.log("Hello world");
    return (
      <div className="ui container">
        <h1>Tracking your Networth</h1>
        <SelectCurrency />
        <h3>Net Worth</h3>
        <h3>Assets</h3>
        <AssetsTable />
      </div>
    );
  }
}

export default App;
