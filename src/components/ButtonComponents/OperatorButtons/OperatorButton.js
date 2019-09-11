import React from "react";

const OperatorButton = props => {
  return (
    <>
      <button className="operatorButton">{props.char}</button>
    </>
  );
};

export default OperatorButton;
