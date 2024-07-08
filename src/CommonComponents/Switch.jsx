import React from "react";

const Switch = ({ isActive, onToggle }) => {
  return (
    <label className="relative inline-block w-8 h-4">
      <input
        type="checkbox"
        checked={isActive}
        onChange={onToggle}
        className="opacity-0 w-0 h-0"
      />
      <span
        className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 transition-colors duration-400 
          ${ isActive ? "bg-blue-500" : "bg-gray-300 dark:bg-zinc-500"
        } rounded-full`}
      >
        <span
          className={`absolute left-0.5 bottom-[1.5px] h-3 w-3 bg-white transition-transform duration-400 rounded-full transform ${ isActive ? "translate-x-4" : "" }`}
        ></span>
      </span>
    </label>
  );
};

export default Switch;
