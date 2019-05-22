import React from "react";

class SelectCurrency extends React.Component {
  onChange = event => {
    this.props.onCurrencySelect(event.target.value);
  };

  render() {
    return (
      <div
        className="select-currency"
        align="right"
        style={{ fontWeight: "bold" }}
      >
        <span style={{ fontSize: "20px" }}>SelectCurrency:</span>
        <select
          onChange={this.onChange}
          className="ui search dropdown"
          style={{ marginLeft: "10px", color: "red", fontWeight: "bold" }}
        >
          <option value="CAD">CAD</option>
          <option value="USD">USD</option>
          <option value="CNY">CNY</option>
          <option value="INR">INR</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="JPY">JPY</option>
          <option value="PHP">PHP</option>
          <option value="PLN">PLN</option>
          <option value="RUB">RUB</option>
        </select>
      </div>
    );
  }
}

export default SelectCurrency;
