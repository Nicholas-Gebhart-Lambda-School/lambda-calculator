import React, { useState } from "react";
import { specials } from "../../../data";
import SpecialButton from "./SpecialButton";
//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  const [specialState] = useState(specials);
  // STEP 2 - add the imported data to state

  return (
    <div className="specialsContainer">
      {specialState.map((special, index) => (
        <SpecialButton key={index} special={special} />
      ))}
    </div>
  );
};

export default Specials;
