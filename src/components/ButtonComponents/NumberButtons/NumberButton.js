import React from "react";

const NumberButton = props => {
  return (
    <>
      {/* {console.log(props)} */}
      <button className="btn">{props.number}</button>
    </>
  );
};

export default NumberButton;
