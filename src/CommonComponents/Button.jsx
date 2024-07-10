import React from "react";
import PropTypes from "prop-types";

const Button = ({ onClick, disabled, className, children, type }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`border border-black bg-blue-600 px-3 py-2 rounded-lg text-black dark:text-gray-300
      ${className ?? ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
