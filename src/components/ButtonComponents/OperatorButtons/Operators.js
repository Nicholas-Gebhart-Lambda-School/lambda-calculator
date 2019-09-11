import React, { useState } from "react";
import { operators } from "../../../data";
import OperatorButton from "./OperatorButton";

const Operators = () => {
  const [operatorState] = useState(operators);
  return (
    <div>
      {/* {console.log(operatorState)} */}
      {operatorState.map((operator, index) => (
        <OperatorButton
          key={index}
          char={operator.char}
          value={operator.value}
        />
      ))}
    </div>
  );
};

export default Operators;
