import React from "react";
import NumberFormat from "react-number-format";

class AssetAmount extends React.Component {
  state = { amount: this.props.amount };

  onValueChange = values => {
    const { formattedValue, value } = values;

    console.log("Value: " + value);
    console.log("Formatted Value: " + formattedValue);
    this.setState({ amount: value });
  };

  render() {
    return (
      <div>
        <NumberFormat
          isNumericString={true}
          decimalScale={2}
          value={this.state.amount}
          thousandSeparator={true}
          prefix={"$"}
          onValueChange={this.onValueChange}
        />
      </div>
    );
  }
}

export default AssetAmount;
