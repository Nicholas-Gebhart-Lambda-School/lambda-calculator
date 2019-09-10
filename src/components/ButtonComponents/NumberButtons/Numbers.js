import React, { useState } from "react";
import { numbers } from "../../../data";
import NumberButton from "./NumberButton";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders.
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const Numbers = () => {
  const [numberState] = useState(numbers);
  // STEP 2 - add the imported data to state
  return (
    <div>
      {numberState.map((number, index) => (
        // You need an 'index' value here to avoid 'unique key' error
        <NumberButton key={index} number={number} />
      ))}
    </div>
  );
};

export default Numbers;
