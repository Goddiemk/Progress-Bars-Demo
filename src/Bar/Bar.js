import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./Bar.css";

const Bar = ({ active, value, changeActiveBar, pos }) => {
  // don't allow the width to go over 100%
  const barWidth = Math.min(value, 100);

  const className = classnames("Bar", { "Bar--active": active });

  const barClassName = classnames("Bar__fill", {
    "Bar__fill--over-warning": value > 100
  });

  return (
    <div
      role="button"
      tabIndex="0"
      className={className}
      onClick={changeActiveBar(pos)}
      onKeyDown={e => {
        if (e.keyCode === 13) changeActiveBar(pos);
      }}
    >
      {value}%
      <div style={{ width: `${barWidth}%` }} className={barClassName} />
    </div>
  );
};

Bar.propTypes = {
  active: PropTypes.bool.isRequired,
  changeActiveBar: PropTypes.func.isRequired,
  pos: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

export default Bar;
