import React from "react";
import NumberFormat from "react-number-format";
import "./Total.css";

const Total = ({ title, total }) => {
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
              prefix={"$ "}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Total;
