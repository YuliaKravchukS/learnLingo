import React, { Suspense } from "react";
import AppBar from "./AppBar/AppBar";
import { Props } from "../types/indexTypes";
import Loader from "./Loader/Loader";

const Layuot = ({ children }: Props) => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </div>
  );
};

export default Layuot;
