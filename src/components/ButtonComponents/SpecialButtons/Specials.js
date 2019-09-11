import React, { useState } from "react";
import { specials } from "../../../data";
import SpecialButton from "./SpecialButton";

const Specials = () => {
  const [specialState] = useState(specials);

  return (
    <div>
      {console.log(specialState)}
      {specialState.map((special, index) => (
        <SpecialButton key={index} special={special} />
      ))}
    </div>
  );
};

export default Specials;
