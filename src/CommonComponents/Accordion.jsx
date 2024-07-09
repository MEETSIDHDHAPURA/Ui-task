import { useState } from "react";
import PropTypes from "prop-types";

const Accordion = ({ items, hover, activeBgColor, inactiveBgColor, borderColor, textColor, activeTextColor, arrowUpIcon, arrowDownIcon }) => {
  const [active, setActive] = useState(null);

  const handleClick = (index) => {
    setActive(index === active ? null : index);
  };

  Accordion.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.node.isRequired,
      })
    ).isRequired, 
    hover: PropTypes.string,
    activeBgColor: PropTypes.string,
    inactiveBgColor: PropTypes.string,
    borderColor: PropTypes.string,
    textColor: PropTypes.string,
    activeTextColor: PropTypes.string,
    arrowUpIcon: PropTypes.string,
    arrowDownIcon: PropTypes.string,
  };
  
  Accordion.defaultProps = {
    activeBgColor: "",
    inactiveBgColor: "bg-white bg-zinc",
    borderColor: "border-gray-200 dark:border-secondary",
    textColor: "text-black dark:text-white",
    activeTextColor: "dark:text-black",
    arrowUpIcon: "fas fa-arrow-up",
    arrowDownIcon: "fas fa-arrow-down dark:text-white",
  };

  return (
    <div>
      {items.map((item, index) => {
        const isActive = index === active;
        return (
          <div key={item.title} className="border-b-0 mb-3">
            <div
              className={`flex justify-between border ${borderColor} ${
                isActive
                  ? "rounded-tl-lg rounded-tr-lg border-b-0 "
                  : "rounded-lg"
              } items-center p-4 cursor-pointer 
                ${isActive ? `${activeBgColor}` : `${inactiveBgColor}`} ${hover} duration-500 `}
              onClick={() => handleClick(index)}
            >
              <div className="flex items-center justify-between">
                <p className={`font-medium ${isActive ? activeTextColor : textColor}`}>
                  {item.title}
                </p>
              </div>
              {isActive ? (
                <i className={arrowUpIcon}></i>
              ) : (
                <i className={arrowDownIcon}></i>
              )}
            </div>
            {isActive ? (
              <div
                className={`overflow-hidden rounded-bl-xl rounded-br-xl border-b border-x ${borderColor} transition-all duration-300 ${
                  isActive ? "max-h-screen" : "max-h-0"
                }`}
              >
                <div className={`p-4 ${activeBgColor}`}>{item.content}</div>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
