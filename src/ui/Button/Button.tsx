import React from "react";
import { BtnProp } from "../../types/indexTypes";
import css from "./Button.module.css";

const Button: React.FC<BtnProp> = ({ className, type, text, cb }) => {
  return (
    <button
      className={css[`${className}`]}
      type={type}
      onClick={() => cb(text)}
    >
      {text}
    </button>
  );
};

export default Button;
