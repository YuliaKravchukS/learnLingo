import React, { Suspense } from "react";
import AppBar from "./AppBar/AppBar";
import { Props } from "../types/indexTypes";

const Layuot = ({ children }: Props) => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};

export default Layuot;
