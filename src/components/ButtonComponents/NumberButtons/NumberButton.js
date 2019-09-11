import React from "react";

const NumberButton = props => {
  return (
    <>
      <button className="numberButton">{props.number}</button>
    </>
  );
};

export default NumberButton;
