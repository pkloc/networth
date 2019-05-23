import React from "react";
import NumberFormat from "react-number-format";
import CurrencyHelper from "../currency/helpers";

export class Amount extends React.Component {
  state = {
    changed: false
  };

  onValueChange = values => {
    const { value } = values;
    this.setState({ changed: true });
    this.props.onAmountChanged(value, this.props.item.id);
  };

  onBlur = () => {
    if (this.state.changed) {
      this.setState({ changed: false });
      this.props.onAmountSubmitted();
    }
  };

  render() {
    return (
      <div className="ui input">
        <NumberFormat
          isNumericString={true}
          decimalScale={2}
          fixedDecimalScale={true}
          value={this.props.item.amount}
          thousandSeparator={true}
          thousandsGroupStyle={CurrencyHelper.getThousandGroupStyle(
            this.props.currency
          )}
          prefix={CurrencyHelper.getPrefix(this.props.currency)}
          onValueChange={this.onValueChange}
          onBlur={this.onBlur}
        />
      </div>
    );
  }
}

export default Amount;
