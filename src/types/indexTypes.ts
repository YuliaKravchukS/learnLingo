import { ReactNode } from "react";

export interface Props {
  children?: ReactNode;
}

export interface BtnProp {
  className?: string;
  type: "submit" | "reset" | "button";
  text: string;
  cb: (text: string) => void;
}
