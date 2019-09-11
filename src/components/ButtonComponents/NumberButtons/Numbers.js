import React, { useState } from "react";
import { numbers } from "../../../data";
import NumberButton from "./NumberButton";

const Numbers = () => {
  const [numberState] = useState(numbers);
  return (
    <div>
      {numberState.map(number => (
        <NumberButton key={number} number={number} />
      ))}
    </div>
  );
};

export default Numbers;
