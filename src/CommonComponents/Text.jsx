import React from "react";

const Text = ({
  label,
  bgcolor,
  fontSize,
  fontWeight,
  color,
  rounded,
  padding,
  dark,
}) => {
  return (
    <p
      className={`${bgcolor} ${dark} ${fontSize} ${fontWeight} ${color} ${padding} ${rounded} `}
    >
      {label}
    </p>
  );
};

export default Text;
