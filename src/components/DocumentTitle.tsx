import React from "react";
import { Helmet } from "react-helmet-async";
import { Props } from "../types/indexTypes";

const DocumentTitle = ({ children }: Props) => {
  return <Helmet>{children}</Helmet>;
};

export default DocumentTitle;
