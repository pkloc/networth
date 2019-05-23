import React from "react";
import NumberFormat from "react-number-format";
import "./Total.css";
import CurrencyHelper from "../currency/helpers";

const Total = ({ title, total, currency }) => {
  return (
    <div className="total">
      <div className="ui grid">
        <div className="row">
          <div className="four wide column">{title}</div>
          <div className="nine wide column" />
          <div className="three wide column">
            <NumberFormat
              className="numberFormat"
              isNumericString={true}
              decimalScale={2}
              displayType="text"
              value={total}
              thousandSeparator={true}
              thousandsGroupStyle={CurrencyHelper.getThousandGroupStyle(
                currency
              )}
              prefix={CurrencyHelper.getPrefix(currency)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Total;
