import React from "react";
import NumberFormat from "react-number-format";

export class Amount extends React.Component {
  state = {
    amount: this.props.item.amount,
    changed: false
  };

  onValueChange = values => {
    const { formattedValue, value } = values;
    console.log("Value: " + value);
    console.log("Formatted Value: " + formattedValue);
    this.setState({ amount: value });
    this.setState({changed: true});
  };

  onBlur = () => {
    if (this.state.changed){
      this.setState({changed: false})
      this.props.onAmountChanged(this.state.amount, this.props.item.id);
    }    
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

export default Amount;
