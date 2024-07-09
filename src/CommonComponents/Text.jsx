import React, { Children } from "react";

const Text = ({ className, children }) => {
  return <p className={className}>{children}</p>;
};

export default Text;
