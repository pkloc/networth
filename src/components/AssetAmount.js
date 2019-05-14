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

  onBlur = () => {
    console.log("Blurbed!!!: " + this.state.amount);
    this.props.onAmountChanged(this.state.amount, this.props.id);
  };

  render() {
    return (
      <div className="ui input">
        <NumberFormat
          isNumericString={true}
          decimalScale={2}
          value={this.state.amount}
          thousandSeparator={true}
          prefix={"$"}
          onValueChange={this.onValueChange}
          onBlur={this.onBlur}
        />
      </div>
    );
  }
}

export default AssetAmount;
