import React from "react";
import PropTypes from "prop-types";
import ValueIncrementer from "../ValueIncrementer/ValueIncrementer";
import "./ValueIncrementerWrapper.css";

const ValueIncrementerWrapper = ({ buttonValues, changeCurrentBarValue }) => (
  <div className="ValueIncrementerWrapper">
    {buttonValues.map((buttonValue, i) => (
      <ValueIncrementer
        key={i}
        value={buttonValue}
        changeCurrentBarValue={changeCurrentBarValue}
      />
    ))}
  </div>
);

ValueIncrementerWrapper.propTypes = {
  buttonValues: PropTypes.arrayOf(PropTypes.number).isRequired,
  changeCurrentBarValue: PropTypes.func.isRequired
};

export default ValueIncrementerWrapper;
