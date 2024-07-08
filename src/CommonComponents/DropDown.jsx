import React, { useState, useEffect } from "react";

const Dropdown = ({
  dataset,
  gridcols,
  colspen,
  dark,
  label,
  isMultiSelect,
  selectedOptions,
  setSelectedOptions,
}) => {
  
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSelectChange = (value) => {
    if (isMultiSelect) {
      setSelectedOptions((prev) =>
        prev.includes(value)
          ? prev.filter((item) => item !== value)
          : [...prev, value]
      );
    } else {
      setSelectedOptions([value]);
      setDropdownOpen(false);
    }
  };

  const handleClickDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className={`px-4 grid min-w-56 ${gridcols} gap-2 items-center`}>
      
      <div className={`${colspen} relative`}>
        <div className="relative">
          <button
            className={`w-full h-10 border ${dark} border-gray-300 rounded-md text-left px-3 flex items-center justify-between hover:bg-blue-50`}
            onClick={handleClickDropdown}
          >
            {selectedOptions.length === 0
              ? `${label}`
              : selectedOptions.join(", ")}
            {dropdownOpen ? (
              <i className="fa-solid fa-chevron-up"></i>
            ) : (
              <i className="fa-solid fa-chevron-down"></i>
            )}
          </button>
          {dropdownOpen && (
            <div className="absolute mt-1 w-full rounded-md dark:bg-zinc-800 bg-white shadow-lg max-h-60 overflow-auto z-10">
              <ul className="text-sm text-gray-700">
                {dataset.map((option, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 p-2 dark:hover:bg-zinc-700 hover:bg-blue-50 cursor-pointer"
                    onClick={() => handleSelectChange(option.location)}
                  >
                    {isMultiSelect && (
                      <input
                        type="checkbox"
                        checked={selectedOptions.includes(option.location)}
                        readOnly
                      />
                    )}
                    <p className="dark:text-gray-400">{option.location}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
