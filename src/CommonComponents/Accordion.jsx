import { useState } from "react";

const Accordion = ({ items, hover, bgcolor }) => {
  const [active, setactive] = useState(null);

  const handleClick = (index) => {
    setactive(index === active ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => {
        const isActive = index === active;
        return (
          <div key={item.title} className="border-b-0">
            <div
              className={`flex justify-between border dark:border-gray-400 border-b ${
                isActive
                  ? "rounded-tl-lg rounded-tr-lg border-b-0 "
                  : "rounded-lg"
              } items-center p-4 cursor-pointer 
                ${
                  isActive ? `${bgcolor}` : "bg-white dark:bg-zinc-800"
                } ${hover} duration-500 `}
              onClick={() => handleClick(index)}
            >
              <div className="flex items-center justify-between">
                {isActive ? (
                  <p className="font-medium dark:text-black">{item.title}</p>
                ) : (
                  <p className="font-medium dark:text-white">{item.title}</p>
                )}
              </div>
              {isActive ? (
                <i className="fas fa-arrow-up "></i>
              ) : (
                <i className={"fas fa-arrow-down dark:text-white"}></i>
              )}
            </div>
            {isActive ? (
              <div
                className={`overflow-hidden rounded-bl-xl rounded-br-xl border-b border-x transition-all duration-300 ${
                  isActive ? "max-h-screen" : "max-h-0"
                }`}
              >
                <div className={`p-4 ${bgcolor}`}>{item.content}</div>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
