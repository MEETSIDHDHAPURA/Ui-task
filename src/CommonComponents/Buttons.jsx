import React from "react";

const Buttons = ({
  label,
  bgcolor,
  color,
  fontWeight,
  fontSize,
  padding,
  laterSpace,
  rounded,
  onClick,
}) => {
  
  return (
    <button
      onClick={onClick}
      className={`p-2 rounded ${rounded} ${padding} ${bgcolor} ${color} ${fontWeight} ${fontSize} ${laterSpace} duration-300 dark:text-white`}
    >
      {label}
    </button>
  );
};

export default Buttons;
