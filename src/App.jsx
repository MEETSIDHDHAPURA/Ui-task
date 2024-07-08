import { useEffect, useState } from "react";
import Buttons from "./CommonComponents/Buttons";
import SecondScreen from "./ScreenTwo/SecondScreen";
import ThirdScreen from "./ScreenThree/ThirdScreen";
import FirstScreen from "./ScreenOne/FirstScreen";
import Switch from "./CommonComponents/Switch";

const App = () => {
  const savedDarkMode = localStorage.getItem("darkMode");
  const [screen, setScreen] = useState("first");
  
  const [darkMode, setDarkMode] = useState(
    savedDarkMode ? JSON.parse(savedDarkMode) : false
  );
  const [isSwitchActive, setIsSwitchActive] = useState(darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const ShowScreen = () => {
    switch (screen) {
      case "first":
        return <FirstScreen />;
      case "second":
        return <SecondScreen />;
      case "third":
        return <ThirdScreen />;
      default:
        return <FirstScreen />;
    }
  };

  const handleSwitchActive = () => {
    setIsSwitchActive(!isSwitchActive);
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", true);
  };

  return (
    <div className="dark:bg-[#151515]">
      <div className="dark:bg-[#19191980] bg-[#5982f110] flex-col py-12 flex items-center justify-center">
        <div className="">
          <div className="flex gap-3 px-5">
            <h1>
              <i className="fa-regular fa-sun dark:text-gray-300"></i>
            </h1>
            <Switch
              isActive={isSwitchActive}
              onToggle={handleSwitchActive}
            />
            <h2>
              <i className="fa-solid fa-moon dark:text-[#F5F7F8]"></i>
            </h2>
          </div>
          <div className="bg-white dark:bg-[#1c2022] h-[100%] w-[60vw] rounded-[50px] shadow-xl ">
            <div></div>
            <div className="grid grid-cols-3 dark:border-gray-400 border-b-2 border-[#5982f120]">
              <div
                onClick={() => setScreen("first")}
                className={`border-r-2 dark:border-gray-400 border-[#5982f120] rounded-tl-[50px] py-4 flex justify-center ${
                  screen === "first" ? "bg-[#96C9F480] dark:bg-blue-500" : ""
                }`}
              >
                <Buttons label={"First Screen"} laterSpace={"tracking-wide"} />
              </div>
              <div
                onClick={() => setScreen("second")}
                className={`border-r-2 py-4 dark:border-gray-400 border-[#5982f120] flex justify-center ${
                  screen === "second" ? "bg-[#96C9F480] dark:bg-blue-500" : ""
                }`}
              >
                <Buttons label={"Second Screen"} laterSpace={"tracking-wide"} />
              </div>
              <div
                onClick={() => setScreen("third")}
                className={`py-4 rounded-tr-[50px] flex justify-center ${
                  screen === "third" ? "bg-[#96C9F480] dark:bg-blue-500" : ""
                }`}
              >
                <Buttons label={"Third Screen"} laterSpace={"tracking-wide"} />
              </div>
            </div>
            <div className="p-4">{ShowScreen()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
