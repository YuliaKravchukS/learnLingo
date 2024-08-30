import React from "react";
import { BtnProp } from "../../types/indexTypes";

const Button: React.FC<BtnProp> = ({ type, text, cb }) => {
  return (
    <button type={type} onClick={() => cb(text)}>
      {text}
    </button>
  );
};

export default Button;
